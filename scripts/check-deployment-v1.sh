#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-${DEPLOYMENT_URL:-https://book-rental-api-seven.vercel.app}}"
BASE_URL="${BASE_URL%/}"
REQUIRE_OPERATOR_ACCESS="${REQUIRE_OPERATOR_ACCESS:-0}"

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

fail() {
  echo "[fail] $*" >&2
  exit 1
}

pass() {
  echo "[ok] $*"
}

health_body="$tmp_dir/health.json"
health_status="$(curl -sS -o "$health_body" -w "%{http_code}" "$BASE_URL/api/health")"

[[ "$health_status" == "200" ]] || fail "/api/health returned HTTP $health_status"

operator_mode="$(
  node - "$health_body" <<'NODE'
const fs = require("node:fs");
const file = process.argv[2];
const body = JSON.parse(fs.readFileSync(file, "utf8"));

if (body.ok !== true) {
  throw new Error("/api/health did not return ok: true");
}

if (body.checks?.appsScriptWebAppUrl?.ok !== true) {
  throw new Error("APPS_SCRIPT_WEB_APP_URL is not ready");
}

if (body.checks?.operatorAccess?.ok !== true) {
  throw new Error("operator access check is not ready");
}

const mode = body.checks.operatorAccess.mode;
if (!["disabled", "enabled"].includes(mode)) {
  throw new Error(`unexpected operator access mode: ${mode}`);
}

console.log(mode);
NODE
)"

if [[ "$REQUIRE_OPERATOR_ACCESS" == "1" && "$operator_mode" != "enabled" ]]; then
  fail "operator access is $operator_mode; expected enabled"
fi

pass "/api/health ok; operator access mode: $operator_mode"

root_response="$(curl -sS -o /dev/null -w "%{http_code} %{redirect_url}" "$BASE_URL/")"
root_status="${root_response%% *}"
root_redirect="${root_response#* }"

operator_page_status="$(curl -sS -o /dev/null -w "%{http_code}" "$BASE_URL/operator-access")"
[[ "$operator_page_status" == "200" ]] || fail "/operator-access returned HTTP $operator_page_status"
pass "/operator-access returned HTTP 200"

books_status="$(curl -sS -o /dev/null -w "%{http_code}" "$BASE_URL/api/books")"

if [[ "$operator_mode" == "enabled" ]]; then
  [[ "$root_status" =~ ^30[1278]$ ]] || fail "/ returned HTTP $root_status; expected redirect when operator access is enabled"
  [[ "$root_redirect" == "$BASE_URL/operator-access?redirectTo=%2F" || "$root_redirect" == *"/operator-access?redirectTo=%2F" ]] ||
    fail "/ redirected to '$root_redirect'; expected /operator-access?redirectTo=%2F"
  [[ "$books_status" == "401" ]] || fail "/api/books returned HTTP $books_status without cookie; expected 401 when operator access is enabled"

  invalid_access_response="$(
    curl -sS -o /dev/null -w "%{http_code} %{redirect_url}" \
      -H "Content-Type: application/x-www-form-urlencoded" \
      --data "accessCode=__invalid__&redirectTo=/" \
      "$BASE_URL/api/operator-access"
  )"
  invalid_access_status="${invalid_access_response%% *}"
  invalid_access_redirect="${invalid_access_response#* }"

  [[ "$invalid_access_status" == "303" ]] ||
    fail "invalid operator access POST returned HTTP $invalid_access_status; expected 303"
  [[ "$invalid_access_redirect" == "$BASE_URL/operator-access?redirectTo=%2F&error=invalid" || "$invalid_access_redirect" == *"/operator-access?redirectTo=%2F&error=invalid" ]] ||
    fail "invalid operator access POST redirected to '$invalid_access_redirect'; expected /operator-access?redirectTo=%2F&error=invalid"

  pass "/ redirects to operator access"
  pass "/api/books is protected without an operator cookie"
  pass "invalid operator access POST redirects with GET semantics"
else
  [[ "$root_status" == "200" ]] || fail "/ returned HTTP $root_status; expected 200 when operator access is disabled"
  [[ "$books_status" == "200" ]] || fail "/api/books returned HTTP $books_status; expected 200 when operator access is disabled"

  pass "/ returned HTTP 200"
  pass "/api/books returned HTTP 200"
fi

echo "Deployment V1 check completed for $BASE_URL"

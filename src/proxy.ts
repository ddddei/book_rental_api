import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  getOperatorAccessState,
  OPERATOR_ACCESS_COOKIE_NAME,
  verifyOperatorAccessCookie,
} from "@/lib/operatorAccess";

const PUBLIC_PATH_PREFIXES = ["/operator-access", "/api/operator-access"] as const;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};

export async function proxy(request: NextRequest) {
  const state = getOperatorAccessState({
    code: process.env.OPERATOR_ACCESS_CODE,
    secret: process.env.OPERATOR_ACCESS_COOKIE_SECRET,
  });

  if (state.kind === "disabled" || isPublicPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (state.kind === "misconfigured") {
    return rejectRequest(request, "config");
  }

  const cookieValue = request.cookies.get(OPERATOR_ACCESS_COOKIE_NAME)?.value;
  const verified = await verifyOperatorAccessCookie({
    cookieValue,
    code: state.code,
    secret: state.secret,
  });

  if (verified) {
    return NextResponse.next();
  }

  return rejectRequest(request, "required");
}

function isPublicPath(pathname: string) {
  return PUBLIC_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function rejectRequest(request: NextRequest, error: "config" | "required") {
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error === "config"
            ? "운영자 접근 코드 설정을 확인해주세요."
            : "운영자 접근 코드가 필요합니다.",
      },
      { status: error === "config" ? 500 : 401 }
    );
  }

  const url = new URL("/operator-access", request.url);
  url.searchParams.set("redirectTo", getRedirectPath(request));

  if (error === "config") {
    url.searchParams.set("error", error);
  }

  return NextResponse.redirect(url);
}

function getRedirectPath(request: NextRequest) {
  return `${request.nextUrl.pathname}${request.nextUrl.search}`;
}

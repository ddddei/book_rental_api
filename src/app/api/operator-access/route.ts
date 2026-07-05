import { NextResponse } from "next/server";
import {
  getOperatorAccessState,
  OPERATOR_ACCESS_COOKIE_NAME,
  signOperatorAccessCode,
} from "@/lib/operatorAccess";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 12;

export async function POST(request: Request) {
  const state = getOperatorAccessState({
    code: process.env.OPERATOR_ACCESS_CODE,
    secret: process.env.OPERATOR_ACCESS_COOKIE_SECRET,
  });
  const formData = await request.formData();
  const submittedCode = readFormValue(formData, "accessCode").trim();
  const redirectTo = getSafeRedirectPath(readFormValue(formData, "redirectTo"));

  if (state.kind === "disabled") {
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  if (state.kind === "misconfigured") {
    return redirectToAccessPage(request, redirectTo, "config");
  }

  if (submittedCode !== state.code) {
    return redirectToAccessPage(request, redirectTo, "invalid");
  }

  const response = NextResponse.redirect(new URL(redirectTo, request.url));
  response.cookies.set({
    name: OPERATOR_ACCESS_COOKIE_NAME,
    value: await signOperatorAccessCode(state.code, state.secret),
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });

  return response;
}

function readFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

function getSafeRedirectPath(value: string) {
  return value.startsWith("/") && !value.startsWith("//") ? value : "/";
}

function redirectToAccessPage(
  request: Request,
  redirectTo: string,
  error: "config" | "invalid"
) {
  const url = new URL("/operator-access", request.url);
  url.searchParams.set("redirectTo", redirectTo);
  url.searchParams.set("error", error);
  return NextResponse.redirect(url);
}

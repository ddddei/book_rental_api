import { NextResponse } from "next/server";
import { getDeploymentReadiness } from "@/lib/deploymentReadiness";

export function GET() {
  const readiness = getDeploymentReadiness({
    appsScriptWebAppUrl: process.env.APPS_SCRIPT_WEB_APP_URL,
    operatorAccessCode: process.env.OPERATOR_ACCESS_CODE,
    operatorAccessCookieSecret: process.env.OPERATOR_ACCESS_COOKIE_SECRET,
  });

  return NextResponse.json(readiness, { status: readiness.ok ? 200 : 500 });
}

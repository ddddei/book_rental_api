import { describe, expect, it } from "vitest";
import { getDeploymentReadiness } from "./deploymentReadiness";

describe("getDeploymentReadiness", () => {
  it("is ready when Apps Script is configured and operator access is disabled", () => {
    const readiness = getDeploymentReadiness({
      appsScriptWebAppUrl: "https://script.google.com/macros/s/example/exec",
    });

    expect(readiness).toEqual({
      ok: true,
      checks: {
        appsScriptWebAppUrl: { ok: true, configured: true },
        operatorAccess: { ok: true, mode: "disabled" },
      },
    });
  });

  it("is ready when Apps Script and operator access are fully configured", () => {
    const readiness = getDeploymentReadiness({
      appsScriptWebAppUrl: "https://script.google.com/macros/s/example/exec",
      operatorAccessCode: "123456",
      operatorAccessCookieSecret: "cookie-secret",
    });

    expect(readiness).toEqual({
      ok: true,
      checks: {
        appsScriptWebAppUrl: { ok: true, configured: true },
        operatorAccess: { ok: true, mode: "enabled" },
      },
    });
  });

  it("is not ready when Apps Script is missing", () => {
    const readiness = getDeploymentReadiness({});

    expect(readiness).toEqual({
      ok: false,
      checks: {
        appsScriptWebAppUrl: { ok: false, configured: false },
        operatorAccess: { ok: true, mode: "disabled" },
      },
    });
  });

  it("is not ready when operator access env vars are partially configured", () => {
    const readiness = getDeploymentReadiness({
      appsScriptWebAppUrl: "https://script.google.com/macros/s/example/exec",
      operatorAccessCode: "123456",
    });

    expect(readiness).toEqual({
      ok: false,
      checks: {
        appsScriptWebAppUrl: { ok: true, configured: true },
        operatorAccess: { ok: false, mode: "misconfigured" },
      },
    });
  });
});

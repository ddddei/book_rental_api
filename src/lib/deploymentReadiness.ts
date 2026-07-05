import { getOperatorAccessState } from "./operatorAccess";

type DeploymentReadinessConfig = {
  readonly appsScriptWebAppUrl?: string;
  readonly operatorAccessCode?: string;
  readonly operatorAccessCookieSecret?: string;
};

type DeploymentReadiness = {
  readonly ok: boolean;
  readonly checks: {
    readonly appsScriptWebAppUrl: {
      readonly ok: boolean;
      readonly configured: boolean;
    };
    readonly operatorAccess: {
      readonly ok: boolean;
      readonly mode: "disabled" | "enabled" | "misconfigured";
    };
  };
};

export function getDeploymentReadiness(
  config: DeploymentReadinessConfig
): DeploymentReadiness {
  const appsScriptConfigured = Boolean(config.appsScriptWebAppUrl?.trim());
  const operatorAccessState = getOperatorAccessState({
    code: config.operatorAccessCode,
    secret: config.operatorAccessCookieSecret,
  });
  const operatorAccessReady = operatorAccessState.kind !== "misconfigured";

  return {
    ok: appsScriptConfigured && operatorAccessReady,
    checks: {
      appsScriptWebAppUrl: {
        ok: appsScriptConfigured,
        configured: appsScriptConfigured,
      },
      operatorAccess: {
        ok: operatorAccessReady,
        mode: operatorAccessState.kind,
      },
    },
  };
}

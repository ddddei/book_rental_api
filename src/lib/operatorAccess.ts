export const OPERATOR_ACCESS_COOKIE_NAME = "operator_access";

const HMAC_ALGORITHM = {
  name: "HMAC",
  hash: "SHA-256",
} as const;

type OperatorAccessConfig = {
  readonly code?: string;
  readonly secret?: string;
};

type OperatorAccessState =
  | { readonly kind: "disabled" }
  | { readonly kind: "misconfigured" }
  | {
      readonly kind: "enabled";
      readonly code: string;
      readonly secret: string;
    };

export function getOperatorAccessState(
  config: OperatorAccessConfig
): OperatorAccessState {
  const code = config.code?.trim() ?? "";
  const secret = config.secret?.trim() ?? "";

  if (!code && !secret) {
    return { kind: "disabled" };
  }

  if (!code || !secret) {
    return { kind: "misconfigured" };
  }

  return {
    kind: "enabled",
    code,
    secret,
  };
}

export async function signOperatorAccessCode(
  code: string,
  secret: string
): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    HMAC_ALGORITHM,
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    HMAC_ALGORITHM.name,
    key,
    encoder.encode(code)
  );

  return toBase64Url(signature);
}

export async function verifyOperatorAccessCookie({
  cookieValue,
  code,
  secret,
}: {
  readonly cookieValue?: string;
  readonly code: string;
  readonly secret: string;
}): Promise<boolean> {
  if (!cookieValue) {
    return false;
  }

  const expected = await signOperatorAccessCode(code, secret);
  return cookieValue === expected;
}

function toBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

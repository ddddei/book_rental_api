import { describe, expect, it } from "vitest";
import {
  getOperatorAccessState,
  signOperatorAccessCode,
  verifyOperatorAccessCookie,
} from "./operatorAccess";

describe("getOperatorAccessState", () => {
  it("is disabled when no access env vars are configured", () => {
    const state = getOperatorAccessState({});

    expect(state).toEqual({ kind: "disabled" });
  });

  it("is misconfigured when only one access env var is configured", () => {
    expect(getOperatorAccessState({ code: "123456" })).toEqual({
      kind: "misconfigured",
    });
    expect(getOperatorAccessState({ secret: "cookie-secret" })).toEqual({
      kind: "misconfigured",
    });
  });

  it("trims configured code and secret before enabling access", () => {
    const state = getOperatorAccessState({
      code: " 123456 ",
      secret: " cookie-secret ",
    });

    expect(state).toEqual({
      kind: "enabled",
      code: "123456",
      secret: "cookie-secret",
    });
  });
});

describe("operator access signatures", () => {
  it("verifies a cookie generated from the configured code and secret", async () => {
    const cookieValue = await signOperatorAccessCode("123456", "cookie-secret");

    const verified = await verifyOperatorAccessCookie({
      cookieValue,
      code: "123456",
      secret: "cookie-secret",
    });

    expect(verified).toBe(true);
  });

  it("rejects missing or mismatched cookies", async () => {
    const cookieValue = await signOperatorAccessCode("123456", "cookie-secret");

    await expect(
      verifyOperatorAccessCookie({
        cookieValue: undefined,
        code: "123456",
        secret: "cookie-secret",
      })
    ).resolves.toBe(false);
    await expect(
      verifyOperatorAccessCookie({
        cookieValue,
        code: "999999",
        secret: "cookie-secret",
      })
    ).resolves.toBe(false);
  });
});

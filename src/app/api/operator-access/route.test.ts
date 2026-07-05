import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";

describe("POST /api/operator-access", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("redirects with GET semantics after a valid access code", async () => {
    vi.stubEnv("OPERATOR_ACCESS_CODE", "123456");
    vi.stubEnv("OPERATOR_ACCESS_COOKIE_SECRET", "cookie-secret");

    const response = await POST(
      createFormRequest({
        accessCode: "123456",
        redirectTo: "/",
      })
    );

    expect(response.status).toBe(303);
    expect(response.headers.get("location")).toBe("https://example.test/");
    expect(response.headers.get("set-cookie")).toContain("operator_access=");
  });

  it("redirects invalid access codes back to the access page with GET semantics", async () => {
    vi.stubEnv("OPERATOR_ACCESS_CODE", "123456");
    vi.stubEnv("OPERATOR_ACCESS_COOKIE_SECRET", "cookie-secret");

    const response = await POST(
      createFormRequest({
        accessCode: "wrong",
        redirectTo: "/",
      })
    );

    expect(response.status).toBe(303);
    expect(response.headers.get("location")).toBe(
      "https://example.test/operator-access?redirectTo=%2F&error=invalid"
    );
  });
});

function createFormRequest(fields: Record<string, string>) {
  return new Request("https://example.test/api/operator-access", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(fields),
  });
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APPS_SCRIPT_WEB_APP_URL = process.env.APPS_SCRIPT_WEB_APP_URL;

type AppsScriptResponse = {
  readonly ok: boolean;
  readonly error?: string;
  readonly books?: unknown;
  readonly book?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readStringField(body: Record<string, unknown>, key: string) {
  const value = body[key];
  return typeof value === "string" ? value : "";
}

function parseAppsScriptResponse(text: string): AppsScriptResponse {
  const parsed: unknown = JSON.parse(text);

  if (!isRecord(parsed) || typeof parsed.ok !== "boolean") {
    throw new Error("Apps Script 응답 형식이 올바르지 않습니다.");
  }

  return {
    ok: parsed.ok,
    ...(typeof parsed.error === "string" ? { error: parsed.error } : {}),
    ...("books" in parsed ? { books: parsed.books } : {}),
    ...("book" in parsed ? { book: parsed.book } : {}),
  };
}

function maskPhone(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.length <= 4) {
    return "*".repeat(digits.length);
  }

  const prefix = digits.length >= 10 ? digits.slice(0, 3) : "";
  const suffix = digits.slice(-4);

  return prefix ? `${prefix}-****-${suffix}` : `****-${suffix}`;
}

function maskBookPhone(book: unknown): unknown {
  if (!isRecord(book) || !("phone" in book)) {
    return book;
  }

  return {
    ...book,
    phone: maskPhone(book.phone),
  };
}

function maskBooksPayload(books: unknown): unknown {
  return Array.isArray(books) ? books.map(maskBookPhone) : maskBookPhone(books);
}

function maskResponsePhones(data: AppsScriptResponse): AppsScriptResponse {
  return {
    ok: data.ok,
    ...(data.error === undefined ? {} : { error: data.error }),
    ...(data.books === undefined ? {} : { books: maskBooksPayload(data.books) }),
    ...(data.book === undefined ? {} : { book: maskBooksPayload(data.book) }),
  };
}

async function callAppsScript(
  method: "GET" | "POST",
  payload?: Record<string, unknown>,
  action?: string
): Promise<AppsScriptResponse> {
  if (!APPS_SCRIPT_WEB_APP_URL) {
    throw new Error("APPS_SCRIPT_WEB_APP_URL 환경변수가 설정되지 않았습니다.");
  }

  const response =
    method === "GET"
      ? await (() => {
          const url = new URL(APPS_SCRIPT_WEB_APP_URL);
          url.searchParams.set("action", action || "list");

          if (payload?.bookCode) {
            url.searchParams.set("bookCode", String(payload.bookCode));
          }

          return fetch(url.toString(), {
            method: "GET",
            cache: "no-store",
            redirect: "follow",
          });
        })()
      : await fetch(APPS_SCRIPT_WEB_APP_URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(payload ?? {}),
          redirect: "follow",
        });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Apps Script 호출 실패: ${response.status} / ${text}`);
  }

  try {
    return parseAppsScriptResponse(text);
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }

    throw new Error(
      `Apps Script가 JSON이 아닌 응답을 반환했습니다: ${text.slice(0, 300)}`
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action") || "list";
    const bookCode = searchParams.get("bookCode") || "";

    const data = await callAppsScript(
      "GET",
      bookCode ? { bookCode } : undefined,
      action
    );

    return NextResponse.json(maskResponsePhones(data), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "도서 목록을 불러오지 못했습니다.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (!isRecord(body)) {
      throw new Error("요청 형식이 올바르지 않습니다.");
    }

    const data = await callAppsScript("POST", {
      action: "borrow",
      borrowerType: readStringField(body, "borrowerType"),
      memberCode: readStringField(body, "memberCode"),
      borrower: readStringField(body, "borrower"),
      phone: readStringField(body, "phone"),
      borrowedAt: readStringField(body, "borrowedAt"),
      dueDate: readStringField(body, "dueDate"),
      bookCode: readStringField(body, "bookCode"),
      bookTitle: readStringField(body, "bookTitle"),
      id: body.id,
    });

    return NextResponse.json(maskResponsePhones(data), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error ? error.message : "대여 등록에 실패했습니다.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (!isRecord(body)) {
      throw new Error("요청 형식이 올바르지 않습니다.");
    }

    const data = await callAppsScript("POST", {
      action: "return",
      bookCode: readStringField(body, "bookCode"),
      id: body.id,
    });

    return NextResponse.json(maskResponsePhones(data), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error:
          error instanceof Error ? error.message : "반납 처리에 실패했습니다.",
      },
      { status: 500 }
    );
  }
}

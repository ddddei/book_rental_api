import { afterEach, describe, expect, it, vi } from "vitest";
import { borrowBook, fetchBooks, returnBook } from "./api";
import type { BorrowPayload } from "./api";
import type { Book } from "./book";

const BOOK_TEMPLATE: Book = {
  id: 1,
  title: "테스트 도서",
  author: "테스트 작가",
  borrower: "",
  borrowedAt: "",
  dueDate: "",
  bookCode: "CNDB001",
};

const BORROW_PAYLOAD: BorrowPayload = {
  borrowerType: "member",
  borrower: "홍길동",
  phone: "01012345678",
  borrowedAt: "2026-07-06",
  dueDate: "2026-07-20",
  bookCode: "CNDB001",
};

function stubFetch(body: unknown, ok = true) {
  const fetchMock = vi.fn().mockResolvedValue({
    ok,
    json: async () => body,
  });
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("fetchBooks", () => {
  it("requests the books API with GET and no-store cache", async () => {
    const fetchMock = stubFetch({ ok: true, books: [BOOK_TEMPLATE] });

    await fetchBooks();

    expect(fetchMock).toHaveBeenCalledWith("/api/books", {
      method: "GET",
      cache: "no-store",
    });
  });

  it("returns the books from a successful response", async () => {
    stubFetch({ ok: true, books: [BOOK_TEMPLATE] });

    const books = await fetchBooks();

    expect(books).toEqual([BOOK_TEMPLATE]);
  });

  it("returns an empty array when books are missing", async () => {
    stubFetch({ ok: true });

    const books = await fetchBooks();

    expect(books).toEqual([]);
  });

  it("throws the server error message when ok is false", async () => {
    stubFetch({ ok: false, error: "시트를 읽지 못했습니다." });

    await expect(fetchBooks()).rejects.toThrow("시트를 읽지 못했습니다.");
  });

  it("throws the default message on HTTP 500 without a server error", async () => {
    stubFetch({ ok: false }, false);

    await expect(fetchBooks()).rejects.toThrow(
      "도서 목록을 불러오지 못했습니다."
    );
  });
});

describe("borrowBook", () => {
  it("posts the payload with empty-string defaults for optional fields", async () => {
    const fetchMock = stubFetch({ ok: true });

    await borrowBook(BORROW_PAYLOAD);

    expect(fetchMock).toHaveBeenCalledWith("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        borrowerType: "member",
        memberCode: "",
        borrower: "홍길동",
        phone: "01012345678",
        borrowedAt: "2026-07-06",
        dueDate: "2026-07-20",
        bookCode: "CNDB001",
        bookTitle: "",
      }),
    });
  });

  it("resolves without a value on success", async () => {
    stubFetch({ ok: true });

    await expect(borrowBook(BORROW_PAYLOAD)).resolves.toBeUndefined();
  });

  it("throws the server error message when ok is false", async () => {
    stubFetch({ ok: false, error: "이미 대여 중인 도서입니다." });

    await expect(borrowBook(BORROW_PAYLOAD)).rejects.toThrow(
      "이미 대여 중인 도서입니다."
    );
  });

  it("throws the default message on HTTP 500 without a server error", async () => {
    stubFetch({ ok: false }, false);

    await expect(borrowBook(BORROW_PAYLOAD)).rejects.toThrow(
      "대여 등록에 실패했습니다."
    );
  });
});

describe("returnBook", () => {
  it("patches the books API with the book code and id", async () => {
    const fetchMock = stubFetch({ ok: true });

    await returnBook("CNDB001", 7);

    expect(fetchMock).toHaveBeenCalledWith("/api/books", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookCode: "CNDB001",
        id: 7,
      }),
    });
  });

  it("omits the id from the body when it is not provided", async () => {
    const fetchMock = stubFetch({ ok: true });

    await returnBook("CNDB001");

    const [, init] = fetchMock.mock.calls[0];
    expect(init.body).toBe(JSON.stringify({ bookCode: "CNDB001" }));
  });

  it("throws the server error message when ok is false", async () => {
    stubFetch({ ok: false, error: "해당 도서를 찾을 수 없습니다." });

    await expect(returnBook("CNDB001")).rejects.toThrow(
      "해당 도서를 찾을 수 없습니다."
    );
  });

  it("throws the default message on HTTP 500 without a server error", async () => {
    stubFetch({ ok: false }, false);

    await expect(returnBook("CNDB001")).rejects.toThrow(
      "반납 처리에 실패했습니다."
    );
  });
});

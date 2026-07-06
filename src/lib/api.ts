import type { Book } from "@/lib/book";

export type BorrowPayload = {
  borrowerType: "member" | "guest";
  memberCode?: string;
  borrower: string;
  phone?: string;
  borrowedAt: string;
  dueDate: string;
  bookCode?: string;
  bookTitle?: string;
};

type ApiResponse = {
  ok: boolean;
  error?: string;
  books?: Book[];
};

const API_URL = "/api/books";

async function requestBooksApi(
  init: RequestInit,
  fallbackErrorMessage: string
): Promise<ApiResponse> {
  const response = await fetch(API_URL, init);
  const data: ApiResponse = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.error || fallbackErrorMessage);
  }

  return data;
}

export async function fetchBooks(): Promise<Book[]> {
  const data = await requestBooksApi(
    {
      method: "GET",
      cache: "no-store",
    },
    "도서 목록을 불러오지 못했습니다."
  );

  return data.books ?? [];
}

export async function borrowBook(payload: BorrowPayload): Promise<void> {
  await requestBooksApi(
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        borrowerType: payload.borrowerType,
        memberCode: payload.memberCode || "",
        borrower: payload.borrower,
        phone: payload.phone || "",
        borrowedAt: payload.borrowedAt,
        dueDate: payload.dueDate,
        bookCode: payload.bookCode || "",
        bookTitle: payload.bookTitle || "",
      }),
    },
    "대여 등록에 실패했습니다."
  );
}

export async function returnBook(bookCode: string, id?: number): Promise<void> {
  await requestBooksApi(
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookCode,
        id,
      }),
    },
    "반납 처리에 실패했습니다."
  );
}

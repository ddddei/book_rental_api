import { afterEach, describe, expect, it, vi } from "vitest";
import {
  formatDate,
  getBookStatus,
  getDefaultDueDate,
  getOverdueDays,
  getStatusLabel,
  getStatusTone,
  getTodayString,
  normalizeCode,
  normalizePhone,
} from "./book";
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

function makeBook(overrides: Partial<Book> = {}): Book {
  return {
    ...BOOK_TEMPLATE,
    ...overrides,
  };
}

afterEach(() => {
  vi.useRealTimers();
});

describe("formatDate", () => {
  it("returns a dash when the value is empty", () => {
    const formatted = formatDate("");

    expect(formatted).toBe("-");
  });

  it("returns the original date string when the value exists", () => {
    const formatted = formatDate("2026-07-05");

    expect(formatted).toBe("2026-07-05");
  });
});

describe("getTodayString", () => {
  it("returns the local calendar date in yyyy-mm-dd format", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    const today = getTodayString();

    expect(today).toBe("2026-07-05");
  });
});

describe("getDefaultDueDate", () => {
  it("adds fourteen days to a supplied base date", () => {
    const dueDate = getDefaultDueDate("2026-07-05");

    expect(dueDate).toBe("2026-07-19");
  });

  it("handles month and year boundaries", () => {
    const dueDate = getDefaultDueDate("2026-12-25");

    expect(dueDate).toBe("2027-01-08");
  });

  it("uses today when no base date is supplied", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    const dueDate = getDefaultDueDate();

    expect(dueDate).toBe("2026-07-19");
  });
});

describe("normalizeCode", () => {
  it("trims whitespace and uppercases the code", () => {
    const code = normalizeCode("  cndb-001  ");

    expect(code).toBe("CNDB-001");
  });
});

describe("normalizePhone", () => {
  it("keeps only digits", () => {
    const phone = normalizePhone("010-1234 5678");

    expect(phone).toBe("01012345678");
  });
});

describe("getOverdueDays", () => {
  it("returns zero when the due date is empty or invalid", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    expect(getOverdueDays("")).toBe(0);
    expect(getOverdueDays("not-a-date")).toBe(0);
  });

  it("returns zero for today or future due dates", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    expect(getOverdueDays("2026-07-05")).toBe(0);
    expect(getOverdueDays("2026-07-06")).toBe(0);
  });

  it("returns elapsed days after the due date", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    const overdueDays = getOverdueDays("2026-07-03");

    expect(overdueDays).toBe(2);
  });
});

describe("getBookStatus", () => {
  it("returns available when borrower or due date is missing", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    expect(getBookStatus(makeBook({ borrower: "", dueDate: "2026-07-10" }))).toBe(
      "available"
    );
    expect(getBookStatus(makeBook({ borrower: "홍길동", dueDate: "" }))).toBe(
      "available"
    );
  });

  it("returns borrowed when the due date is today or later", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    expect(
      getBookStatus(makeBook({ borrower: "홍길동", dueDate: "2026-07-05" }))
    ).toBe("borrowed");
    expect(
      getBookStatus(makeBook({ borrower: "홍길동", dueDate: "2026-07-06" }))
    ).toBe("borrowed");
  });

  it("returns overdue when the due date is before today", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-05T12:00:00.000Z"));

    const status = getBookStatus(
      makeBook({ borrower: "홍길동", dueDate: "2026-07-04" })
    );

    expect(status).toBe("overdue");
  });
});

describe("status display helpers", () => {
  it("returns Korean labels for each book status", () => {
    expect(getStatusLabel("available")).toBe("대여 가능");
    expect(getStatusLabel("borrowed")).toBe("대여 중");
    expect(getStatusLabel("overdue")).toBe("연체");
  });

  it("returns badge tones for each book status", () => {
    expect(getStatusTone("available")).toBe("emerald");
    expect(getStatusTone("borrowed")).toBe("sky");
    expect(getStatusTone("overdue")).toBe("rose");
  });
});

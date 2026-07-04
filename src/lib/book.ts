export type BookStatus = "available" | "borrowed" | "overdue";
export type BorrowMode = "member" | "guest";
export type BookInputMode = "barcode" | "title";

export type Book = {
  id: number;
  title: string;
  author: string;
  borrower: string;
  borrowedAt: string;
  dueDate: string;
  bookCode: string;
  borrowerType?: string;
  memberCode?: string;
  phone?: string;
};

export function formatDate(value: string) {
  if (!value) return "-";
  return value;
}

export function getTodayString() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

export function getDefaultDueDate(baseDate = getTodayString()) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + 14);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

export function normalizeCode(value: string) {
  return value.trim().toUpperCase();
}

export function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

export function getOverdueDays(dueDate: string) {
  if (!dueDate) return 0;
  const today = new Date(getTodayString());
  const due = new Date(dueDate);
  if (Number.isNaN(due.getTime())) return 0;
  const diff = Math.round((today.getTime() - due.getTime()) / 86400000);
  return Math.max(0, diff);
}

export function getBookStatus(book: Book): BookStatus {
  if (!book.borrower || !book.dueDate) return "available";

  const today = getTodayString();
  if (book.dueDate < today) return "overdue";

  return "borrowed";
}

export function getStatusLabel(status: BookStatus) {
  switch (status) {
    case "available":
      return "대여 가능";
    case "borrowed":
      return "대여 중";
    case "overdue":
      return "연체";
    default:
      return "-";
  }
}

export function getStatusTone(status: BookStatus): "emerald" | "sky" | "rose" {
  switch (status) {
    case "available":
      return "emerald";
    case "borrowed":
      return "sky";
    case "overdue":
      return "rose";
    default:
      return "emerald";
  }
}

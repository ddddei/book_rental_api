import { useEffect, useState } from "react";
import {
  Book,
  BookStatus,
  formatDate,
  getOverdueDays,
  getStatusLabel,
  getStatusTone,
  getTodayString,
} from "@/lib/book";
import { Badge } from "./ui";

type EnrichedBook = Book & { status: BookStatus };

const PAGE_SIZE_OPTIONS = [10, 20, 50] as const;

function DebouncedSearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (draft !== value) {
        onChange(draft);
      }
    }, 300);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  return (
    <input
      type="text"
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      placeholder="도서명, 저자, 대여자, 코드 검색"
      className="w-full rounded-full border border-line bg-surface-soft px-4 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:bg-surface focus:ring-2 focus:ring-brand-soft"
    />
  );
}

function DueInfo({ book }: { book: EnrichedBook }) {
  if (book.status === "available") {
    return <span className="text-ink-faint">—</span>;
  }

  const overdueDays = getOverdueDays(book.dueDate);
  const isToday = book.dueDate === getTodayString();

  return (
    <span
      className={
        book.status === "overdue" ? "text-overdue-mid" : "text-ink-soft"
      }
    >
      {book.borrower || "-"} · {formatDate(book.dueDate)}
      {book.status === "overdue" && overdueDays > 0 ? (
        <b className="ml-1 font-medium">+{overdueDays}일</b>
      ) : null}
      {isToday && book.status === "borrowed" ? (
        <b className="ml-1 font-medium text-today-mid">오늘</b>
      ) : null}
    </span>
  );
}

export function BookListPanel({
  query,
  setQuery,
  filter,
  setFilter,
  fetchBooks,
  loading,
  filteredBooks,
  visibleBooks,
  visibleCount,
  setVisibleCount,
  pageSize,
  setPageSize,
  statusCounts,
  submitting,
  handleReturn,
}: {
  query: string;
  setQuery: (value: string) => void;
  filter: "all" | BookStatus;
  setFilter: (value: "all" | BookStatus) => void;
  fetchBooks: () => void;
  loading: boolean;
  filteredBooks: EnrichedBook[];
  visibleBooks: EnrichedBook[];
  visibleCount: number;
  setVisibleCount: (updater: (prev: number) => number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  statusCounts: {
    all: number;
    available: number;
    borrowed: number;
    overdue: number;
  };
  submitting: boolean;
  handleReturn: (bookCode: string, bookId?: number) => void;
}) {
  const filterTabs: Array<{
    label: string;
    value: "all" | BookStatus;
    count: number;
  }> = [
    { label: "전체", value: "all", count: statusCounts.all },
    { label: "가능", value: "available", count: statusCounts.available },
    { label: "대여 중", value: "borrowed", count: statusCounts.borrowed },
    { label: "연체", value: "overdue", count: statusCounts.overdue },
  ];

  return (
    <div className="min-w-0 rounded-card border border-line bg-surface p-4 sm:p-5">
      <div className="flex flex-col gap-2.5">
        <div className="flex gap-2">
          <div className="min-w-0 flex-1">
            <DebouncedSearchInput value={query} onChange={setQuery} />
          </div>
          <button
            type="button"
            onClick={fetchBooks}
            className="shrink-0 rounded-full border border-line bg-surface px-4 py-2.5 text-sm text-ink-soft transition hover:bg-surface-hover"
          >
            새로고침
          </button>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {filterTabs.map((tab) => {
            const active = filter === tab.value;
            const isOverdue = tab.value === "overdue";

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className={`rounded-full px-3 py-1.5 text-xs transition ${
                  active
                    ? "bg-ink font-medium text-white"
                    : isOverdue
                      ? "border border-overdue-line text-overdue-mid hover:bg-overdue-tint"
                      : "border border-line text-ink-soft hover:bg-surface-hover"
                }`}
              >
                {tab.label} {tab.count}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 hidden md:block">
        <div className="grid grid-cols-[minmax(0,1.6fr)_88px_72px_minmax(0,1fr)_72px] gap-2 px-3 pb-2 text-xs text-ink-faint">
          <span>도서명</span>
          <span>코드</span>
          <span>상태</span>
          <span>대여자 · 반납예정</span>
          <span className="text-right">처리</span>
        </div>

        {loading ? (
          <p className="rounded-row bg-surface-soft px-4 py-10 text-center text-sm text-ink-faint">
            데이터를 불러오는 중입니다...
          </p>
        ) : filteredBooks.length === 0 ? (
          <p className="rounded-row bg-surface-soft px-4 py-10 text-center text-sm text-ink-faint">
            조건에 맞는 도서가 없습니다.
          </p>
        ) : (
          <div className="space-y-1.5">
            {visibleBooks.map((book) => (
              <div
                key={book.id}
                className={`grid grid-cols-[minmax(0,1.6fr)_88px_72px_minmax(0,1fr)_72px] items-center gap-2 rounded-row px-3 py-2.5 text-sm ${
                  book.status === "overdue"
                    ? "bg-overdue-tint"
                    : "bg-surface-hover"
                }`}
              >
                <div className="min-w-0">
                  <p className="truncate text-ink">{book.title}</p>
                  {book.author ? (
                    <p className="truncate text-xs text-ink-faint">
                      {book.author}
                    </p>
                  ) : null}
                </div>
                <span className="font-mono text-xs text-ink-faint">
                  {book.bookCode || "-"}
                </span>
                <Badge tone={getStatusTone(book.status)}>
                  {getStatusLabel(book.status)}
                </Badge>
                <span className="truncate text-xs">
                  <DueInfo book={book} />
                </span>
                <div className="text-right">
                  {book.status === "available" ? (
                    <span className="text-sm font-medium text-brand">
                      대여 가능
                    </span>
                  ) : (
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={() => handleReturn(book.bookCode, book.id)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${
                        book.status === "overdue"
                          ? "border-overdue-line text-overdue-mid hover:bg-overdue-soft"
                          : "border-line text-ink-soft hover:bg-line-soft"
                      }`}
                    >
                      반납
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2 md:hidden">
        {loading ? (
          <p className="rounded-row bg-surface-soft px-4 py-10 text-center text-sm text-ink-faint">
            데이터를 불러오는 중입니다...
          </p>
        ) : filteredBooks.length === 0 ? (
          <p className="rounded-row bg-surface-soft px-4 py-10 text-center text-sm text-ink-faint">
            조건에 맞는 도서가 없습니다.
          </p>
        ) : (
          visibleBooks.map((book) => (
            <div
              key={book.id}
              className={`rounded-row p-3 ${
                book.status === "overdue"
                  ? "bg-overdue-tint"
                  : "bg-surface-hover"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="min-w-0 truncate text-sm font-medium text-ink">
                  {book.title}
                </p>
                <Badge tone={getStatusTone(book.status)}>
                  {book.status === "overdue" &&
                  getOverdueDays(book.dueDate) > 0
                    ? `연체 +${getOverdueDays(book.dueDate)}일`
                    : getStatusLabel(book.status)}
                </Badge>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="min-w-0 truncate text-xs">
                  {book.status === "available" ? (
                    <span className="text-ink-faint">
                      {book.author || "-"}{" "}
                      <span className="font-mono">{book.bookCode || ""}</span>
                    </span>
                  ) : (
                    <>
                      <DueInfo book={book} />{" "}
                      <span className="font-mono text-ink-faint">
                        {book.bookCode || ""}
                      </span>
                    </>
                  )}
                </span>
                {book.status === "available" ? (
                  <span className="shrink-0 rounded-full bg-brand px-3.5 py-1.5 text-xs font-medium text-white">
                    대여 가능
                  </span>
                ) : (
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => handleReturn(book.bookCode, book.id)}
                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium transition disabled:cursor-not-allowed disabled:opacity-60 ${
                      book.status === "overdue"
                        ? "border-overdue-line text-overdue-mid"
                        : "border-line text-ink-soft"
                    }`}
                  >
                    반납
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {filteredBooks.length > 0 ? (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-faint">
            {visibleBooks.length} / {filteredBooks.length} 표시 중
            <span className="ml-3 inline-flex gap-1">
              {PAGE_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setPageSize(size)}
                  className={`rounded-full px-2 py-0.5 text-xs transition ${
                    pageSize === size
                      ? "bg-line-soft font-medium text-ink"
                      : "text-ink-faint hover:text-ink-soft"
                  }`}
                >
                  {size}
                </button>
              ))}
            </span>
          </p>

          {filteredBooks.length > visibleCount ? (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + pageSize)}
                className="flex-1 rounded-full border border-line px-5 py-2 text-sm text-ink-soft transition hover:bg-surface-hover sm:flex-none"
              >
                더보기
              </button>
              <button
                type="button"
                onClick={() => setVisibleCount(() => filteredBooks.length)}
                className="rounded-full border border-line px-4 py-2 text-sm text-ink-faint transition hover:bg-surface-hover"
              >
                전체보기
              </button>
            </div>
          ) : (
            <p className="text-xs text-ink-faint">모든 도서를 표시했습니다.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

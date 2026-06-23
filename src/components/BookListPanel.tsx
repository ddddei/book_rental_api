import { useEffect, useState } from "react";
import {
  Book,
  BookStatus,
  formatDate,
  getStatusLabel,
  getStatusTone,
} from "@/lib/book";
import { Badge, SectionTitle } from "./ui";

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
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-gray-700">
        검색
      </span>
      <input
        type="text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="도서명, 저자, 대여자, 도서코드 검색"
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
      />
    </label>
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
  const filterTabs: Array<{ label: string; value: "all" | BookStatus; count: number }> = [
    { label: "전체", value: "all", count: statusCounts.all },
    { label: "대여 가능", value: "available", count: statusCounts.available },
    { label: "대여 중", value: "borrowed", count: statusCounts.borrowed },
    { label: "연체", value: "overdue", count: statusCounts.overdue },
  ];

  return (
    <div className="min-w-0 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
      <div className="border-b border-gray-100 bg-gradient-to-br from-[#F5F8F5] via-white to-cyan-50 p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <SectionTitle
            title="도서 목록"
            desc="검색과 필터를 이용해 현재 대여 현황을 빠르게 확인하세요."
          />

          <div className="flex flex-wrap gap-2">
            <Badge tone="gray">도서코드 검색 가능</Badge>
            <Badge tone="emerald">대여 가능 도서 확인</Badge>
            <Badge tone="sky">대여 중 목록 확인</Badge>
            <Badge tone="rose">연체 도서 즉시 확인</Badge>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <DebouncedSearchInput value={query} onChange={setQuery} />
            <button
              type="button"
              onClick={fetchBooks}
              className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900"
            >
              새로고침
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filter === tab.value
                    ? "bg-gray-950 text-white shadow-sm"
                    : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab.label}
                <span
                  className={`inline-flex min-w-[1.5rem] items-center justify-center rounded-full px-1.5 py-0.5 text-xs font-bold ${
                    filter === tab.value
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              현재 조건에서{" "}
              <span className="font-bold text-gray-950">
                {filteredBooks.length}
              </span>
              권 중{" "}
              <span className="font-bold text-[#0EA371]">
                {visibleBooks.length}
              </span>
              권 표시
            </p>
            <p className="inline-flex w-fit items-center rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">
              {filter === "all" ? "전체 상태" : getStatusLabel(filter)}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="hidden overflow-hidden rounded-[1.5rem] border border-gray-100 md:block">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-950 text-white">
                <tr>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    도서명
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    도서코드
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    저자
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    상태
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    대여자
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    대여일
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    반납예정일
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.16em] text-gray-200">
                    처리
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {loading ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 py-12 text-center text-sm text-gray-500"
                    >
                      데이터를 불러오는 중입니다...
                    </td>
                  </tr>
                ) : filteredBooks.length === 0 ? (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-4 py-12 text-center text-sm text-gray-500"
                    >
                      조건에 맞는 도서가 없습니다.
                    </td>
                  </tr>
                ) : (
                  visibleBooks.map((book) => (
                    <tr
                      key={book.id}
                      className="align-top transition hover:bg-[#F5F8F5]"
                    >
                      <td className="w-56 px-4 py-5">
                        <p className="text-base font-bold leading-6 text-gray-950">
                          {book.title}
                        </p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                          Title
                        </p>
                      </td>
                      <td className="px-4 py-5">
                        <span className="inline-flex whitespace-nowrap rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700 ring-1 ring-gray-200">
                          {book.bookCode || "-"}
                        </span>
                      </td>
                      <td className="px-4 py-5 text-sm font-medium text-gray-700">
                        {book.author || "-"}
                      </td>
                      <td className="px-4 py-5">
                        <Badge tone={getStatusTone(book.status)}>
                          {getStatusLabel(book.status)}
                        </Badge>
                      </td>
                      <td className="px-4 py-5 text-sm font-medium text-gray-700">
                        {book.borrower || "-"}
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-600">
                        {formatDate(book.borrowedAt)}
                      </td>
                      <td className="px-4 py-5 text-sm text-gray-600">
                        {formatDate(book.dueDate)}
                      </td>
                      <td className="px-4 py-5">
                        {book.status === "available" ? (
                          <span className="inline-flex whitespace-nowrap rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
                            대여 가능
                          </span>
                        ) : (
                          <button
                            type="button"
                            disabled={submitting}
                            onClick={() =>
                              handleReturn(book.bookCode, book.id)
                            }
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            반납 처리
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3 md:hidden">
          {loading ? (
            <div className="rounded-[1.5rem] border border-gray-100 bg-white px-4 py-10 text-center text-sm text-gray-500 shadow-sm">
              데이터를 불러오는 중입니다...
            </div>
          ) : filteredBooks.length === 0 ? (
            <div className="rounded-[1.5rem] border border-gray-100 bg-white px-4 py-10 text-center text-sm text-gray-500 shadow-sm">
              조건에 맞는 도서가 없습니다.
            </div>
          ) : (
            visibleBooks.map((book) => (
              <div
                key={book.id}
                className="rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-base font-bold leading-6 text-gray-950">
                      {book.title}
                    </p>
                    <p className="mt-2 text-sm font-medium text-gray-600">
                      {book.author || "-"}
                    </p>
                  </div>
                  <Badge tone={getStatusTone(book.status)}>
                    {getStatusLabel(book.status)}
                  </Badge>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-2xl bg-gray-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                      Code
                    </p>
                    <p className="mt-1 break-all font-bold text-gray-800">
                      {book.bookCode || "-"}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                      Borrower
                    </p>
                    <p className="mt-1 font-bold text-gray-800">
                      {book.borrower || "-"}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                      대여일
                    </p>
                    <p className="mt-1 font-bold text-gray-800">
                      {formatDate(book.borrowedAt)}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-3">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-400">
                      반납예정일
                    </p>
                    <p className="mt-1 font-bold text-gray-800">
                      {formatDate(book.dueDate)}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  {book.status === "available" ? (
                    <span className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
                      대여 가능
                    </span>
                  ) : (
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={() => handleReturn(book.bookCode, book.id)}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      반납 처리
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {filteredBooks.length > 0 ? (
          <div className="mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-gray-100 bg-[#F5F8F5] p-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span className="text-sm font-medium text-gray-600">
                한 번에 표시할 개수
              </span>
              <div className="flex gap-1">
                {PAGE_SIZE_OPTIONS.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setPageSize(size)}
                    className={`inline-flex items-center justify-center rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                      pageSize === size
                        ? "bg-gray-950 text-white"
                        : "bg-white text-gray-700 ring-1 ring-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {filteredBooks.length > visibleCount ? (
              <div className="flex justify-center gap-2 sm:justify-end">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + pageSize)}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
                >
                  더보기
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleCount(() => filteredBooks.length)}
                  className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900"
                >
                  전체보기
                </button>
              </div>
            ) : (
              <p className="text-sm font-medium text-gray-500 sm:text-right">
                모든 도서를 표시했습니다.
              </p>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

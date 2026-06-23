import {
  Book,
  BookStatus,
  formatDate,
  getStatusLabel,
  getStatusTone,
} from "@/lib/book";
import { Badge, Input, Select, SectionTitle } from "./ui";

type EnrichedBook = Book & { status: BookStatus };

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
  submitting: boolean;
  handleReturn: (bookCode: string, bookId?: number) => void;
}) {
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
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px_auto] lg:items-end">
            <Input
              label="검색"
              value={query}
              onChange={setQuery}
              placeholder="도서명, 저자, 대여자, 도서코드 검색"
            />
            <Select
              label="상태 필터"
              value={filter}
              onChange={(value) => setFilter(value as "all" | BookStatus)}
              options={[
                { label: "전체", value: "all" },
                { label: "대여 가능", value: "available" },
                { label: "대여 중", value: "borrowed" },
                { label: "연체", value: "overdue" },
              ]}
            />
            <button
              type="button"
              onClick={fetchBooks}
              className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900"
            >
              새로고침
            </button>
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

        {filteredBooks.length > visibleCount ? (
          <div className="mt-5 rounded-[1.5rem] border border-gray-100 bg-[#F5F8F5] p-4 text-center">
            <p className="text-sm font-medium text-gray-600">
              아직 표시하지 않은 도서가 있습니다.
            </p>
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="mt-3 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              더보기
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

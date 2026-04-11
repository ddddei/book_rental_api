"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type BookStatus = "available" | "borrowed" | "overdue";
type BorrowMode = "member" | "guest";

type Book = {
  id: number;
  title: string;
  author: string;
  borrower: string;
  borrowedAt: string;
  dueDate: string;
  bookcode: string;
  borrowerType?: string;
  membercode?: string;
  phone?: string;
};

function Badge({
  children,
  tone = "emerald",
}: {
  children: React.ReactNode;
  tone?: "emerald" | "gray" | "rose" | "sky" | "amber";
}) {
  const styles = {
    emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    gray: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
    rose: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
    sky: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
  help,
}: {
  label: string;
  value: string | number;
  help: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-extrabold text-gray-900">{value}</p>
      <p className="mt-2 text-sm text-gray-600">{help}</p>
    </div>
  );
}

function SectionTitle({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  min,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </span>
      <input
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function formatDate(value: string) {
  if (!value) return "-";
  return value;
}

function getTodayString() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

function getDefaultDueDate(baseDate = getTodayString()) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + 14);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().split("T")[0];
}

function normalizeCode(value: string) {
  return value.trim().toUpperCase();
}

function getBookStatus(book: Book): BookStatus {
  if (!book.borrower || !book.dueDate) return "available";

  const today = getTodayString();
  if (book.dueDate < today) return "overdue";

  return "borrowed";
}

function getStatusLabel(status: BookStatus) {
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

function getStatusTone(status: BookStatus): "emerald" | "sky" | "rose" {
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

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | BookStatus>("all");

  const [borrowMode, setBorrowMode] = useState<BorrowMode>("member");
  const [scanInput, setScanInput] = useState("");
  const [borrower, setBorrower] = useState("");
  const [phone, setPhone] = useState("");
  const [borrowedAt, setBorrowedAt] = useState(getTodayString());
  const [dueDate, setDueDate] = useState(getDefaultDueDate());
  const [currentBookCode, setCurrentBookCode] = useState("");

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [cameraReady, setCameraReady] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);

  const html5QrCodeRef = useRef<any>(null);
  const scannerRegionId = "reader";

  async function fetchBooks() {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetch("/api/books", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "도서 목록을 불러오지 못했습니다.");
      }

      setBooks(data.books ?? []);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "도서 목록을 불러오지 못했습니다."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const enrichedBooks = useMemo(() => {
    return books.map((book) => ({
      ...book,
      status: getBookStatus(book),
    }));
  }, [books]);

  const filteredBooks = useMemo(() => {
    return enrichedBooks.filter((book) => {
      const lowerQuery = query.toLowerCase();

      const matchesQuery =
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.borrower.toLowerCase().includes(lowerQuery) ||
        (book.bookcode || "").toLowerCase().includes(lowerQuery);

      const matchesFilter = filter === "all" ? true : book.status === filter;

      return matchesQuery && matchesFilter;
    });
  }, [enrichedBooks, query, filter]);

  const stats = useMemo(() => {
    const total = enrichedBooks.length;
    const available = enrichedBooks.filter(
      (book) => book.status === "available"
    ).length;
    const borrowed = enrichedBooks.filter(
      (book) => book.status === "borrowed"
    ).length;
    const overdue = enrichedBooks.filter(
      (book) => book.status === "overdue"
    ).length;
    const dueToday = enrichedBooks.filter(
      (book) =>
        (book.status === "borrowed" || book.status === "overdue") &&
        book.dueDate === getTodayString()
    ).length;

    return { total, available, borrowed, overdue, dueToday };
  }, [enrichedBooks]);

  function resetBorrowForm() {
    setScanInput("");
    setBorrower("");
    setPhone("");
    setBorrowedAt(getTodayString());
    setDueDate(getDefaultDueDate());
    setCurrentBookCode("");
  }

  async function submitBorrow(payload: {
    borrowerType: "member" | "guest";
    memberCode?: string;
    borrower: string;
    phone?: string;
    borrowedAt: string;
    dueDate: string;
    bookCode: string;
  }) {
    try {
      setSubmitting(true);

      const response = await fetch("/api/books", {
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
          bookCode: payload.bookCode,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "대여 등록에 실패했습니다.");
      }

      await fetchBooks();

      const borrowerText =
        payload.borrowerType === "member"
          ? payload.borrower
          : `${payload.borrower} (${payload.phone || "-"})`;

      resetBorrowForm();
      setMessage(`대여 완료: ${payload.bookCode} / ${borrowerText}`);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "대여 등록에 실패했습니다."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function handleScanSubmit(rawCode?: string) {
    setMessage("");
    setErrorMessage("");

    const code = normalizeCode(rawCode ?? scanInput);

    if (!code) {
      setErrorMessage("바코드를 입력하거나 스캔해주세요.");
      return;
    }

    if (!borrowedAt) {
      setErrorMessage("대여일을 입력해주세요.");
      return;
    }

    if (!dueDate) {
      setErrorMessage("반납예정일을 입력해주세요.");
      return;
    }

    if (dueDate < borrowedAt) {
      setErrorMessage("반납예정일은 대여일보다 빠를 수 없습니다.");
      return;
    }

    if (borrowMode === "member") {
      if (!borrower.trim()) {
        setErrorMessage("회원 이름을 입력해주세요.");
        return;
      }

      if (!code.startsWith("CNDB")) {
        setErrorMessage("도서 바코드를 스캔해주세요.");
        return;
      }

      setCurrentBookCode(code);

      await submitBorrow({
        borrowerType: "member",
        memberCode: "",
        borrower: borrower.trim(),
        phone: "",
        borrowedAt,
        dueDate,
        bookCode: code,
      });

      return;
    }

    if (!borrower.trim()) {
      setErrorMessage("비회원 이름을 입력해주세요.");
      return;
    }

    if (!phone.trim()) {
      setErrorMessage("비회원 연락처를 입력해주세요.");
      return;
    }

    if (!code.startsWith("CNDB")) {
      setErrorMessage("도서 바코드를 스캔해주세요.");
      return;
    }

    setCurrentBookCode(code);

    await submitBorrow({
      borrowerType: "guest",
      borrower: borrower.trim(),
      phone: phone.trim(),
      borrowedAt,
      dueDate,
      bookCode: code,
    });
  }

  async function handleReturn(bookCode: string, bookId?: number) {
    try {
      setSubmitting(true);
      setMessage("");
      setErrorMessage("");

      const response = await fetch("/api/books", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookCode,
          id: bookId,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "반납 처리에 실패했습니다.");
      }

      await fetchBooks();
      setMessage(`반납 처리가 완료되었습니다: ${bookCode}`);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "반납 처리에 실패했습니다."
      );
    } finally {
      setSubmitting(false);
    }
  }

  async function stopCamera() {
    try {
      if (html5QrCodeRef.current) {
        const state = html5QrCodeRef.current.getState?.();
        if (state === 2 || state === 1) {
          await html5QrCodeRef.current.stop();
        }
        await html5QrCodeRef.current.clear();
      }
    } catch {
      // ignore
    } finally {
      html5QrCodeRef.current = null;
      setCameraOpen(false);
      setCameraReady(false);
      setCameraLoading(false);
    }
  }

  async function startCamera() {
    try {
      setCameraError("");
      setCameraLoading(true);

      const { Html5Qrcode } = await import("html5-qrcode");

      if (html5QrCodeRef.current) {
        await stopCamera();
      }

      const scanner = new Html5Qrcode(scannerRegionId);
      html5QrCodeRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 140 },
          aspectRatio: 1.7778,
        },
        async (decodedText: string) => {
          const code = normalizeCode(decodedText);

          try {
            await stopCamera();
            await handleScanSubmit(code);
          } catch {
            // ignore
          }
        },
        () => {
          // scan failure callback - ignore noisy events
        }
      );

      setCameraOpen(true);
      setCameraReady(true);
    } catch (error) {
      setCameraError(
        error instanceof Error
          ? error.message
          : "카메라를 시작하지 못했습니다."
      );
    } finally {
      setCameraLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-gray-100 bg-white/90 p-6 shadow-sm backdrop-blur sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Badge>도서 대여 관리</Badge>
                <Badge tone="sky">회원/비회원 대여</Badge>
                <Badge tone="rose">연체 자동 표시</Badge>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                도서 대여를 한 화면에서
                <span className="block bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
                  스캔하고, 등록하고, 반납 처리하세요
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
                회원은 회원 이름 입력 후 도서 바코드를 스캔해 대여할 수 있고,
                비회원은 이름과 연락처 입력 후 도서 바코드를 스캔할 수 있습니다.
                카메라 스캔도 지원합니다.
              </p>
            </div>

            <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-emerald-500 to-sky-500 p-1 shadow-sm">
              <div className="rounded-[22px] bg-white p-5">
                <p className="text-sm font-bold text-gray-900">운영 상태</p>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <p className="font-semibold text-gray-900">현재 연결 방식</p>
                    <p className="mt-2">
                      Next.js API → Apps Script → Google Sheets
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-100 p-4">
                    <p className="font-semibold text-gray-900">스캔 흐름</p>
                    <p className="mt-2">
                      회원은 이름 입력 → 도서코드, 비회원은 정보 입력 → 도서코드
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard label="전체 도서" value={stats.total} help="등록된 전체 도서 수" />
          <StatCard label="대여 가능" value={stats.available} help="즉시 대여 가능한 도서" />
          <StatCard label="대여 중" value={stats.borrowed} help="현재 이용 중인 도서" />
          <StatCard label="연체" value={stats.overdue} help="반납 예정일이 지난 도서" />
          <StatCard label="오늘 반납 예정" value={stats.dueToday} help="오늘 반납 예정 도서" />
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <SectionTitle
              title="대여 등록"
              desc="회원은 이름 입력 후, 비회원은 이름과 연락처 입력 후 도서 바코드를 스캔하세요."
            />

            <div className="mt-6 space-y-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setBorrowMode("member");
                    resetBorrowForm();
                    setMessage("");
                    setErrorMessage("");
                  }}
                  className={`inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    borrowMode === "member"
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  회원 대여
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBorrowMode("guest");
                    resetBorrowForm();
                    setMessage("");
                    setErrorMessage("");
                  }}
                  className={`inline-flex flex-1 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    borrowMode === "guest"
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  비회원 대여
                </button>
              </div>

              <div className="flex gap-3">
                {!cameraOpen ? (
                  <button
                    type="button"
                    onClick={startCamera}
                    disabled={cameraLoading}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {cameraLoading ? "카메라 준비 중..." : "카메라 스캔 시작"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={stopCamera}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
                  >
                    카메라 스캔 종료
                  </button>
                )}
              </div>

              <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-3">
                <div
                  id={scannerRegionId}
                  className={`overflow-hidden rounded-2xl bg-black ${cameraReady ? "min-h-[260px]" : "min-h-[120px]"}`}
                />
                {!cameraOpen ? (
                  <p className="mt-3 text-sm text-gray-500">
                    태블릿에서 카메라 스캔 시작을 누르면 후면 카메라가 열립니다.
                  </p>
                ) : null}
                {cameraError ? (
                  <p className="mt-3 text-sm font-medium text-rose-700">
                    {cameraError}
                  </p>
                ) : null}
              </div>

              {borrowMode === "member" ? (
                <>
                  <div className="rounded-2xl bg-sky-50 p-4 text-sm text-sky-800 ring-1 ring-sky-100">
                    회원 이름을 입력한 뒤 도서 바코드를 스캔하세요.
                  </div>

                  <Input
                    label="회원 이름"
                    value={borrower}
                    onChange={setBorrower}
                    placeholder="회원 이름을 입력하세요"
                  />

                  <Input
                    label="도서 바코드"
                    value={scanInput}
                    onChange={setScanInput}
                    placeholder="CNDB0000"
                  />

                  <Input
                    label="대여일"
                    type="date"
                    value={borrowedAt}
                    onChange={setBorrowedAt}
                  />

                  <Input
                    label="반납예정일"
                    type="date"
                    value={dueDate}
                    onChange={setDueDate}
                    min={borrowedAt || undefined}
                  />

                  <div className="flex gap-3">
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={() => handleScanSubmit()}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "처리 중..." : "회원 대여 처리"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        resetBorrowForm();
                        setMessage("입력값을 초기화했습니다.");
                        setErrorMessage("");
                      }}
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
                    >
                      초기화
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-800 ring-1 ring-amber-100">
                    비회원 이름과 연락처를 입력한 뒤 도서 바코드를 스캔하세요.
                  </div>

                  <Input
                    label="비회원 이름"
                    value={borrower}
                    onChange={setBorrower}
                    placeholder="이름을 입력하세요"
                  />

                  <Input
                    label="비회원 연락처"
                    value={phone}
                    onChange={setPhone}
                    placeholder="예: 010-1234-5678"
                  />

                  <Input
                    label="도서 바코드"
                    value={scanInput}
                    onChange={setScanInput}
                    placeholder="CNDB0000"
                  />

                  <Input
                    label="대여일"
                    type="date"
                    value={borrowedAt}
                    onChange={setBorrowedAt}
                  />

                  <Input
                    label="반납예정일"
                    type="date"
                    value={dueDate}
                    onChange={setDueDate}
                    min={borrowedAt || undefined}
                  />

                  <div className="flex gap-3">
                    <button
                      type="button"
                      disabled={submitting}
                      onClick={() => handleScanSubmit()}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "처리 중..." : "비회원 대여 처리"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        resetBorrowForm();
                        setMessage("입력값을 초기화했습니다.");
                        setErrorMessage("");
                      }}
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
                    >
                      초기화
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="mt-4 min-h-12">
              {message ? (
                <p className="text-sm font-medium text-emerald-700">{message}</p>
              ) : null}
              {errorMessage ? (
                <p className="mt-2 text-sm font-medium text-rose-700">
                  {errorMessage}
                </p>
              ) : null}
              {currentBookCode ? (
                <p className="mt-2 text-xs text-gray-500">
                  마지막 처리 도서코드: {currentBookCode}
                </p>
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <SectionTitle
                title="도서 목록"
                desc="검색과 필터를 이용해 현재 대여 현황을 빠르게 확인하세요."
              />

              <div className="grid gap-3 sm:grid-cols-2 lg:w-[440px]">
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
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                onClick={fetchBooks}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
              >
                새로고침
              </button>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        도서명
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        도서코드
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        저자
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        상태
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        대여자
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        대여일
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        반납예정일
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                        처리
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-4 py-10 text-center text-sm text-gray-500"
                        >
                          데이터를 불러오는 중입니다...
                        </td>
                      </tr>
                    ) : filteredBooks.length === 0 ? (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-4 py-10 text-center text-sm text-gray-500"
                        >
                          조건에 맞는 도서가 없습니다.
                        </td>
                      </tr>
                    ) : (
                      filteredBooks.map((book) => (
                        <tr
                          key={book.id}
                          className="border-t border-gray-100 align-top"
                        >
                          <td className="px-4 py-4">
                            <p className="font-semibold text-gray-900">
                              {book.title}
                            </p>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {book.bookcode || "-"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {book.author || "-"}
                          </td>
                          <td className="px-4 py-4">
                            <Badge tone={getStatusTone(book.status)}>
                              {getStatusLabel(book.status)}
                            </Badge>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {book.borrower || "-"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {formatDate(book.borrowedAt)}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {formatDate(book.dueDate)}
                          </td>
                          <td className="px-4 py-4">
                            {book.status === "available" ? (
                              <span className="text-sm text-gray-400">
                                대여 가능
                              </span>
                            ) : (
                              <button
                                type="button"
                                disabled={submitting}
                                onClick={() =>
                                  handleReturn(book.bookcode, book.id)
                                }
                                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
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

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="gray">도서코드 검색 가능</Badge>
              <Badge tone="emerald">대여 가능 도서 확인</Badge>
              <Badge tone="sky">대여 중 목록 확인</Badge>
              <Badge tone="rose">연체 도서 즉시 확인</Badge>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

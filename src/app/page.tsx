"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type BookStatus = "available" | "borrowed" | "overdue";
type BorrowMode = "member" | "guest";
type BookInputMode = "barcode" | "title";

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
      className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

function StatCard({
  label,
  value,
  help,
  point,
  tone,
}: {
  label: string;
  value: string | number;
  help: string;
  point: string;
  tone: "sage" | "emerald" | "cyan" | "rose" | "amber";
}) {
  const tones = {
    sage: {
      card: "border-[#0EA371]/10 bg-[#F5F8F5]",
      dot: "bg-gray-500",
      pill: "bg-white/80 text-gray-600 ring-gray-200",
      value: "text-gray-950",
      glow: "bg-gray-300/30",
    },
    emerald: {
      card: "border-[#0EA371]/20 bg-[#F5F8F5]",
      dot: "bg-[#0EA371]",
      pill: "bg-[#0EA371]/10 text-[#0EA371] ring-[#0EA371]/15",
      value: "text-[#0EA371]",
      glow: "bg-[#0EA371]/15",
    },
    cyan: {
      card: "border-[#00B5C9]/20 bg-cyan-50/60",
      dot: "bg-[#00B5C9]",
      pill: "bg-[#00B5C9]/10 text-cyan-700 ring-[#00B5C9]/15",
      value: "text-cyan-700",
      glow: "bg-[#00B5C9]/15",
    },
    rose: {
      card: "border-rose-200 bg-rose-50/60",
      dot: "bg-rose-500",
      pill: "bg-rose-100 text-rose-700 ring-rose-200",
      value: "text-rose-700",
      glow: "bg-rose-300/20",
    },
    amber: {
      card: "border-amber-200 bg-amber-50/70",
      dot: "bg-amber-400",
      pill: "bg-amber-100 text-amber-700 ring-amber-200",
      value: "text-amber-700",
      glow: "bg-amber-300/25",
    },
  };

  const style = tones[tone];

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${style.card}`}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full blur-2xl ${style.glow}`}
      />
      <div className="relative flex min-h-full flex-col justify-between gap-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            {label}
          </p>
          <span
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${style.pill}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            {point}
          </span>
        </div>

        <div>
          <p className={`text-4xl font-black leading-none tracking-tight ${style.value}`}>
            {value}
          </p>
          <p className="mt-3 text-xs font-medium leading-5 text-gray-600 sm:text-sm">
            {help}
          </p>
        </div>
      </div>
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

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
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
  const [visibleCount, setVisibleCount] = useState(10);

  const [borrowMode, setBorrowMode] = useState<BorrowMode>("member");
  const [bookInputMode, setBookInputMode] = useState<BookInputMode>("barcode");
  const [scanInput, setScanInput] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
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

  useEffect(() => {
    setVisibleCount(10);
  }, [query, filter]);

  const visibleBooks = useMemo(() => {
    return filteredBooks.slice(0, visibleCount);
  }, [filteredBooks, visibleCount]);

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

  const availableTitleOptions = useMemo(() => {
    const uniqueTitles = Array.from(
      new Set(
        enrichedBooks
          .filter((book) => book.status === "available")
          .map((book) => book.title.trim())
          .filter(Boolean)
      )
    ).sort((a, b) => a.localeCompare(b, "ko"));

    return [
      { label: "도서명을 선택하세요", value: "" },
      ...uniqueTitles.map((title) => ({
        label: title,
        value: title,
      })),
    ];
  }, [enrichedBooks]);

  function resetBorrowForm() {
    setScanInput("");
    setSelectedTitle("");
    setBorrower("");
    setPhone("");
    setBorrowedAt(getTodayString());
    setDueDate(getDefaultDueDate());
    setCurrentBookCode("");
    setBookInputMode("barcode");
  }

  async function submitBorrow(payload: {
    borrowerType: "member" | "guest";
    memberCode?: string;
    borrower: string;
    phone?: string;
    borrowedAt: string;
    dueDate: string;
    bookCode?: string;
    bookTitle?: string;
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
          bookCode: payload.bookCode || "",
          bookTitle: payload.bookTitle || "",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "대여 등록에 실패했습니다.");
      }

      await fetchBooks();

      const borrowerText = `${payload.borrower} (${payload.phone || "-"})`;
      const bookText = payload.bookCode || payload.bookTitle || "-";

      resetBorrowForm();
      setMessage(`대여 완료: ${bookText} / ${borrowerText}`);
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
    const normalizedPhone = normalizePhone(phone);
    const normalizedTitle = selectedTitle.trim();

    if (!code && !normalizedTitle) {
      setErrorMessage("도서 바코드 또는 도서명을 선택해주세요.");
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

      if (!normalizedPhone) {
        setErrorMessage("회원 전화번호를 입력해주세요.");
        return;
      }

      if (bookInputMode === "barcode" && !code.startsWith("CNDB")) {
        setErrorMessage("도서 바코드를 스캔해주세요.");
        return;
      }

      if (bookInputMode === "title" && !normalizedTitle) {
        setErrorMessage("도서명을 선택해주세요.");
        return;
      }

      setCurrentBookCode(code || normalizedTitle);

      await submitBorrow({
        borrowerType: "member",
        memberCode: "",
        borrower: borrower.trim(),
        phone: normalizedPhone,
        borrowedAt,
        dueDate,
        bookCode: bookInputMode === "barcode" ? code : "",
        bookTitle: bookInputMode === "title" ? normalizedTitle : "",
      });

      return;
    }

    if (!borrower.trim()) {
      setErrorMessage("비회원 이름을 입력해주세요.");
      return;
    }

    if (!normalizedPhone) {
      setErrorMessage("비회원 연락처를 입력해주세요.");
      return;
    }

    if (bookInputMode === "barcode" && !code.startsWith("CNDB")) {
      setErrorMessage("도서 바코드를 스캔해주세요.");
      return;
    }

    if (bookInputMode === "title" && !normalizedTitle) {
      setErrorMessage("도서명을 선택해주세요.");
      return;
    }

    setCurrentBookCode(code || normalizedTitle);

    await submitBorrow({
      borrowerType: "guest",
      borrower: borrower.trim(),
      phone: normalizedPhone,
      borrowedAt,
      dueDate,
      bookCode: bookInputMode === "barcode" ? code : "",
      bookTitle: bookInputMode === "title" ? normalizedTitle : "",
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
          // ignore noisy scan failures
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
        <section className="relative overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-[#F5F8F5] via-white to-cyan-50 p-6 shadow-sm sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#00B5C9]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-8 h-56 w-56 rounded-full bg-[#0EA371]/15 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2">
                <Badge>청년동 도서관</Badge>
                <Badge tone="sky">바코드 스캔</Badge>
                <Badge tone="amber">따뜻한 운영 관리</Badge>
              </div>

              <p className="mt-8 text-sm font-bold uppercase tracking-[0.28em] text-[#0EA371]">
                Youth Library Desk
              </p>

              <h1 className="mt-3 text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
                <span className="inline-block">청년동</span>{" "}
                <span className="inline-block text-[#0EA371]">도서관리</span>
              </h1>

              <p className="mt-5 max-w-3xl text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                도서 대여부터 반납까지 한 화면에서 처리하세요.
              </p>

              <div className="mt-8 max-w-3xl rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
                <p className="text-base leading-8 text-gray-700 sm:text-lg">
                  회원 조회, 바코드 스캔, 대여·반납 현황 관리를 한 흐름으로 연결해 담당자가 더 빠르고 정확하게 도서 운영을 마칠 수 있도록 돕습니다.
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 shadow-sm backdrop-blur">
              <div className="rounded-3xl bg-gray-950 p-5 text-white shadow-sm">
                <p className="text-sm font-bold text-cyan-200">오늘의 운영 흐름</p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0EA371]" />
                    <div>
                      <p className="font-semibold">회원 확인</p>
                      <p className="mt-1 text-sm leading-6 text-gray-300">
                        이름과 연락처로 대여 대상을 확인합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#00B5C9]" />
                    <div>
                      <p className="font-semibold">도서 선택</p>
                      <p className="mt-1 text-sm leading-6 text-gray-300">
                        바코드 또는 도서명으로 빠르게 찾습니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <div>
                      <p className="font-semibold">현황 관리</p>
                      <p className="mt-1 text-sm leading-6 text-gray-300">
                        대여 중, 연체, 오늘 반납 예정까지 확인합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
          <StatCard
            label="전체 도서"
            value={stats.total}
            help="등록된 전체 도서 수"
            point="전체"
            tone="sage"
          />
          <StatCard
            label="대여 가능"
            value={stats.available}
            help="즉시 대여 가능한 도서"
            point="가능"
            tone="emerald"
          />
          <StatCard
            label="대여 중"
            value={stats.borrowed}
            help="현재 이용 중인 도서"
            point="진행"
            tone="cyan"
          />
          <StatCard
            label="연체"
            value={stats.overdue}
            help="반납 예정일이 지난 도서"
            point="주의"
            tone="rose"
          />
          <StatCard
            label="오늘 반납 예정"
            value={stats.dueToday}
            help="오늘 반납 예정 도서"
            point="오늘"
            tone="amber"
          />
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <div className="min-w-0 self-start rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <SectionTitle
              title="대여 등록"
              desc="회원은 이름/전화번호 확인 후, 비회원은 이름과 연락처 입력 후 도서를 선택하세요."
            />

            <div className="mt-6 space-y-5">
              <div className="rounded-[1.5rem] border border-gray-100 bg-[#F5F8F5] p-4 shadow-sm">
                <div className="mb-3 flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-bold text-white">
                    01
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0EA371]">
                      Borrower
                    </p>
                    <h3 className="mt-1 text-base font-bold text-gray-950">
                      회원/비회원 선택
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      대여 대상에 맞춰 입력 흐름을 먼저 정합니다.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => {
                    setBorrowMode("member");
                    resetBorrowForm();
                    setMessage("");
                    setErrorMessage("");
                  }}
                  className={`inline-flex min-w-0 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
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
                  className={`inline-flex min-w-0 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    borrowMode === "guest"
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                  }`}
                >
                  비회원 대여
                </button>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-100 bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0EA371] text-xs font-bold text-white">
                    02
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0EA371]">
                      Book Path
                    </p>
                    <h3 className="mt-1 text-base font-bold text-gray-950">
                      도서 선택 방식
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      바코드 스캔 또는 대여 가능 도서명 목록 중 하나를 사용합니다.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => {
                      setBookInputMode("barcode");
                      setSelectedTitle("");
                      setErrorMessage("");
                    }}
                    className={`inline-flex min-w-0 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      bookInputMode === "barcode"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    바코드로 선택
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setBookInputMode("title");
                      setScanInput("");
                      setErrorMessage("");
                      stopCamera();
                    }}
                    className={`inline-flex min-w-0 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      bookInputMode === "title"
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    도서명으로 선택
                  </button>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-dashed border-gray-200 bg-gray-50 p-4">
                <div className="mb-3 flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00B5C9] text-xs font-bold text-white">
                    03
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                      Camera Scan
                    </p>
                    <h3 className="mt-1 text-base font-bold text-gray-950">
                      카메라 스캔
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      바코드 모드에서 후면 카메라로 도서 코드를 읽습니다.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                {!cameraOpen ? (
                  <button
                    type="button"
                    onClick={startCamera}
                    disabled={cameraLoading || bookInputMode !== "barcode"}
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {cameraLoading
                      ? "카메라 준비 중..."
                      : bookInputMode === "barcode"
                        ? "카메라 스캔 시작"
                        : "도서명 선택 중"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={stopCamera}
                    className="inline-flex min-w-0 flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50"
                  >
                    카메라 스캔 종료
                  </button>
                )}
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-3">
                <div
                  id={scannerRegionId}
                  className={`overflow-hidden rounded-2xl bg-black ${cameraReady ? "min-h-[260px]" : "min-h-[120px]"}`}
                />
                {!cameraOpen ? (
                  <p className="mt-3 text-sm text-gray-500">
                    바코드 모드에서 카메라 스캔 시작을 누르면 후면 카메라가 열립니다.
                  </p>
                ) : null}
                {cameraError ? (
                  <p className="mt-3 text-sm font-medium text-rose-700">
                    {cameraError}
                  </p>
                ) : null}
              </div>
              </div>

              {borrowMode === "member" ? (
                <>
                  <div className="rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-gray-950">
                        04
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                          Details
                        </p>
                        <h3 className="mt-1 text-base font-bold text-gray-950">
                          입력 정보
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          대여자, 도서, 대여일과 반납예정일을 확인합니다.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-sky-50 p-4 text-sm text-sky-800 ring-1 ring-sky-100">
                        회원 이름과 전화번호를 입력한 뒤, 도서 바코드 또는 도서명을 선택하세요.
                      </div>

                      <Input
                        label="회원 이름"
                        value={borrower}
                        onChange={setBorrower}
                        placeholder="회원 이름을 입력하세요"
                      />

                      <Input
                        label="회원 전화번호"
                        value={phone}
                        onChange={setPhone}
                        placeholder="01012345678 또는 010-1234-5678"
                      />

                      {bookInputMode === "barcode" ? (
                        <Input
                          label="도서 바코드"
                          value={scanInput}
                          onChange={setScanInput}
                          placeholder="CNDB0000"
                        />
                      ) : (
                        <Select
                          label="도서명 선택"
                          value={selectedTitle}
                          onChange={setSelectedTitle}
                          options={availableTitleOptions}
                        />
                      )}

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-gray-100 bg-gray-950 p-4 text-white shadow-sm">
                    <div className="mb-3 flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-950">
                        05
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                          Submit
                        </p>
                        <h3 className="mt-1 text-base font-bold text-white">
                          대여 처리
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-300">
                          입력값을 확인한 뒤 등록하거나 처음 상태로 되돌립니다.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        disabled={submitting}
                        onClick={() => handleScanSubmit()}
                        className="inline-flex min-w-0 flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
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
                        className="inline-flex min-w-0 items-center justify-center rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 transition hover:bg-gray-900"
                      >
                        초기화
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-[1.5rem] border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="mb-4 flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-gray-950">
                        04
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                          Details
                        </p>
                        <h3 className="mt-1 text-base font-bold text-gray-950">
                          입력 정보
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          대여자, 도서, 대여일과 반납예정일을 확인합니다.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-800 ring-1 ring-amber-100">
                        비회원 이름과 연락처를 입력한 뒤, 도서 바코드 또는 도서명을 선택하세요.
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
                        placeholder="01012345678 또는 010-1234-5678"
                      />

                      {bookInputMode === "barcode" ? (
                        <Input
                          label="도서 바코드"
                          value={scanInput}
                          onChange={setScanInput}
                          placeholder="CNDB0000"
                        />
                      ) : (
                        <Select
                          label="도서명 선택"
                          value={selectedTitle}
                          onChange={setSelectedTitle}
                          options={availableTitleOptions}
                        />
                      )}

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-gray-100 bg-gray-950 p-4 text-white shadow-sm">
                    <div className="mb-3 flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-gray-950">
                        05
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                          Submit
                        </p>
                        <h3 className="mt-1 text-base font-bold text-white">
                          대여 처리
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-gray-300">
                          입력값을 확인한 뒤 등록하거나 처음 상태로 되돌립니다.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        disabled={submitting}
                        onClick={() => handleScanSubmit()}
                        className="inline-flex min-w-0 flex-1 items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-950 shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60"
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
                        className="inline-flex min-w-0 items-center justify-center rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 transition hover:bg-gray-900"
                      >
                        초기화
                      </button>
                    </div>
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
                  마지막 처리 도서: {currentBookCode}
                </p>
              ) : null}
            </div>
          </div>

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
                                {book.bookcode || "-"}
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
                                    handleReturn(book.bookcode, book.id)
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
                            {book.bookcode || "-"}
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
                            onClick={() => handleReturn(book.bookcode, book.id)}
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
        </section>
      </div>
    </main>
  );
}

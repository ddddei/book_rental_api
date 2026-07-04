"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Book,
  BookInputMode,
  BookStatus,
  BorrowMode,
  getBookStatus,
  getDefaultDueDate,
  getTodayString,
  normalizeCode,
  normalizePhone,
} from "@/lib/book";
import { AppHeader } from "@/components/AppHeader";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { BorrowPanel } from "@/components/BorrowPanel";
import { BookListPanel } from "@/components/BookListPanel";
import type { Html5Qrcode } from "html5-qrcode";

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | BookStatus>("all");
  const [pageSize, setPageSize] = useState(10);
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

  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
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
        (book.bookCode || "").toLowerCase().includes(lowerQuery);

      const matchesFilter = filter === "all" ? true : book.status === filter;

      return matchesQuery && matchesFilter;
    });
  }, [enrichedBooks, query, filter]);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [query, filter, pageSize]);

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

  const recentBorrowed = useMemo(() => {
    return enrichedBooks
      .filter((book) => book.status === "borrowed" || book.status === "overdue")
      .sort((a, b) => (a.borrowedAt < b.borrowedAt ? 1 : -1))
      .slice(0, 5);
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
    <main className="min-h-screen bg-canvas">
      <AppHeader />
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <HeroSection />

        <StatsSection stats={stats} />

        <section className="mt-4 grid gap-4 lg:grid-cols-[380px_minmax(0,1fr)] lg:items-start">
          <BorrowPanel
            borrowMode={borrowMode}
            setBorrowMode={setBorrowMode}
            bookInputMode={bookInputMode}
            setBookInputMode={setBookInputMode}
            scanInput={scanInput}
            setScanInput={setScanInput}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
            borrower={borrower}
            setBorrower={setBorrower}
            phone={phone}
            setPhone={setPhone}
            borrowedAt={borrowedAt}
            setBorrowedAt={setBorrowedAt}
            dueDate={dueDate}
            setDueDate={setDueDate}
            currentBookCode={currentBookCode}
            message={message}
            setMessage={setMessage}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            submitting={submitting}
            cameraReady={cameraReady}
            cameraLoading={cameraLoading}
            cameraError={cameraError}
            cameraOpen={cameraOpen}
            scannerRegionId={scannerRegionId}
            startCamera={startCamera}
            stopCamera={stopCamera}
            handleScanSubmit={() => handleScanSubmit()}
            resetBorrowForm={resetBorrowForm}
            availableTitleOptions={availableTitleOptions}
            recentBorrowed={recentBorrowed}
            handleReturn={handleReturn}
          />

          <BookListPanel
            query={query}
            setQuery={setQuery}
            filter={filter}
            setFilter={setFilter}
            fetchBooks={fetchBooks}
            loading={loading}
            filteredBooks={filteredBooks}
            visibleBooks={visibleBooks}
            visibleCount={visibleCount}
            setVisibleCount={setVisibleCount}
            pageSize={pageSize}
            setPageSize={setPageSize}
            statusCounts={{
              all: stats.total,
              available: stats.available,
              borrowed: stats.borrowed,
              overdue: stats.overdue,
            }}
            submitting={submitting}
            handleReturn={handleReturn}
          />
        </section>
      </div>
    </main>
  );
}

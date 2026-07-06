import {
  Book,
  BookInputMode,
  BorrowMode,
  formatDate,
  getStatusLabel,
  getStatusTone,
} from "@/lib/book";
import { Badge, Input, Select, SectionTitle } from "./ui";

type EnrichedBook = Book & { status: "available" | "borrowed" | "overdue" };

export function BorrowPanel({
  borrowMode,
  setBorrowMode,
  bookInputMode,
  setBookInputMode,
  scanInput,
  setScanInput,
  selectedTitle,
  setSelectedTitle,
  borrower,
  setBorrower,
  phone,
  setPhone,
  borrowedAt,
  setBorrowedAt,
  dueDate,
  setDueDate,
  currentBookCode,
  message,
  setMessage,
  errorMessage,
  setErrorMessage,
  submitting,
  cameraLoading,
  cameraError,
  cameraOpen,
  cameraReady,
  scannerRegionId,
  startCamera,
  stopCamera,
  handleScanSubmit,
  resetBorrowForm,
  availableTitleOptions,
  recentBorrowed,
  handleReturn,
  borrowerInputRef,
}: {
  borrowMode: BorrowMode;
  setBorrowMode: (mode: BorrowMode) => void;
  bookInputMode: BookInputMode;
  setBookInputMode: (mode: BookInputMode) => void;
  scanInput: string;
  setScanInput: (value: string) => void;
  selectedTitle: string;
  setSelectedTitle: (value: string) => void;
  borrower: string;
  setBorrower: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  borrowedAt: string;
  setBorrowedAt: (value: string) => void;
  dueDate: string;
  setDueDate: (value: string) => void;
  currentBookCode: string;
  message: string;
  setMessage: (value: string) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
  submitting: boolean;
  cameraReady: boolean;
  cameraLoading: boolean;
  cameraError: string;
  cameraOpen: boolean;
  scannerRegionId: string;
  startCamera: () => void;
  stopCamera: () => void;
  handleScanSubmit: () => void;
  resetBorrowForm: () => void;
  availableTitleOptions: Array<{ label: string; value: string }>;
  recentBorrowed: EnrichedBook[];
  handleReturn: (bookCode: string, bookId?: number) => void;
  borrowerInputRef?: React.RefObject<HTMLInputElement | null>;
}) {
  const isMember = borrowMode === "member";

  return (
    <div
      id="borrow-panel"
      className="min-w-0 self-start rounded-card border border-line bg-surface p-4 sm:p-5"
    >
      <SectionTitle title="대여 등록" />

      <div className="mt-4 space-y-3">
        <div className="flex rounded-full bg-line-soft p-1">
          {(
            [
              { mode: "member", label: "회원" },
              { mode: "guest", label: "비회원" },
            ] as const
          ).map((item) => (
            <button
              key={item.mode}
              type="button"
              onClick={() => {
                setBorrowMode(item.mode);
                resetBorrowForm();
                setMessage("");
                setErrorMessage("");
              }}
              className={`flex-1 rounded-full py-2 text-sm transition ${
                borrowMode === item.mode
                  ? "bg-brand font-medium text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <Input
          label={isMember ? "회원 이름" : "비회원 이름"}
          value={borrower}
          onChange={setBorrower}
          placeholder="이름을 입력하세요"
          inputRef={borrowerInputRef}
        />

        <Input
          label={isMember ? "회원 전화번호" : "비회원 연락처"}
          value={phone}
          onChange={setPhone}
          placeholder="01012345678 또는 010-1234-5678"
        />

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-sm font-medium text-ink-soft">
              도서 선택
            </span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => {
                  setBookInputMode("barcode");
                  setSelectedTitle("");
                  setErrorMessage("");
                }}
                className={`rounded-full px-2.5 py-1 text-xs transition ${
                  bookInputMode === "barcode"
                    ? "bg-brand-soft font-medium text-brand-deep"
                    : "text-ink-faint hover:text-ink-soft"
                }`}
              >
                바코드
              </button>
              <button
                type="button"
                onClick={() => {
                  setBookInputMode("title");
                  setScanInput("");
                  setErrorMessage("");
                  stopCamera();
                }}
                className={`rounded-full px-2.5 py-1 text-xs transition ${
                  bookInputMode === "title"
                    ? "bg-brand-soft font-medium text-brand-deep"
                    : "text-ink-faint hover:text-ink-soft"
                }`}
              >
                도서명
              </button>
            </div>
          </div>

          {bookInputMode === "barcode" ? (
            <div className="space-y-2">
              {!cameraOpen ? (
                <button
                  type="button"
                  onClick={startCamera}
                  disabled={cameraLoading}
                  className="w-full rounded-field bg-brand-soft py-3 text-sm font-medium text-brand-mid transition hover:bg-brand-soft/70 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {cameraLoading ? (
                    "카메라 준비 중..."
                  ) : (
                    <>
                      카메라로 바코드 스캔
                      <kbd className="ml-1.5 hidden items-center rounded border border-line bg-surface px-1.5 py-0.5 font-sans text-[10px] font-normal text-ink-faint sm:inline-flex">
                        S
                      </kbd>
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopCamera}
                  className="w-full rounded-field border border-line bg-surface py-3 text-sm text-ink-soft transition hover:bg-surface-hover"
                >
                  카메라 스캔 종료
                </button>
              )}

              <div
                id={scannerRegionId}
                className={`overflow-hidden rounded-field bg-black ${
                  cameraReady ? "min-h-[240px]" : "hidden"
                }`}
              />
              {cameraError ? (
                <p className="text-sm text-overdue-mid">{cameraError}</p>
              ) : null}

              <input
                type="text"
                value={scanInput}
                onChange={(e) => setScanInput(e.target.value)}
                placeholder="CNDB····"
                className="w-full rounded-field border border-line bg-surface-soft px-3.5 py-2.5 font-mono text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:bg-surface focus:ring-2 focus:ring-brand-soft"
              />
            </div>
          ) : (
            <Select
              label=""
              value={selectedTitle}
              onChange={setSelectedTitle}
              options={availableTitleOptions}
            />
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
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

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            disabled={submitting}
            onClick={() => handleScanSubmit()}
            className="flex-1 rounded-field bg-brand py-3 text-sm font-medium text-white transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "처리 중..." : "대여 등록하기"}
          </button>
          <button
            type="button"
            onClick={() => {
              resetBorrowForm();
              setMessage("입력값을 초기화했습니다.");
              setErrorMessage("");
            }}
            className="rounded-field border border-line px-4 py-3 text-sm text-ink-soft transition hover:bg-surface-hover"
          >
            초기화
          </button>
        </div>
      </div>

      {message || errorMessage || currentBookCode ? (
        <div className="mt-3 space-y-1">
          {message ? (
            <p className="text-sm font-medium text-brand-mid">{message}</p>
          ) : null}
          {errorMessage ? (
            <p className="text-sm font-medium text-overdue-mid">
              {errorMessage}
            </p>
          ) : null}
          {currentBookCode ? (
            <p className="text-xs text-ink-faint">
              마지막 처리 도서: {currentBookCode}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-5 border-t border-line pt-4">
        <p className="text-xs font-medium text-ink-faint">
          최근 대여 · 빠른 반납
        </p>

        <div className="mt-2.5 space-y-1.5">
          {recentBorrowed.length === 0 ? (
            <p className="rounded-row bg-surface-hover px-4 py-5 text-center text-sm text-ink-faint">
              현재 대여 중인 도서가 없습니다.
            </p>
          ) : (
            recentBorrowed.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between gap-2 rounded-row bg-surface-hover px-3 py-2.5"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm text-ink">{book.title}</p>
                  <p className="mt-0.5 truncate text-xs text-ink-faint">
                    {book.borrower || "-"} · 반납예정 {formatDate(book.dueDate)}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <Badge tone={getStatusTone(book.status)}>
                    {getStatusLabel(book.status)}
                  </Badge>
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => handleReturn(book.bookCode, book.id)}
                    className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-brand transition hover:bg-brand-soft disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    반납
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

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
  cameraReady,
  cameraLoading,
  cameraError,
  cameraOpen,
  scannerRegionId,
  startCamera,
  stopCamera,
  handleScanSubmit,
  resetBorrowForm,
  availableTitleOptions,
  recentBorrowed,
  handleReturn,
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
}) {
  return (
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

      <div className="mt-6 rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
        <SectionTitle
          title="최근 대여 / 빠른 반납"
          desc="가장 최근 대여된 도서를 바로 반납 처리할 수 있습니다."
        />

        <div className="mt-4 space-y-2">
          {recentBorrowed.length === 0 ? (
            <p className="rounded-xl bg-white px-4 py-6 text-center text-sm text-gray-500 ring-1 ring-gray-100">
              현재 대여 중인 도서가 없습니다.
            </p>
          ) : (
            recentBorrowed.map((book) => (
              <div
                key={book.id}
                className="flex items-center justify-between gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-gray-900">
                    {book.title}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-gray-500">
                    {book.borrower || "-"} · 대여일 {formatDate(book.borrowedAt)} · 반납예정 {formatDate(book.dueDate)}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Badge tone={getStatusTone(book.status)}>
                    {getStatusLabel(book.status)}
                  </Badge>
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => handleReturn(book.bookCode, book.id)}
                    className="inline-flex items-center justify-center rounded-xl bg-gray-950 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    반납 처리
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

import { getTodayString } from "@/lib/book";

export function HeroSection() {
  return (
    <section className="flex flex-col gap-2 pt-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-medium leading-snug text-ink sm:text-3xl">
          도서 대여부터 반납까지, 한 화면에서
        </h1>
        <p className="mt-1.5 text-sm text-ink-soft">
          회원 조회 · 바코드 스캔 · 현황 관리를 한 번에 진행하세요.
        </p>
      </div>
      <p className="text-xs text-ink-faint">{getTodayString()}</p>
    </section>
  );
}

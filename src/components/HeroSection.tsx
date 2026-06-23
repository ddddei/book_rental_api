import { Badge } from "./ui";

export function HeroSection() {
  return (
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
  );
}

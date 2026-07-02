import Link from "next/link";

export default function RentalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-sky-50">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center px-4 py-10">
        <section className="w-full rounded-3xl border border-gray-100 bg-white/85 p-8 shadow-sm backdrop-blur sm:p-10">
          <p className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 ring-1 ring-orange-100">
            공간대관
          </p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl">
            공간대관 신청은 준비 중입니다
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            현재는 공간 소개를 먼저 확인할 수 있습니다. 대관 신청 기능은 운영
            방식이 확정된 뒤 연결할 예정입니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/spaces"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900"
            >
              공간 소개로 돌아가기
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-100 transition hover:bg-gray-50"
            >
              도서관리로 이동
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

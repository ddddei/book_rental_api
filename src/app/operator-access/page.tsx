type OperatorAccessPageProps = {
  readonly searchParams?: Promise<
    Record<string, string | readonly string[] | undefined>
  >;
};

const ERROR_MESSAGES = {
  config: "운영자 접근 코드 설정을 확인해주세요.",
  invalid: "접근 코드가 올바르지 않습니다.",
} as const;

export default async function OperatorAccessPage({
  searchParams,
}: OperatorAccessPageProps) {
  const params = await searchParams;
  const error = readParam(params?.error);
  const redirectTo = readParam(params?.redirectTo) || "/";
  const errorMessage = getErrorMessage(error);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-canvas px-4 py-10">
      <section className="w-full max-w-sm rounded-card border border-line bg-surface p-5 shadow-sm">
        <p className="text-xs font-medium uppercase text-brand-mid">
          청년동 도서대여
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-ink">
          운영자 접근 코드
        </h1>
        <p className="mt-2 text-sm leading-6 text-ink-soft">
          내부 운영자에게 공유된 접근 코드를 입력해주세요.
        </p>

        <form action="/api/operator-access" method="post" className="mt-5 space-y-4">
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">
              접근 코드
            </span>
            <input
              name="accessCode"
              type="password"
              autoComplete="current-password"
              autoFocus
              className="w-full rounded-field border border-line bg-surface-soft px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:bg-surface focus:ring-2 focus:ring-brand-soft"
            />
          </label>

          {errorMessage ? (
            <p className="rounded-field bg-overdue-soft px-3 py-2 text-sm font-medium text-overdue-mid">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-field bg-brand py-3 text-sm font-medium text-white transition hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-brand-soft focus:ring-offset-2 focus:ring-offset-surface"
          >
            입장하기
          </button>
        </form>
      </section>
    </main>
  );
}

function readParam(value: string | readonly string[] | undefined) {
  return typeof value === "string" ? value : "";
}

function getErrorMessage(error: string) {
  if (error === "config" || error === "invalid") {
    return ERROR_MESSAGES[error];
  }

  return "";
}

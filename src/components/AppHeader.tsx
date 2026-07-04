const menu = [
  { label: "대여/반납", active: true },
  { label: "이력", active: false },
  { label: "회원", active: false },
  { label: "통계", active: false },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <p className="text-sm font-medium text-ink-header">
            청년동 도서관리
          </p>
          <nav className="hidden items-center gap-4 sm:flex">
            {menu.map((item) =>
              item.active ? (
                <span
                  key={item.label}
                  className="text-sm font-medium text-brand"
                >
                  {item.label}
                </span>
              ) : (
                <span
                  key={item.label}
                  className="cursor-default text-sm text-ink-faint"
                  title="준비 중"
                >
                  {item.label}
                </span>
              )
            )}
          </nav>
        </div>

        <a
          href="#borrow-panel"
          className="rounded-full bg-brand px-4 py-2 text-xs font-medium text-white transition hover:bg-brand-hover"
        >
          + 대여 등록
        </a>
      </div>
    </header>
  );
}

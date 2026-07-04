import { StatCard } from "./ui";

export type Stats = {
  total: number;
  available: number;
  borrowed: number;
  overdue: number;
  dueToday: number;
};

export function StatsSection({ stats }: { stats: Stats }) {
  return (
    <section className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-5">
      <StatCard label="대여 가능" value={stats.available} tone="brand" />
      <StatCard label="대여 중" value={stats.borrowed} tone="borrowed" />
      <StatCard label="연체" value={stats.overdue} tone="overdue" />
      <StatCard label="오늘 반납" value={stats.dueToday} tone="today" />
      <div className="col-span-2 flex items-center justify-between rounded-tile border border-line bg-surface px-4 py-3 xl:order-first xl:col-span-1 xl:block">
        <p className="text-xs text-ink-faint">전체 도서</p>
        <p className="text-xl font-medium leading-none text-ink sm:text-2xl xl:mt-1">
          {stats.total}
        </p>
      </div>
    </section>
  );
}

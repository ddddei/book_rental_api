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
  );
}

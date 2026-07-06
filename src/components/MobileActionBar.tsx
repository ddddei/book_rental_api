"use client";

type MobileActionBarProps = {
  onScan: () => void;
  onBorrow: () => void;
};

export function MobileActionBar({ onScan, onBorrow }: MobileActionBarProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="mx-auto flex max-w-7xl gap-3 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={onScan}
          className="flex-1 rounded-field bg-brand-soft py-3 text-sm font-medium text-brand-mid"
        >
          바로 스캔
        </button>
        <button
          type="button"
          onClick={onBorrow}
          className="flex-1 rounded-field bg-brand py-3 text-sm font-medium text-white"
        >
          대여 등록
        </button>
      </div>
    </div>
  );
}

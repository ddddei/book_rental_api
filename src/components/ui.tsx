export function Badge({
  children,
  tone = "emerald",
}: {
  children: React.ReactNode;
  tone?: "emerald" | "gray" | "rose" | "sky" | "amber";
}) {
  const styles = {
    emerald: "bg-brand-soft text-brand-deep",
    gray: "bg-line-soft text-ink-soft",
    rose: "bg-overdue-soft text-overdue-deep",
    sky: "bg-borrowed-soft text-borrowed-deep",
    amber: "bg-today-soft text-today-deep",
  };

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

export function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string | number;
  tone: "neutral" | "brand" | "borrowed" | "overdue" | "today";
}) {
  const tones = {
    neutral: {
      card: "bg-surface border border-line",
      label: "text-ink-faint",
      value: "text-ink",
    },
    brand: {
      card: "bg-brand-soft",
      label: "text-brand-mid",
      value: "text-brand-deep",
    },
    borrowed: {
      card: "bg-borrowed-soft",
      label: "text-borrowed-mid",
      value: "text-borrowed-deep",
    },
    overdue: {
      card: "bg-overdue-soft",
      label: "text-overdue-mid",
      value: "text-overdue-deep",
    },
    today: {
      card: "bg-today-soft",
      label: "text-today-mid",
      value: "text-today-deep",
    },
  };

  const style = tones[tone];

  return (
    <div className={`rounded-tile px-4 py-3 ${style.card}`}>
      <p className={`text-xs ${style.label}`}>{label}</p>
      <p className={`mt-1 text-xl font-medium leading-none sm:text-2xl ${style.value}`}>
        {value}
      </p>
    </div>
  );
}

export function SectionTitle({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div>
      <h2 className="text-base font-medium text-ink">{title}</h2>
      {desc ? <p className="mt-1 text-sm text-ink-soft">{desc}</p> : null}
    </div>
  );
}

export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  min,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  min?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </span>
      <input
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-field border border-line bg-surface-soft px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-brand focus:bg-surface focus:ring-2 focus:ring-brand-soft"
      />
    </label>
  );
}

export function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ label: string; value: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink-soft">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-field border border-line bg-surface-soft px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-brand focus:bg-surface focus:ring-2 focus:ring-brand-soft"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

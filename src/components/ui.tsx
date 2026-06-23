export function Badge({
  children,
  tone = "emerald",
}: {
  children: React.ReactNode;
  tone?: "emerald" | "gray" | "rose" | "sky" | "amber";
}) {
  const styles = {
    emerald: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
    gray: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
    rose: "bg-rose-50 text-rose-700 ring-1 ring-rose-100",
    sky: "bg-sky-50 text-sky-700 ring-1 ring-sky-100",
    amber: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  };

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

export function StatCard({
  label,
  value,
  help,
  point,
  tone,
}: {
  label: string;
  value: string | number;
  help: string;
  point: string;
  tone: "sage" | "emerald" | "cyan" | "rose" | "amber";
}) {
  const tones = {
    sage: {
      card: "border-[#0EA371]/10 bg-[#F5F8F5]",
      dot: "bg-gray-500",
      pill: "bg-white/80 text-gray-600 ring-gray-200",
      value: "text-gray-950",
      glow: "bg-gray-300/30",
    },
    emerald: {
      card: "border-[#0EA371]/20 bg-[#F5F8F5]",
      dot: "bg-[#0EA371]",
      pill: "bg-[#0EA371]/10 text-[#0EA371] ring-[#0EA371]/15",
      value: "text-[#0EA371]",
      glow: "bg-[#0EA371]/15",
    },
    cyan: {
      card: "border-[#00B5C9]/20 bg-cyan-50/60",
      dot: "bg-[#00B5C9]",
      pill: "bg-[#00B5C9]/10 text-cyan-700 ring-[#00B5C9]/15",
      value: "text-cyan-700",
      glow: "bg-[#00B5C9]/15",
    },
    rose: {
      card: "border-rose-200 bg-rose-50/60",
      dot: "bg-rose-500",
      pill: "bg-rose-100 text-rose-700 ring-rose-200",
      value: "text-rose-700",
      glow: "bg-rose-300/20",
    },
    amber: {
      card: "border-amber-200 bg-amber-50/70",
      dot: "bg-amber-400",
      pill: "bg-amber-100 text-amber-700 ring-amber-200",
      value: "text-amber-700",
      glow: "bg-amber-300/25",
    },
  };

  const style = tones[tone];

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5 ${style.card}`}
    >
      <div
        className={`pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full blur-2xl ${style.glow}`}
      />
      <div className="relative flex min-h-full flex-col justify-between gap-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
            {label}
          </p>
          <span
            className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${style.pill}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            {point}
          </span>
        </div>

        <div>
          <p className={`text-4xl font-black leading-none tracking-tight ${style.value}`}>
            {value}
          </p>
          <p className="mt-3 text-xs font-medium leading-5 text-gray-600 sm:text-sm">
            {help}
          </p>
        </div>
      </div>
    </div>
  );
}

export function SectionTitle({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
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
      <span className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </span>
      <input
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
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
      <span className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
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

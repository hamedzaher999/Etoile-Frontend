import { ChevronDown } from "lucide-react";
import { useState } from "react";
const StyledSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "select...",
  disabled = false,
  icon: Icon,
  className = "",
}) => {
  const [open, setOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  return (
    <div className="relative mb-2">
      {label && (
        <p className="pb-1 font-serif text-sm text-white/80 md:text-[15px]">
          {label}
        </p>
      )}

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        onBlur={() => {
          setTimeout(() => setOpen(false), 150);
        }}
        className={`flex h-10 w-full items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-left text-sm outline-none backdrop-blur-md transition-all duration-300 focus:border-purple-400/50 focus:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
      >
        <span className="flex min-w-0 items-center gap-2">
          {Icon && (
            <Icon size={15} className="shrink-0 text-white/40" />
          )}
          <span
            className={`truncate ${selected ? "text-white" : "text-white/40"}`}
          >
            {selected ? selected.label : placeholder}
          </span>
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-white/40 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          className="scrollable-content absolute z-20 mt-2 max-h-[220px] w-full overflow-y-auto rounded-xl border border-white/10 bg-[#0a0a12] p-1.5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        >
          {options.length ? (
            options.map((opt) => (
              <button
                type="button"
                key={opt.value}
                onMouseDown={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors duration-150 ${
                  opt.value === value
                    ? "bg-purple-500/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))
          ) : (
            <div className="flex items-center justify-center px-3 py-3 text-xs text-white/40">
              no options
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StyledSelect;

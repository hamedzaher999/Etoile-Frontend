import { Orbit } from "lucide-react";
import { useEffect, useState } from "react";

const CustomDropdown = ({
  value,
  className,
  label,
  options = [],
  setValue,
  error,
  isLoading = false,
}) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setSearch(value?.name || "");
  }, [value]);

  const filteredOptions = options.filter((opt) =>
    opt.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative mb-2">
      <p className="pb-1 font-serif text-sm md:text-[18px]">
        {label}
      </p>

      <input
        value={search}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            setSearch(value?.name || "");
            setOpen(false);
          }, 150);
        }}
        className={`h-9 w-full rounded-lg border bg-white/10 px-3 text-sm text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-white/40 ${
          error
            ? "border-red-500 focus:border-red-400"
            : "border-white/10 focus:border-purple-400/60"
        } ${className}`}
      />

      {open && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          className="scrollable-content app-bg absolute z-10 mt-1 max-h-[150px] w-full overflow-y-auto rounded-xl border"
        >
          {filteredOptions.length ? (
            filteredOptions.map((opt) => (
              <p
                key={opt.id}
                className="m-1 cursor-pointer rounded-xl px-3 py-2 text-xs hover:bg-[#ffffff22]"
                onMouseDown={() => {
                  setValue(opt);
                  setOpen(false);
                }}
              >
                {opt.name}
              </p>
            ))
          ) : (
            <div className="flex items-center justify-center px-3 py-2 text-sm text-gray-400">
              {isLoading ? (
                <Orbit
                  size={18}
                  color="purple"
                  className="animate-spin"
                />
              ) : (
                "No results"
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

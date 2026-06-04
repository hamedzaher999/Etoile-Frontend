const CustomInput = ({
  label,
  className = "",
  note,
  redNote,
  onChangeFun,
  value,
  onBlurFun,
  inputMode = "text",
  maxLength,
}) => {
  return (
    <div className="mb-1.5 flex w-full flex-1 flex-col">
      {/* Label */}
      <p className="pb-1 font-serif text-sm tracking-wide text-white/90 md:text-[16px]">
        {label}
      </p>

      {/* Input */}
      <input
        inputMode={inputMode}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChangeFun?.(e.target.value)}
        onBlur={() => onBlurFun?.()}
        className={`h-9 w-full rounded-lg border bg-white/10 px-3 text-sm text-white outline-none backdrop-blur-md transition-all duration-300 placeholder:text-white/40 ${
          redNote
            ? "border-red-500 focus:border-red-400"
            : "border-white/10 focus:border-purple-400/60"
        } ${className}`}
      />

      {/* Note */}
      <p
        className={`pl-1 pt-1 text-[10px] transition-colors ${
          redNote ? "text-red-400" : "text-white/60"
        }`}
      >
        {redNote || note}
      </p>
    </div>
  );
};

export default CustomInput;

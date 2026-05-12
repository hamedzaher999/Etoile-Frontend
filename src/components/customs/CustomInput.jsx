const CustomInput = ({
  label,
  className,
  note,
  redNote,
  onChangeFun,
  value,
  onBlurFun,
}) => {
  return (
    <div className={`mx-5 mb-2 `}>
      <p className="font-serif pb-1 text-sm md:text-[18px]">{label}</p>
      <input
        className={`w-full ${className} ${
          redNote ? "border border-red-600" : ""
        } bg-[#ffffff14] h-9 rounded-md pl-3`}
        type="text"
        onChange={(e) => {
          onChangeFun ? onChangeFun(e.target.value) : () => {};
        }}
        onBlur={() => {
          onBlurFun ? onBlurFun() : () => {};
        }}
        // value={value?va}
      />

      <p
        className={`text-[9px] pl-1 pt-1 ${
          redNote ? "text-red-600" : "text-white"
        } `}
      >
        {redNote ? redNote : note}
      </p>
    </div>
  );
};

export default CustomInput;

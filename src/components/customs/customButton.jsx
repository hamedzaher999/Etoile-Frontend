const CustomButton = ({
  buttonText,
  onClick,
  label,
  className,
  buttonClassName,
  textClassName,
}) => {
  return (
    <div className={`flex flex-col items-end ${className} `}>
      <p className={`mb-2 text-white text-[200px]`}>{label}</p>
      <button
        onClick={() => {
          onClick();
        }}
        className={` ${buttonClassName} rounded-lg bg-[#6a0b81]  px-4 py-1 ${
          textClassName ?? "text-[10px] md:text-[14px]"
        } text-white shadow-lg 
    transition-transform duration-300 ease-in-out hover:scale-105
     `}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CustomButton;

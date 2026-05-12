import { useState } from "react";

const CustomDropdown = ({ className, label, options, setValueFun }) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="mx-5 mb-2 relative">
      <p className="font-serif pb-1 text-sm md:text-[18px]">{label}</p>

      <input
        value={value}
        onClick={() => setOpen(!open)}
        onChange={(e) => {
          setValue(e.target.value);
          setOpen(true);
          setValueFun ? setValueFun(e.target.value) : null;
        }}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className={`w-full ${className} bg-[#ffffff14] h-9 rounded-md pl-3`}
      />

      {open && (
        <div
          onMouseDown={(e) => e.preventDefault()}
          className="
            absolute z-10 bg-white/20 backdrop-blur-md border rounded-md shadow-md mt-1 w-full 
            max-h-[200px] overflow-y-auto 
          "
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt, index) => (
              <div
                key={index}
                className="px-3 py-2 cursor-pointer hover:bg-[#3b0a4783]"
                onMouseDown={() => {
                  setValue(opt);
                  setValueFun ? setValueFun(opt) : null;
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500">No results</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

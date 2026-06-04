import { useState } from "react";

const SellingPoints = ({
  title = "",
  description = "",
  icon = "",
  color = "#ff0000",
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative flex min-h-[320px] w-[170px] select-none flex-col items-center overflow-hidden rounded-[32px] border border-white/10 bg-black/25 p-5 text-center shadow-[0_0_40px_rgba(120,0,255,0.12)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-[8px] hover:scale-[102%] md:w-[270px] md:p-7"
    >
      <div
        style={{
          background: hover ? color + 50 : "rgb(168 85 247 / 0.1)",
        }}
        className="absolute -top-20 left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[50px] transition-all duration-500 group-hover:bg-cyan-400/10"
      />

      <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/[0.08] to-transparent opacity-60" />

      <div className="relative mb-5 flex h-[90px] w-[90px] items-center justify-center rounded-full border border-purple-400/20 bg-white/[0.03] shadow-[0_0_30px_rgba(120,0,255,0.15)] backdrop-blur-xl">
        <img
          src={icon}
          alt={title}
          className="pointer-events-none h-[58px] w-[58px] object-contain transition-transform duration-500 group-hover:rotate-[30deg] group-hover:scale-125"
        />
      </div>

      <p className="mb-2 text-[10px] uppercase tracking-[0.45em] text-cyan-300/70">
        Planet Feature
      </p>

      <h3 className="pointer-events-none text-lg font-black tracking-widest text-white md:text-2xl">
        {title}
      </h3>

      <div
        style={{
          background: `linear-gradient(to left,transparent,${color},transparent)`,
        }}
        className="my-4 h-px w-16"
      />

      <p className="description text-[12px] text-white/60 transition-colors duration-300 group-hover:text-white/80 md:text-[14px]">
        {description}
      </p>
    </div>
  );
};

export default SellingPoints;

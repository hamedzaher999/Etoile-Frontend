const WhatVipDialog = ({ closeCallback }) => {
  return (
    <div className="relative w-[420px] overflow-hidden rounded-2xl border border-cyan-500/40 bg-black/70 p-6 shadow-[0_0_40px_rgba(0,200,255,0.25)] backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-b from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="absolute left-0 top-0 h-[2px] w-full animate-[scan_4s_linear_infinite] bg-cyan-400/60" />

      <div className="relative z-10">
        <p className="mb-2 text-[10px] tracking-[0.4em] text-cyan-400">
          GALACTIC CLASSIFICATION
        </p>

        <h1 className="blue-text-gradient mb-4 text-3xl font-bold">
          What Is VIP?
        </h1>

        <p className="mb-6 text-sm leading-6 text-gray-300">
          VIP explorers are granted access to exclusive chocolate
          artifacts hidden from ordinary travelers across the galaxy.
        </p>

        <div className="grid grid-cols-2 gap-3">
          {[
            "Sun Chocolate Access",
            "Limited Planet Releases",
            "Priority Cosmic Delivery",
            "Luxury Packaging",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-center"
            >
              <p className="text-sm text-cyan-100">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-3">
          <p className="text-center text-xs text-cyan-200">
            Not every traveler reaches the center of the galaxy.
          </p>
        </div>

        <div className="mt-8 flex justify-between gap-6">
          <button className="app-button flex-1">Become VIP</button>

          <button
            onClick={() => {
              closeCallback?.();
            }}
            className="app-button error flex-1"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatVipDialog;

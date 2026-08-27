const HowVipDialog = ({ closeCallback }) => {
  return (
    <div className="relative w-[420px] overflow-hidden rounded-2xl border border-orange-500/40 bg-black/70 p-6 shadow-[0_0_40px_rgba(255,120,0,0.35)] backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-b from-orange-500/10 via-transparent to-yellow-500/10" />

      <div className="absolute left-0 top-0 h-[2px] w-full animate-[scan_4s_linear_infinite] bg-orange-400/60" />

      <div className="relative z-10">
        <p className="mb-2 text-[10px] tracking-[0.4em] text-orange-400">
          SOLAR ACCESS PROTOCOL
        </p>

        <h1 className="orange-text-gradient mb-4 text-3xl font-bold">
          Reach The Sun
        </h1>

        <p className="mb-6 text-sm leading-6 text-gray-300">
          Only elite explorers can unlock access to the forbidden Sun
          chocolate. Complete the following mission sequence:
        </p>

        <div className="space-y-4">
          {[
            "Create your explorer account",
            "Purchase the Solar System Collection",
            "Complete 3 successful deliveries",
            "Receive automatic VIP authorization",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-orange-500/20 bg-orange-500/5 p-3"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-400 text-sm text-orange-300">
                {i + 1}
              </div>

              <p className="text-sm text-gray-200">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-3">
          <p className="text-center text-xs text-yellow-200">
            Only the most dedicated travelers survive the journey to
            the Sun.
          </p>
        </div>

        <div className="mt-8 flex justify-between gap-6">
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

export default HowVipDialog;

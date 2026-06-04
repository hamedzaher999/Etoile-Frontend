import { X } from "lucide-react";
import { usePlanetsStore } from "../../../../store/planet.store";

const NutritionInfoDialog = () => {
  const { planet, isDetailsOpen, setIsDetailsOpen } =
    usePlanetsStore();

  if (!isDetailsOpen) return null;

  return (
    <div className="pointer-events-auto fixed inset-0 z-[1200] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div
        style={{
          borderColor: planet?.color,
          boxShadow: `0 0 40px ${planet?.color}40`,
        }}
        className="relative max-h-[85vh] w-full max-w-[700px] overflow-hidden rounded-[28px] border bg-[#050510]/90 text-white backdrop-blur-2xl"
      >
        <div
          style={{
            background: `linear-gradient(to right, ${planet?.color}20, transparent)`,
          }}
          className="pointer-events-none absolute left-0 top-0 h-[70px] w-full"
        />

        <button
          onClick={() => setIsDetailsOpen()}
          className="absolute right-4 top-4 z-20 flex aspect-square w-[38px] items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:bg-white/10"
        >
          <X size={16} />
        </button>

        <div className="relative z-10 px-8 pt-5 text-center">
          <h2 className="purple-text-gradient text-4xl font-black tracking-wide">
            {planet?.name}
          </h2>
        </div>

        <div className="flex justify-center py-6">
          <div
            style={{
              background: `
                radial-gradient(circle at 30% 30%,
                ${planet?.color},
                #000000)
              `,
              boxShadow: `0 0 50px ${planet?.color}55`,
            }}
            className="relative aspect-square w-[70px] animate-pulse rounded-full"
          >
            <div className="absolute inset-[-12px] rounded-full border border-white/10" />
            <div className="absolute inset-[-24px] rounded-full border border-dashed border-white/5" />
          </div>
        </div>

        <div className="scrollable-content max-h-[370px] overflow-y-auto px-6 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(planet?.nutrition).map(
              ([key, value], index) => (
                <div
                  key={key + index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                      {key}
                    </p>

                    <p className="mt-2 text-lg font-semibold text-white">
                      {value}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionInfoDialog;

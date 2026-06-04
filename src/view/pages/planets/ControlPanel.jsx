import {
  planets,
  usePlanetsStore,
} from "../../../store/planet.store";
import { useState } from "react";

const ControlPanel = () => {
  const {
    planet,
    isOpen,
    setIsOpen,
    setIsDetailsOpen,
    setCurrentPlanet,
  } = usePlanetsStore();
  const [step, setStep] = useState(-5);
  return (
    <div
      className={`flex flex-1 flex-col`}
      style={{
        background: `linear-gradient(to top,${
          planet?.color + 30
        } ,transparent 50%)`,
      }}
    >
      <div
        style={{
          transform: `
      translate(50%, 50%)
      rotate(${step}deg)
    `,
        }}
        className="pointer-events-none absolute bottom-0 right-0 z-[1100] flex aspect-square w-[470px] items-center justify-center rounded-full transition-all duration-700 ease-out lg:bottom-32 lg:right-32 lg:w-[520px]"
      >
        <div className="absolute inset-0 rounded-full border border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 shadow-[0_0_80px_rgba(120,0,255,0.25)] backdrop-blur-md" />

        <div className="absolute inset-[40px] rounded-full border border-dashed border-white/20" />

        {/* center  */}

        <button
          style={{
            transform: `
      rotate(${-step}deg)
    `,
          }}
          className="pointer-events-none absolute z-[100] transition-all duration-700 ease-out"
        >
          <div className="relative flex aspect-square w-[260px] items-center justify-center overflow-hidden rounded-full border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-black/30 to-cyan-500/10 shadow-[0_0_60px_rgba(120,0,255,0.25)] backdrop-blur-xl">
            <div className="absolute inset-[30px] animate-pulse rounded-full border border-white/10 bg-gradient-to-br from-purple-500/20 to-cyan-500/10" />
            {/* <div className="absolute inset-[80px] rounded-full border border-white/10 bg-white/5 backdrop-blur-md" /> */}
            {/* 
            <div className="pointer-events-auto absolute inset-0 z-[100] hidden items-center justify-center gap-3 lg:flex">
              <button
                onClick={() => setIsOpen()}
                className="h-[58px] w-[58px] rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xs text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20"
              >
                OPEN MODEL
              </button>

              <button
                onClick={() => setIsDetailsOpen()}
                className="h-[58px] w-[58px] rounded-full border border-purple-400/30 bg-purple-500/10 text-xs text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-purple-500/20"
              >
                INFO
              </button>
            </div> */}

            {/* actions button */}
            <div className="pointer-events-auto z-[1000] hidden flex-col items-start justify-start gap-3 lg:flex">
              {/* actions */}
              <button
                onClick={() => setIsOpen()}
                className="app-button w-full"
              >
                {isOpen ? "CLOSE" : "OPEN"}
              </button>

              <button
                onClick={() => setIsDetailsOpen()}
                className="app-button w-full"
              >
                nutrition
              </button>
            </div>
          </div>
        </button>

        {/* toggle buttons  */}

        {Object.keys(planets).map((e, i, arr) => {
          const degrees = i * (360 / arr.length);
          const isSelected = planet?.name === e;

          return (
            <button
              onClick={() => {
                if (e === planet?.name) return;

                setCurrentPlanet(e);

                setStep((prev) => {
                  const currentIndex = planet.index;
                  const targetIndex = i;
                  const total = arr.length;

                  let diff = targetIndex - currentIndex;

                  if (diff > total / 2) diff -= total;
                  if (diff < -total / 2) diff += total;

                  return prev - diff * (360 / total);
                });
              }}
              key={i}
              className="group pointer-events-none absolute inset-0 flex select-none items-start justify-center pt-4"
              style={{
                transform: `rotate(${degrees}deg)`,
              }}
            >
              {/* lines */}
              <div className="absolute top-[52px] h-[40px] w-[2px] bg-gradient-to-b from-purple-500/60 to-transparent" />

              {/* planet buttons */}
              <div
                aria-selected={isSelected}
                className="pointer-events-auto relative flex aspect-square w-[50px] cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:border-purple-400/40 aria-selected:border-purple-500 aria-selected:bg-purple-500/20 aria-selected:shadow-[0_0_30px_rgba(168,85,247,0.45)] md:w-[58px]"
              >
                {/* rotating glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* active pulse */}
                {isSelected && (
                  <>
                    <div className="absolute inset-0 animate-ping rounded-full border border-purple-400 opacity-40" />

                    <div className="absolute inset-[-6px] rounded-full border border-purple-500/30" />
                  </>
                )}

                {/* first tow letter <planet name> */}
                <p className="z-10 text-xs font-semibold tracking-wider md:text-sm">
                  {e.substring(0, 2).toUpperCase()}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="pointer-events-auto absolute bottom-[25px] start-5 z-[1000] flex flex-col items-start justify-start gap-3 lg:hidden">
        <button
          onClick={() => setIsOpen()}
          className="app-button w-full"
        >
          {isOpen ? "CLOSE" : "OPEN"}
        </button>

        <button
          onClick={() => setIsDetailsOpen()}
          className="app-button w-full"
        >
          nutrition
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;

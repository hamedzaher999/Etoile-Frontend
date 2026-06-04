import { Orbit, Sparkles, Rocket } from "lucide-react";

import purple from "../../assets/planets/purple.png";
import blue from "../../assets/planets/uranus.png";
import sun from "../../assets/planets/sun.png";

const LoadingScreen = () => {
  return (
    <section className="fixed inset-0 z-[3000] flex items-center justify-center overflow-hidden bg-[#020308]">
      {/* shines */}
      <div className="absolute left-[-200px] top-[-150px] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[140px]" />

      <div className="absolute bottom-[-120px] right-[-200px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute inset-0 opacity-60">
        {[...Array(180)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white blur-[0.7px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() + 1}px`,
              aspectRatio: 1 / 1,
              borderRadius: "999px",
              transitionDuration: `${Math.random() * 3 + 2}ms`,
              animation: `pulse ${Math.random() * 3 + 2}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
            }}
          />
        ))}
      </div>

      {/* ================================== */}

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* orbit animation */}
        <div className="group relative my-10 flex items-center justify-center">
          {/* outer orbit */}
          <div
            style={{
              animationDuration: "12s",
            }}
            className="absolute h-[260px] w-[260px] animate-spin rounded-full border border-purple-400/20"
          >
            <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 overflow-hidden rounded-full shadow-[0_0_25px_rgba(168,85,247,0.8)]">
              <img
                src={purple}
                alt="planet"
                className="h-full w-full scale-[1.3] object-contain"
              />
            </div>
          </div>

          {/* middle orbit */}
          <div
            style={{
              animationDuration: "8s",
              animationDirection: "reverse",
            }}
            className="absolute h-[190px] w-[190px] animate-spin rounded-full border border-cyan-300/20"
          >
            <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 overflow-hidden rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]">
              <img
                src={blue}
                alt="planet"
                className="h-full w-full scale-[1.3] object-contain"
              />
            </div>
          </div>

          <div className="relative z-10 h-[80px] w-[80px] overflow-hidden rounded-full object-contain shadow-[0_0_40px_rgba(255,200,0,0.6),0_0_80px_rgba(255,140,0,0.4),0_0_120px_rgba(255,100,0,0.25)] transition-all duration-500 group-hover:rotate-12">
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,transparent,transparent,#000000cc)]" />
            <img
              src={sun}
              alt="planet"
              className="h-full w-full scale-[1.5] object-contain"
            />
          </div>
        </div>

        {/* ================= text ================= */}

        <div className="mt-20">
          <p className="text-[11px] uppercase tracking-[0.55em] text-cyan-300">
            Preparing The Galaxy
          </p>

          <h1 className="app-text-gradient mt-5 font-serif text-5xl font-black tracking-tight md:text-7xl">
            Étoile
          </h1>

          <p className="mx-auto mt-6 max-w-[650px] text-xs leading-[2] text-white/60 md:text-lg">
            Our chocolatiers are aligning the planets and preparing
            your interstellar experience. Please wait while the galaxy
            finishes loading.
          </p>
        </div>

        {/* ================= loading  ================= */}

        <div className="mt-14 w-[280px] md:w-[420px]">
          <div className="relative h-[10px] overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="absolute inset-y-0 w-[40%] animate-loader rounded-full bg-gradient-to-r from-purple-500 via-cyan-300 to-purple-500 shadow-[0_0_30px_rgba(34,211,238,0.6)]" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-white/40">
            <Orbit size={16} className="animate-spin" />

            <p className="text-[11px] uppercase tracking-[0.35em]">
              Loading 3D Universe
            </p>
          </div>
        </div>

        {/* ================= floating icons  ================= */}

        <div
          style={{
            animationDuration: "2.3s",
            animationDirection: "reverse",
          }}
          className="absolute left-[10%] top-[20%] hidden animate-bounce lg:block"
        >
          <Rocket size={28} className="text-purple-300/50" />
        </div>

        <div
          style={{
            animationDuration: "2s",
          }}
          className="absolute right-[12%] top-[28%] hidden animate-bounce lg:block"
        >
          <Sparkles size={28} className="text-cyan-300/50" />
        </div>
      </div>
    </section>
  );
};

export default LoadingScreen;

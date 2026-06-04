import { sunFlame, orbit } from "../../../../assets/orbit";
import StarsCanvas from "../../../canvas/Stars";

import { useState } from "react";
import { ArrowRight, Crown, Rocket, Sparkles } from "lucide-react";

import AppDialog from "../../../customs/AppDialog";

import { useNavigate } from "react-router-dom";

import HowVipDialog from "../components/HowVipDialog";
import WhatVipDialog from "../components/WhatVipDialog";

const InfoSection = () => {
  const navigate = useNavigate();

  const [action, setAction] = useState("");

  return (
    <section className="pointer-events-auto relative overflow-hidden py-8">
      <div className="absolute left-[-200px] top-[120px] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="absolute bottom-[120px] right-[-200px] h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <StarsCanvas color={"#07000c"} />

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col items-center text-center">
            <p className="mb-5 text-[11px] uppercase tracking-[0.55em] text-purple-300">
              Exclusive Access
            </p>

            <h2 className="app-text-gradient font-serif text-4xl font-black leading-tight md:text-6xl xl:text-7xl">
              DARE TO REACH
              <br />
              THE SUN?
            </h2>

            <p className="mt-6 max-w-[850px] text-sm text-white/60 md:text-lg">
              The brightest chocolate in our galaxy remains hidden
              from ordinary travelers. Only VIP explorers gain access
              to the legendary Sun collection — a celestial
              masterpiece crafted for the rare few who seek luxury
              beyond imagination.
            </p>
          </div>

          <div className="group relative mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-black/20 shadow-[0_0_60px_rgba(120,0,255,0.14)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-[8px]">
            <img
              src={sunFlame}
              alt="Sun"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-transparent" />

            <div className="min-h[320px] relative z-10 flex flex-col items-center justify-center px-6 py-16 text-center lg:min-h-[520px]">
              <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-yellow-300/20 bg-black/20 backdrop-blur-xl">
                <Rocket
                  size={34}
                  color="gold"
                  className="group-hover:animate-pulse"
                />
              </div>

              <p className="mb-4 text-[11px] uppercase tracking-[0.5em] text-yellow-200/80">
                VIP Solar Access
              </p>

              <h3 className="max-w-[900px] font-serif text-3xl font-black leading-tight text-white md:text-5xl xl:text-6xl">
                Join Our VIP Explorers
                <br />
                To Reach The Sun
              </h3>

              <p className="mt-8 max-w-[760px] text-sm leading-[2] text-white/70 md:text-lg">
                Unlock access to the rarest chocolate creation in our
                universe — handcrafted with celestial precision,
                golden ingredients, and luxurious cosmic presentation.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAction("HOW_VIP");
                  }}
                  className="rounded-full border border-white/15 bg-black/30 px-7 py-3 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-yellow-300/30 hover:bg-yellow-300/10 hover:shadow-[0_0_40px_rgba(255,180,0,0.18)]"
                >
                  How to Become VIP
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAction("WHAT_VIP");
                  }}
                  className="rounded-full border border-purple-400/20 bg-purple-500/10 px-7 py-3 text-sm text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-300/30 hover:bg-cyan-400/10"
                >
                  What is VIP?
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================== */}

        <div className="mx-auto mt-12 max-w-[1400px] px-6">
          <div className="flex flex-col items-center text-center">
            <p className="mb-5 text-[11px] uppercase tracking-[0.55em] text-cyan-300">
              Enter The Universe
            </p>

            <h2 className="app-text-gradient font-serif text-4xl font-black leading-tight md:text-6xl xl:text-7xl">
              Ready For
              <br />A Quick Journey?
            </h2>

            <p className="mt-6 max-w-[850px] text-sm leading-[2] text-white/60 md:text-lg">
              Step beyond the ordinary and explore a universe where
              every planet is crafted from chocolate. Orbit through
              immersive flavors inspired by the mysteries of the
              cosmos and begin your interstellar tasting adventure.
            </p>
          </div>

          <div className="group relative mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-black/20 shadow-[0_0_60px_rgba(0,180,255,0.12)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-[8px]">
            <img
              src={orbit}
              alt="Orbit"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-transparent" />

            <div className="absolute right-[-60px] top-[-60px] h-[240px] w-[240px] rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center px-6 py-16 text-center lg:min-h-[520px]">
              <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border border-cyan-300/20 bg-black/20 backdrop-blur-xl">
                <Sparkles
                  size={34}
                  color="purple"
                  className="group-hover:animate-pulse"
                />
              </div>

              <p className="mb-4 text-[11px] uppercase tracking-[0.5em] text-cyan-300/80">
                Interstellar Experience
              </p>

              <h3 className="max-w-[900px] font-serif text-3xl font-black leading-tight text-white md:text-5xl xl:text-6xl">
                Enter The Orbit
                <br />
                And Explore The Galaxy
              </h3>

              <p className="mt-8 max-w-[760px] text-sm leading-[2] text-white/70 md:text-lg">
                Navigate through immersive 3D planets, discover
                handcrafted cosmic flavors, and uncover a chocolate
                experience unlike anything on Earth.
              </p>

              <button
                onClick={() => {
                  navigate("/collection");
                }}
                className="mt-10 flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-8 py-3 text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 hover:shadow-[0_0_50px_rgba(0,180,255,0.2)]"
              >
                Enter Our Orbit
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* dialogs */}
      <AppDialog
        hidden={action === ""}
        onScroll={false}
        onClick={false}
      >
        {action === "HOW_VIP" && (
          <HowVipDialog closeCallback={() => setAction("")} />
        )}

        {action === "WHAT_VIP" && (
          <WhatVipDialog closeCallback={() => setAction("")} />
        )}
      </AppDialog>
    </section>
  );
};

export default InfoSection;

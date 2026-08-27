import { useEffect } from "react";
import gsap from "gsap";
import { ArrowBigDown } from "lucide-react";
import Interstellar from "../../../customs/Interstellar";
import { useHomeStore } from "../../../../store/home.store";
import { Link } from "react-router-dom";
const Hero = () => {
  const isPageLoaded = useHomeStore((s) => s.isPageLoaded);

  useEffect(() => {
    if (!isPageLoaded) return;
    const timeline = gsap.timeline();
    timeline
      .set("#interstellar", {
        opacity: 0,
        y: -40,
      })
      .set("#hero-title", {
        y: -220,
        opacity: 0,
      })
      .set("#hero-subtitle", {
        x: 700,
        opacity: 0,
      });
    // --------
    timeline
      .to("#hero-title", {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power4.out",
      })
      .to(
        "#hero-line",
        {
          width: "140px",
          opacity: 1,
          duration: 0.8,
        },
        "-=0.7",
      )
      .to(
        "#hero-subtitle",
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        "#interstellar",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.5",
      );
  }, [isPageLoaded]);

  return (
    <section className="pointer-events-none flex h-[700px] flex-col justify-center overflow-hidden pb-[4]">
      <div className="pointer-events-none relative flex h-full select-none flex-col overflow-hidden px-4 md:px-8 xl:px-14">
        {/* hero  */}
        <div className="relative z-[5] flex h-full flex-col justify-start pt-24 md:pt-[6rem]">
          <Interstellar justify="justify-center" />
          <div className="overflow-hidden">
            <h1
              id="hero-title"
              className="app-text-gradient text-center text-[72px] font-black leading-none tracking-tight opacity-0 md:text-[110px] lg:text-left lg:text-[130px] xl:text-[170px]"
            >
              Étoile
            </h1>
          </div>
          <div
            id="hero-line"
            className="mx-auto mb-6 mt-3 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-transparent opacity-0 lg:mx-0"
          />
          <div className="flex flex-row items-center justify-center overflow-hidden lg:justify-start">
            <p
              id="hero-subtitle"
              className="max-w-[700px] text-center text-[12px] font-light leading-[1.9] text-white/85 opacity-0 md:text-[16px] lg:text-left xl:text-[20px]"
            >
              Are you ready to explore the galaxy through flavor?
              <br />
              Enter a universe where every planet becomes a
              handcrafted chocolate experience designed for cosmic
              travelers.
            </p>
          </div>
        </div>
        {/* bottom bouncing button  */}
        <div className="pointer-events-auto z-[1000] mb-5 flex justify-center xl:justify-start">
          <a href={"#about"} className="app-button">
            <span className="relative z-10">
              <ArrowBigDown className="mt-2 animate-bounce" />
            </span>
          </a>
        </div>
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;

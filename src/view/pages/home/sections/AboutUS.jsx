import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import StarsCanvas from "../../../canvas/Stars";
import SellingPoints from "../components/SellingPoints";
import { uniqueSellingPoints } from "../../../../constant";

gsap.registerPlugin(ScrollTrigger);

const AboutUS = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 75%",
      },
    });

    tl.fromTo(
      "#labelLeft",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      },
    );

    tl.fromTo(
      "#labelRight",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      },
      0,
    );

    tl.fromTo(
      "#subLabel",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
      },
      0.3,
    );

    gsap.fromTo(
      ".selling-card",
      {
        y: 100,
      },
      {
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#selling-grid",
          start: "top 80%",
        },
      },
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="pointer-events-auto relative overflow-hidden py-[3rem]"
    >
      <div className="absolute left-[-300px] top-[150px] h-[420px] w-[420px] rounded-full bg-purple-600/30 blur-[120px]" />

      <div className="absolute bottom-[200px] right-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-500/40 blur-[150px]" />

      <StarsCanvas color={"#07000c"} />

      <div className="relative">
        <div
          id="about-heading"
          className="mx-auto flex max-w-[1100px] flex-col items-center px-6 text-center"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.55em] text-purple-300">
            Interstellar Chocolate Experience
          </p>

          <h1 className="font-serif text-5xl font-black leading-none tracking-tight sm:text-6xl md:text-8xl">
            <span
              id="labelLeft"
              className="app-text-gradient inline-block"
            >
              OUR PLANET
            </span>
            <br />
            <span
              id="labelRight"
              className="app-text-gradient inline-block"
            >
              CHOCOLATE
            </span>
          </h1>

          <p
            id="subLabel"
            className="mt-8 max-w-[760px] text-sm leading-[2] text-white/65 md:text-lg"
          >
            Our chocolate journey began with a love for both space
            exploration and handcrafted luxury chocolates. Every
            planet is carefully designed to feel like a celestial
            discovery — transforming every bite into an immersive
            voyage across the galaxy.
          </p>
        </div>

        <div
          id="selling-grid"
          className="relative z-10 mt-20 flex flex-wrap items-stretch justify-center gap-6 px-6"
        >
          {uniqueSellingPoints.map((point) => (
            <div key={point.title} className="selling-card flex">
              <SellingPoints
                icon={point.icon}
                title={point.title}
                description={point.description}
                color={point.color}
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-24 px-6">
          <div className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[36px] border border-white/10 bg-black/20 p-8 shadow-[0_0_60px_rgba(120,0,255,0.12)] backdrop-blur-2xl md:p-14">
            <div className="absolute left-1/2 top-[-120px] h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

            <div className="relative z-10 text-center">
              <p className="mb-4 text-[11px] uppercase tracking-[0.45em] text-cyan-300">
                Luxury Beyond Taste
              </p>

              <h2 className="mb-8 text-3xl font-black tracking-wider text-white md:text-5xl">
                Chocolate Designed Like
                <br />A Cosmic Artifact
              </h2>

              <p className="mx-auto max-w-[850px] text-sm leading-[2] text-white/65 md:text-lg">
                We believe chocolate should transcend the ordinary.
                Every creation is engineered with precision, inspired
                by the elegance of the universe, and crafted for
                explorers seeking something rare, immersive, and
                unforgettable. From planetary textures to cinematic
                packaging, every detail exists to create a luxury
                interstellar experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;

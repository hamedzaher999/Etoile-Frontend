import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePlanetsStore } from "../../../store/planet.store";
import Interstellar from "../../customs/Interstellar";
import { Orbit } from "lucide-react";
const Details = () => {
  const planet = usePlanetsStore((state) => state.planet);
  const isPlanetLoaded = usePlanetsStore(
    (state) => state.isPlanetLoaded,
  );
  const listRef = useRef(null);
  const buttonRef = useRef(null);

  const show = () => {
    if (!listRef.current) return;
    gsap.to(listRef.current?.querySelectorAll("li"), {
      opacity: 1,
      x: 0,
      y: 0,
      stagger: 0.06,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const hide = (e) => {
    if (!listRef.current) return;
    if (e.target.offsetParent === null) return;
    if (document.activeElement === e.target) return;
    gsap.to(listRef.current?.querySelectorAll("li"), {
      opacity: 0,
      x: -20,
      y: -20,
      stagger: 0.06,
      duration: 0.4,
      ease: "power3.in",
    });
  };

  useEffect(() => {
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();
    gsap.killTweensOf("#details-header");
    gsap.killTweensOf("#ingredient-title");
    if (listRef.current)
      gsap.killTweensOf(listRef.current.querySelectorAll("li"));

    tl.set("#details-header", {
      opacity: 0,
      y: 80,
    })
      .set("#ingredient-title", {
        opacity: 0,
        y: 10,
      })
      .set("#ingredient-button", {
        opacity: 0,
        x: -50,
      })
      .set(listRef.current?.querySelectorAll("li"), {
        opacity: 0,
        x: -20,
        y: -20,
      });

    if (!planet || !isPlanetLoaded) return;

    tl.to("#details-header", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    }).to(
      "#ingredient-title",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "titleStart",
    );

    mm.add("(min-width: 1024px)", () => {
      tl.to(listRef.current?.querySelectorAll("li"), {
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.06,
        duration: 0.4,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    });
    mm.add("(max-width: 1023px)", () => {
      tl.set(listRef.current?.querySelectorAll("li"), {
        opacity: 0,
        x: -20,
        y: -20,
        pointerEvents: "none",
      });
      tl.to(
        "#ingredient-button",
        {
          opacity: 1,
          x: 0,
          ease: "power1.in",
        },
        "titleStart",
      );
    });
    return () => mm.revert();
  }, [planet, isPlanetLoaded]);

  return (
    <>
      <div
        style={{
          opacity: isPlanetLoaded ? 0 : 1,
        }}
        className="absolute inset-0 z-[99999] flex h-full w-full items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
        <Orbit className="animate-spin" />
      </div>
      <Interstellar />
      {/* header */}
      <div id="details-header" className="relative z-10">
        {/* title */}
        <h1
          className="text-[48px] font-black leading-none tracking-tight md:text-[70px] lg:text-[90px]"
          style={{
            color: planet?.color,
            textShadow: `0 0 35px ${planet?.color}55`,
          }}
        >
          {planet?.name.toUpperCase()}
        </h1>

        {/* separator */}
        <div
          style={{
            background: `
                linear-gradient(
                  to right,
                  ${planet?.color},
                  transparent
                )
              `,
          }}
          className="my-5 h-[2px] w-[140px] rounded-full"
        />

        {/* description */}
        <p className="max-w-[620px] text-[14px] leading-[1.8] text-gray-300 md:text-[16px] lg:text-[18px]">
          {planet?.description}
        </p>
      </div>

      {/* ingredient section */}
      <div
        id="INGREDIENTS_SECTION"
        className="relative z-[1000] mt-8"
      >
        {/* title */}
        <div
          id="ingredient-title"
          className="mb-5 flex items-center gap-3"
        >
          {/* glowing dot */}
          <div
            style={{
              background: planet?.color,
              boxShadow: `0 0 20px ${planet?.color}`,
            }}
            className="aspect-square w-[10px] animate-pulse rounded-full"
          />

          <h2 className="purple-text-gradient text-2xl font-bold md:text-3xl">
            Ingredients
          </h2>
        </div>

        {/* ingredients */}
        <ul
          ref={listRef}
          id="INGREDIENTS"
          className="group flex max-w-[550px] flex-wrap gap-3"
        >
          <button
            onMouseEnter={show}
            onMouseLeave={hide}
            onClick={show}
            ref={buttonRef}
            id="ingredient-button"
            className="app-button pointer-events-auto lg:hidden"
          >
            show
          </button>
          {planet?.ingredients.map((ingredient, index) => (
            <li
              key={index}
              className={`ingredient-item relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400/30 md:text-[15px] lg:block`}
            >
              {/* hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative z-10">{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* bottom text */}
      <div className="relative mt-8 flex flex-col items-start justify-start gap-3 border-white/10 pt-5">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500">
          Cosmic Collection
        </p>

        <div
          style={{
            display: planet?.name === "Sun" ? "block" : "none",
            borderColor: `${planet?.color}40`,
          }}
          className="rounded-full border bg-white/[0.03] px-3 py-1 text-xs text-gray-300"
        >
          Limited Edition
        </div>
      </div>
    </>
  );
};

export default Details;

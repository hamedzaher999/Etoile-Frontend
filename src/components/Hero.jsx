import { useEffect, useMemo } from "react";
import { Logo3D, Home3D } from "./canvas";
import gsap from "gsap";
import { useProgress } from "@react-three/drei";

const Hero = () => {
  const { progress, loaded } = useProgress();
  useEffect(() => {
    console.log(loaded);
    const timeline = gsap.timeline();
    if (loaded > 0) {
      timeline
        .to("#hero", { y: 0, duration: 0.85 })
        .to("#subHero", { x: 0, opacity: 1, duration: 0.7 }, "-=0.7");
    }
  }, [loaded]);

  const Home3DComponent = useMemo(() => Logo3D, []);
  return (
    <>
      <div className="  max-w-full text-center xl:text-left lg:mx-[70px] relative pb-0 flex flex-col h-full overflow-hidden">
        <div className="xl:pl-5  z-[5]  relative w-full md:pl-10 justify-between pointer-events-none">
          <div className="mt-11">
            <h1
              id="hero"
              className=" translate-y-[-200px] font-serif md:pt-14 pt-10 text-[#6a0b81] md:text-[160px] md:leading-6 text-[80px] leading-[0px] mt-0"
            >
              Étoile
            </h1>
          </div>
          <p
            id="subHero"
            className=" xl:translate-x-[-500px] translate-x-[1000px] block font-gabriola pt-14 text-white md:text-[20px] text-[17px]"
          >
            Are you ready to feel the space?
            <br />
            Browse our collection and discover chocolates that are out of this
            World
          </p>
        </div>

        <div
          id="logo"
          style={{ overflow: "hidden" }}
          className="resize pointer-events-auto absolute z-[1] w-full flex-grow overflow-hidden h-full"
        >
          <Home3DComponent />
        </div>
      </div>
    </>
  );
};

export default Hero;

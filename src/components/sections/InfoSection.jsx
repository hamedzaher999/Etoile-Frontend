import { sunFlame, orbit } from "../../assets/orbit";
import { useEffect, useRef } from "react";
import { StarsCanvas } from "../canvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const InfoSection = () => {
  const label1Ref = useRef();

  return (
    <section className="w-full flex flex-col justify-center">
      <StarsCanvas color={"#07000c"} />

      {/* First Section */}
      <div className="flex flex-col justify-center text-center">
        <h2 className="mt-0 pointer-events-none font-serif pt-10 md:pt-14 text-[#6a0b81] text-[28px] xl:text-[60px] lg:text-[40px] leading-[50px] md:leading-none">
          DARE TO REACH THE SUN?
        </h2>
        <p className="px-14 pointer-events-none xl:px-60 pb-4 pt-2 font-serif text-gray-500 text-[10px] xl:text-[15px]">
          The brightest chocolate in our galaxy is out of reach for most
          travelers. Become a VIP explorer and taste what others can only dream
          of.
        </p>

        <div className="group relative cursor-pointer  w-full h-[200px]  lg:mt-8 lg:h-[340px] overflow-hidden border">
          <img
            id="img1"
            src={sunFlame}
            alt="background"
            className="absolute  inset-0 z-[-1] w-full h-full  object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h3
            id="imgLabel1"
            ref={label1Ref}
            className=" pointer-events-none p-5 font-serif font-bold text-[18px] md:text-[25px]"
          >
            Join our VIP clients to reach the Sun
          </h3>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <button className="m-2 rounded-lg bg-white px-4 py-1 text-[9px] lg:text-[14px] text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#6a0b81] hover:text-white">
              How to become a VIP
            </button>
            <button className="m-2 rounded-lg bg-white px-4 py-1 text-[9px] lg:text-[14px] text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#6a0b81] hover:text-white">
              What is VIP?
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col justify-center lg:pt-9 text-center">
        <h2 className="mt-0 pointer-events-none font-serif pt-10 md:pt-14 capitalize text-[#6a0b81] text-[28px] xl:text-[60px] lg:text-[40px] leading-[50px] md:leading-none">
          Are you ready for a quick journey?
        </h2>
        <p className="px-14 pointer-events-none xl:px-60 pb-4 pt-2 font-serif text-gray-500 text-[10px] xl:text-[15px]">
          Step beyond the ordinary and explore a universe where every planet is
          made of chocolate. From rich dark flavors to creamy delights, each
          creation is inspired by the mysteries of the cosmos. Your adventure
          begins here—taste the stars, savor the galaxies, and discover
          chocolates that are truly out of this world.
        </p>

        <div className="group cursor-pointer  relative w-full lg:mt-8 h-[200px] lg:h-[340px]  overflow-hidden border">
          <img
            id="img2"
            src={orbit}
            alt="background"
            className="absolute inset-0 z-[-1] w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <h3 className="pointer-events-none p-5 font-serif font-bold text-[18px]  lg:text-[28px]">
            Join our VIP clients to reach the Sun
          </h3>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <button className="m-2 rounded-lg bg-white px-4 py-1 text-[9px] lg:text-[14px] text-black shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#6a0b81] hover:text-white">
              Enter our Orbit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;

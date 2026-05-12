import SellingPoints from "../SellingPoints";
import { uniqueSellingPoints } from "../../constant";
import { StarsCanvas } from "../canvas";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AboutUS = () => {
  const timeline = gsap.timeline();
  const labelRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#label1",
        start: "bottom bottom",
      },
    });

    timeline.fromTo("#labelLeft", { x: -1100 }, { x: 0, duration: 0.7 });

    timeline.fromTo("#labelRight", { x: 1100 }, { x: 0, duration: 0.7 }, 0);

    timeline.fromTo(
      "#subLabel",
      { opacity: 0 },
      { opacity: 1, duration: 2.5 },
      0
    );
    gsap.fromTo(
      ".description",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".description",
          start: "bottom 75%",
        },
      }
    );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      className="  relative  bg-cover bg-no-repeat bg-center min-h-screen overflow-hidden "
    >
      <StarsCanvas color={"#07000c"} />

      <div
        id="label1"
        className="flex justify-center items-center flex-col text-center "
      >
        {/* <h1
          ref={labelRef}
          className="sm:mx-16 mx-6 pt-12 w-fit   md:text-7xl sm:text-6xl font-serif text-4xl text-[#6a0b81] font-bold"
        >
          OUR PLANET <br id="label2" /> CHOCOLATE
        </h1> */}
        <h1 className="sm:mx-16 pointer-events-none mx-6 pt-12 w-fit md:text-7xl sm:text-6xl font-serif text-4xl text-[#6a0b81] font-bold">
          <span id="labelLeft" className="inline-block font-serif">
            OUR PLANET
          </span>
          <br />
          <span id="labelRight" className="inline-block font-serif">
            CHOCOLATE
          </span>
        </h1>

        <p
          id={"subLabel"}
          className="font-serif sm:mx-16 pb-12 mx-6 mt-1   sm:text-sm md:text-lg text-[13px] text-gray-400  w-[250px]  md:w-[510px] sm:w-[370px] hover:text-blue-500 cursor-pointer"
        >
          Our chocolate journey began with a love for both space exploration and
          delicious, handcrafted chocolates. We wanted to create a unique
          experience where each chocolate represents a planet, allowing you to
          explore the solar system one bite at a time.
        </p>
      </div>
      <div className=" bg-pink flex flex-row flex-wrap text-center justify-center  ">
        {uniqueSellingPoints.map((point) => (
          <SellingPoints
            key={point.title}
            icon={point.icon}
            title={point.title}
            description={point.description}
          />
        ))}
      </div>
      <div className="border-white border-solid border  md:pr-40 md:pl-40 pr-10 pl-10 mt-8 md:pt-8 pt-3 md:pb-8 pb-3">
        <p className=" text-center font-serif  w-full  text-[8px] md:text-[13px]  text-gray-400  ] hover:text-blue-500 cursor-pointer">
          We believe chocolate should be more than ordinary—it should be an
          experience of elegance, passion, and discovery. Our creations are
          crafted for those who admire the art of chocolate and seek something
          truly rare. You, our client, are always at the center of our orbit.
          Every recipe, every detail, and every bite is designed to celebrate
          your taste for the extraordinary. With us, chocolate becomes not just
          a flavor, but a moment to cherish
        </p>
      </div>
    </section>
  );
};

export default AboutUS;

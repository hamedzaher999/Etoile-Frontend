import PackageCanvas from "../canvas/PackageCanvas";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import CustomButton from "../customs/customButton";
import { useProgress } from "@react-three/drei";
import Navbar from "../Navbar";
const PackageSection = () => {
  const [packageState, setPackageState] = useState({
    start: true,
    model: "big",
    isOpen: false,
    isSmallOpen: false,
    isBigOpen: false,
    prevModel: "big",
    prevIsOpen: false,
  });

  return (
    <section className="w-full h-screen relative ">
      <Navbar />
      <Canvas
        shadows
        camera={{
          position: [-40, 0, 0],
        }}
      >
        <PackageCanvas
          packageState={packageState}
          setPackageState={setPackageState}
        />
      </Canvas>
      <div
        className={
          "absolute z-10 bottom-5 lg:px-10 px-7 flex flex-row justify-between w-full  "
        }
      >
        <CustomButton
          buttonText={packageState.model == "big" ? "See Classic" : "see VIP"}
          buttonClassName={"w-fit h-8 "}
          textClassName="md:text-[14px] text-xs"
          onClick={() => {
            setPackageState((pre) => ({
              ...pre,
              isBigOpen: false,
              isSmallOpen: false,
              prevModel: pre.model === "big" ? "big" : "small",
              model: pre.model === "big" ? "small" : "big",
              prevIsOpen: pre.model === "big" ? pre.isBigOpen : pre.isSmallOpen,
            }));
          }}
        />
        <CustomButton
          buttonText={
            packageState.model === "big"
              ? packageState.isBigOpen
                ? "close VIP Package"
                : "open VIP Package"
              : packageState.isSmallOpen
              ? "close Classic Package"
              : "open Classic Package"
          }
          buttonClassName={" h-8 "}
          className={"p-0"}
          textClassName="md:text-[14px] text-xs"
          onClick={() => {
            setPackageState((pre) => ({
              ...pre,
              isOpen: !pre.isOpen,
              isBigOpen: pre.model === "big" ? !pre.isBigOpen : pre.isBigOpen,
              isSmallOpen:
                pre.model === "small" ? !pre.isSmallOpen : pre.isSmallOpen,
              start: false,
            }));
          }}
        />
        <CustomButton
          buttonText={"Order Now"}
          buttonClassName={"w-fit h-8  "}
          textClassName="md:text-[14px] text-xs"
          onClick={() => {}}
        />
      </div>
      <div className="  w-full  absolute text-center   md:top-[90px] top-[100px]">
        <h1 className="pointer-events-none font-serif  xl:text-8xl lg:text-7xl text-5xl text-l text-purple-600">
          {packageState.model == "big" ? "VIP Package" : "Everyday Package"}
        </h1>
        <p className="text-[9px] lg:text-xs  pointer-events-none text-gray-400 pt-4">
          {packageState.model == "big"
            ? "Step into the VIP zone and enjoy first-class service."
            : "Enjoy our timeless and classic package"}
        </p>
        <div>
          <p className=" cursor-pointer text-xs text-blue-400 p-2">
            {packageState.model == "big" ? "100$" : "70$"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;

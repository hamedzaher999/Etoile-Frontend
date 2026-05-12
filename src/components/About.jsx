import { useContext, useState } from "react";
import { Details } from "../components/index";
import { TypeCanvas } from "./canvas";
import { english } from "../store";
import { MyContext } from "./pages/View3D";
import DetailsFlowComponent from "./DetailsFlowComponent";
import { Navbar } from "../components/index";
const About = ({ setIsSolarSystemLoaded }) => {
  const [lookAtContext] = useContext(MyContext);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  return (
    <div className="relative h-full ">
      <Navbar className={"absolute z-50"} />
      {isDetailsOpen ? (
        <DetailsFlowComponent color={english[lookAtContext].color} />
      ) : (
        <></>
      )}
      <div
        className={`h-full w-screen flex `}
        style={{
          background: `linear-gradient(to top,${
            english[lookAtContext].color + 30
          } ,transparent 50%)`,
        }}
      >
        <TypeCanvas
          setIsSolarSystemLoaded={setIsSolarSystemLoaded}
          setIsModelOpen={setIsModelOpen}
          isModelOpen={isModelOpen}
        />
        <Details />
        <div className="max-w-[280px] pl-2 pb-5 h-[70px] flex items-center  absolute z-[50] bottom-0  justify-around">
          <button
            className="bg-blue-500 p-2 mx-2 sm:w-[120px] w-[90px] rounded-[13px] hover:border-white hover:border-solid hover:border-[2px]"
            onClick={() => {
              setIsModelOpen(!isModelOpen);
            }}
          >
            {isModelOpen ? "close" : "open"}
          </button>
          <button
            onBlur={() => {
              setIsDetailsOpen(false);
            }}
            onClick={() => {
              setIsDetailsOpen(!isDetailsOpen);
            }}
            className="bg-blue-500 p-2 mx-2 sm:w-[120px] w-[90px] rounded-[13px] hover:border-white hover:border-solid hover:border-[2px]"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

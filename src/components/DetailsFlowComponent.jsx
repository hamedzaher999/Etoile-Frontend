import Background from "three/src/renderers/common/Background.js";
import { nutrition } from "../store/types";
import { MyContext } from "./pages/View3D";
import { useContext } from "react";
const DetailsFlowComponent = ({ color }) => {
  const [lookAtContext] = useContext(MyContext);

  return (
    <div
      style={{
        // background: color + "af",
        background: "#000000dd",
        borderColor: color,
      }}
      className="text-center absolute top-1/2 left-1/2 z-50  w-[60%] md:w-[600px] h-[75%] border rounded-xl 
             transform -translate-x-1/2 -translate-y-1/2"
    >
      <h2 className="text-2xl font-serif font-bold mb-4 pt-5">
        Nutrition Facts
      </h2>
      <div className="grid grid-cols-2 gap-4 px-4 pt-5 ">
        {Object.entries(nutrition[lookAtContext]).map(([key, value], index) => (
          <div key={key} className="flex justify-between border-b py-1">
            <span className="font-medium capitalize md:text-[15px] text-xs">
              {key}
            </span>
            <span className=" md:text-xs text-[10px] pl-2">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsFlowComponent;

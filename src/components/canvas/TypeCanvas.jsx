import { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { state } from "../../store";
import PlanetsNav from "./PlanetsNav";
import { Group } from ".";
import Navbar from "../Navbar";
const TypeCanvas = (props) => {
  const { isModelOpen, setIsModelOpen } = props;
  const ref = useRef();
  return (
    <div className="h-screen  w-full relative  ">
      <Canvas camera={{ fov: 60, position: [0, 5, 0] }}>
        <Suspense
          fallback={
            <Html>
              <p>Loading....</p>
            </Html>
          }
        >
          <Group isModelOpen={isModelOpen} />
          <OrbitControls
            ref={ref}
            onStart={() => {
              ref.current.position = state.OrbitPosition;
              ref.current.target = state.target;
            }}
            onEnd={() => {}}
            target={[0, 5, 0]}
          />
        </Suspense>
      </Canvas>
      <PlanetsNav setIsModelOpen={setIsModelOpen} />
    </div>
  );
};

export default TypeCanvas;

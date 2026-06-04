import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { state } from "../../store";
import PlanetsOrbit from "./Orbit";
import { usePlanetsStore } from "../../store/planet.store";
const PlanetCanvas = () => {
  const { progress } = useProgress();
  const setField = usePlanetsStore((s) => s.setField);
  const currentPlanet = usePlanetsStore((s) => s.currentPlanet);
  useEffect(() => {
    if (!progress || progress < 100) return;
    if (!usePlanetsStore.getState().isPageLoaded) {
      setField("isPageLoaded", true);
    }
    setField("isPlanetLoaded", true);
  }, [progress, currentPlanet]);
  return (
    <div className="relative flex h-screen">
      <Canvas
        className="flex flex-1"
        camera={
          {
            // fov: 60,
            // position: [0, 5, 0]
          }
        }
      >
        <Suspense>
          <PlanetsOrbit />
          <OrbitControls
            position={state.OrbitPosition}
            target={state.target}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PlanetCanvas;

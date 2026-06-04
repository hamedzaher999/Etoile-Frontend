import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { OrbitControls, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import { planets, usePlanetsStore } from "../../store/planet.store";
const AppCanvas = () => {
  const { progress } = useProgress();
  const planet = usePlanetsStore((s) => s.currentPlanet);
  const setField = usePlanetsStore((s) => s.setField);
  useEffect(() => {
    if (!progress || progress < 100) return;
    setField("isPlanetLoaded", true);
  }, [progress, planet]);
  return (
    <section className="pointer-events-auto absolute z-[900] h-screen w-screen">
      <Canvas className="pointer-events-auto w-full">
        <Scene />
      </Canvas>
    </section>
  );
};

export default AppCanvas;

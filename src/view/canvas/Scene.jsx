import { Suspense, useEffect } from "react";
import { useSceneStore } from "../../store/scene.store";
import { Stars } from "./Stars";
import PackagesModels from "./PackagesModels";
import PlanetsOrbit from "./Orbit";
import { useThree } from "@react-three/fiber";
import StoreLogoModel from "./StoreLogoModel";

const Scene = () => {
  const camera = useThree((s) => s.camera);
  const scene = useSceneStore((s) => s.activeScene);
  useEffect(() => {
    if (scene === "orderPage") {
      camera.position.set(-30, 0, 0);
    }
    if (scene === "homePage") {
      camera.position.set(50, 50, 50);
    }
  }, [scene]);
  return (
    <>
      <Suspense fallback={null}>
        {scene != "orderPage" && scene != "orderPage" && <Stars />}
        {scene === "homePage" && <StoreLogoModel />}
        {scene === "planetPage" && <PlanetsOrbit />}
        {scene === "orderPage" && <PackagesModels />}
      </Suspense>
    </>
  );
};

export default Scene;

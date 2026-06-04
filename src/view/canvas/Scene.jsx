import { Suspense, useEffect, useState } from "react";
import { useSceneStore } from "../../store/scene.store";
import { Stars } from "./Stars";
import PackagesModels from "./PackageCanvas";
import PlanetsOrbit from "./Orbit";
import { useThree } from "@react-three/fiber";
import StoreLogoModel from "./StoreLogoModel";

const Scene = () => {
  const { camera } = useThree();
  const scene = useSceneStore((s) => s.activeScene);
  useEffect(() => {
    if (scene === "orderPage") {
      camera.position.set(-40, 0, 0);
    }
    if (scene === "homePage") {
      camera.position.set(50, 50, 50);
      // camera.position.set(+50, +50, -30);
    }
  }, [scene]);
  return (
    <>
      <Suspense fallback={null}>
        {scene != "orderPage" && <Stars />}
        {scene === "homePage" && <StoreLogoModel />}
        {scene === "planetPage" && <PlanetsOrbit />}
        {scene === "orderPage" && <PackagesModels />}
        {/* <Home3D /> */}
      </Suspense>
    </>
  );
};

export default Scene;

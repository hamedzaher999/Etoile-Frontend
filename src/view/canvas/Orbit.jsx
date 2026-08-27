import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import Planet from "./Planet";
import { usePlanetsStore } from "../../store/planet.store";
import { memo, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
const PlanetsOrbit = () => {
  const { planet } = usePlanetsStore();
  const planetPosition = [...planet?.position];

  const {
    cameraLookAtTarget,
    newCameraPosition,
    directLightPosition,
  } = useMemo(() => {
    const cameraLookAtTarget = new Vector3(
      planetPosition[0] - 0.2,
      planetPosition[1] + 1, //2
      planetPosition[2] + 0.5, //0
    );
    const newCameraPosition = new Vector3(
      planetPosition[0] + 5,
      planetPosition[1] + 7,
      planetPosition[2] + 5,
    );
    const directLightPosition = new Vector3(
      planetPosition[0] + 45,
      planetPosition[1] + 75,
      planetPosition[2] + 25,
    );
    return {
      cameraLookAtTarget,
      newCameraPosition,
      directLightPosition,
    };
  }, [planet]);

  useFrame((frame) => {
    const screen =
      window.innerWidth < 800
        ? "sm"
        : window.innerWidth < 1200
          ? "md"
          : "lg";
    const fov = window.innerWidth < 800 ? 75 : 55;
    if (fov !== frame.camera.fov) {
      frame.camera.fov = fov;
      frame.camera.updateProjectionMatrix();
    }
    frame.camera.position.lerp(newCameraPosition, 0.01);
    frame.camera.lookAt(cameraLookAtTarget);
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        position={directLightPosition}
        intensity={1.5}
      />
      <Planet />
      <OrbitControls
        target={planet?.position}
        minDistance={3}
        maxDistance={25}
      />
    </>
  );
};

export default memo(PlanetsOrbit);

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import Planet from "./Planet";
import { usePlanetsStore } from "../../store/planet.store";
import { memo, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
const PlanetsOrbit = () => {
  const { planet } = usePlanetsStore();
  const { camera } = useThree();

  const planetPosition = [...planet?.position];
  const cameraLookAtTarget = useMemo(() => {
    return new THREE.Vector3(
      planetPosition[0] - 0.2,
      planetPosition[1] + 2,
      planetPosition[2],
    );
  }, [planet]);

  const newCameraPosition = useMemo(() => {
    return new THREE.Vector3(
      planetPosition[0] + 5,
      planetPosition[1] + 7,
      planetPosition[2] + 5,
    );
  }, [planet]);

  const directLightPosition = useMemo(() => {
    return new THREE.Vector3(
      planetPosition[0] + 45,
      planetPosition[1] + 75,
      planetPosition[2] + 25,
    );
  }, [planet]);
  useFrame(() => {
    camera.position.lerp(newCameraPosition, 0.01);
    camera.lookAt(cameraLookAtTarget);
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

import PackageModel from "./PackageModel";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { memo, useRef } from "react";
import PackageLights from "./PackageLights";
import { usePackageStore } from "../../store/order.store";
export const PackagesModels = () => {
  console.log("PackageCanvas rendered");
  const current = useRef(new THREE.Vector3(0, 0, 0));
  const lightsRef = useRef();
  const model = usePackageStore((s) => s.model);
  const camera = useThree((s) => s.camera);

  useFrame((frame) => {
    const width = frame.size.width;
    const targetFov = width < 1000 ? 95 : 65;
    if (camera.fov !== targetFov) {
      camera.fov = targetFov;
      camera.updateProjectionMatrix();
    }
    if (model === "VIP") {
      const target = new THREE.Vector3(0, 0, 0);
      current.current.lerp(target, 0.01);
      frame.camera.lookAt(current.current);

      frame.camera.position.lerp(new THREE.Vector3(-35, 12, 0), 0.01);
      if (!lightsRef.current) return;
      lightsRef.current.position.lerp(
        new THREE.Vector3(0, 2, 15),
        0.01,
      );
    } else {
      const target = new THREE.Vector3(22, 0, 0);
      current.current.lerp(target, 0.01);
      frame.camera.lookAt(current.current);
      frame.camera.position.lerp(new THREE.Vector3(-8, 12, 0), 0.01);
      if (!lightsRef.current) return;
      lightsRef.current.position.lerp(
        new THREE.Vector3(0, 0, -15),
        0.01,
      );
    }
  });
  return (
    <>
      <PackageModel>
        <group ref={lightsRef}>
          <PackageLights />
        </group>
      </PackageModel>
    </>
  );
};

export default memo(PackagesModels);

import PackageModel from "./PackageModel";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { memo, useRef } from "react";
import PackageLights from "./PackageLights";
import useOrderStore from "../../store/order.store";
export const PackagesModels = () => {
  console.log("PackageCanvas rendered");
  const current = useRef(new THREE.Vector3(0, 0, 0));
  const lightsRef = useRef();
  const model = useOrderStore((s) => s.model);
  useFrame((frame) => {
    if (model === "big") {
      const target = new THREE.Vector3(0, 0, 0);
      current.current.lerp(target, 0.01);
      frame.camera.lookAt(current.current);
      //-20, 15, 0)
      if (!lightsRef.current) return;
      frame.camera.position.lerp(new THREE.Vector3(-40, 15, 0), 0.01);
      lightsRef.current.position.lerp(
        new THREE.Vector3(0, 2, 15),
        0.01,
      );
    } else {
      const target = new THREE.Vector3(15, 0, 0);
      current.current.lerp(target, 0.01);
      frame.camera.lookAt(current.current);
      // -20, 15, -20
      frame.camera.position.lerp(new THREE.Vector3(-5, 12, 0), 0.01);
      //70, 0, 0
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

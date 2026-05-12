import PackageModel from "./PackageModel";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";
import PackageLights from "./PackageLights";
const PackageCanvas = ({ packageState, setPackageState }) => {
  console.log("PackageCanvas rendered");

  const current = useRef(new THREE.Vector3(0, 0, 0));
  const lightsRef = useRef();
  useFrame((frame) => {
    const targetPosition = new THREE.Vector3(-20, 15, 0);
    // if (!frame.camera.position.equals(targetPosition)) {
    //   frame.camera.position.lerp(targetPosition, 0.01);
    //   if (packageState.model === "big") {
    // frame.camera.lookAt(0, 0, 0);
    //   } else {
    //     frame.camera.lookAt(5, 0, 0);
    //   }
    // }
    if (packageState.model === "big") {
      const target = new THREE.Vector3(0, 0, 0);
      current.current.lerp(target, 0.01);
      frame.camera.lookAt(current.current);
      //-20, 15, 0)
      frame.camera.position.lerp(new THREE.Vector3(-40, 15, 0), 0.01);
      lightsRef.current.position.lerp(new THREE.Vector3(0, 2, 15), 0.01);
    } else {
      const target = new THREE.Vector3(15, 0, 0);
      current.current.lerp(target, 0.01);
      frame.camera.lookAt(current.current);
      // -20, 15, -20
      frame.camera.position.lerp(new THREE.Vector3(-5, 12, 0), 0.01);
      //70, 0, 0
      lightsRef.current.position.lerp(new THREE.Vector3(0, 0, -15), 0.01);
    }
  }, []);
  return (
    <>
      <PackageModel
        packageState={packageState}
        setPackageState={setPackageState}
      >
        <group ref={lightsRef}>
          <PackageLights />
        </group>
      </PackageModel>
    </>
  );
};

export default PackageCanvas;

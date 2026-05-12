import { useEffect, useRef, useMemo } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import DraggableGroup from "./DraggableGroup";
import handelPackageAnimationFunc from "../../functoins/handelPackageAnimation";
import handelSmallPackageAnimationFunc from "../../functoins/handelSmallPackageAnimationFunc";
const PackageModel = ({ children, packageState, setPackageState }) => {
  console.log("PackageModel rendered");
  const { scene: studio } = useGLTF("../../../public/studio/sudio.gltf");
  const { scene: bigPackage, animations } = useGLTF(
    "../../../public/package/choclate.gltf"
  );
  const { scene: smallPackage, animations: smallAnimations } = useGLTF(
    "../../../public/smallPackage/smallPackage.gltf"
  );

  const bigActions = useAnimations(animations, bigPackage);
  const smallActions = useAnimations(smallAnimations, smallPackage);

  const ref = useRef();
  const studioRef = useRef();
  useEffect(() => {
    bigPackage.children[1].castShadow = false;
    bigPackage.children[11].children[0].children[0].castShadow = true;
    studio.children.forEach((childe) => (childe.castShadow = false));
    //
    smallPackage.children[1].castShadow = true;
    smallPackage.children[2].children[0].children[0].castShadow = true;
    smallPackage.children[2].children[0].children[1].castShadow = true;
    smallPackage.children[2].children[0].children[2].castShadow = true;
    //
    console.log(bigPackage.children);
    studio.children[0].material.color.setRGB(0.1, 0.1, 0.1);
    studio.children[0].material.roughness = 1;
    studio.children[0].receiveShadow = true;
    studio.children[0].castShadow = false;
  }, []);
  useEffect(() => {
    handelSmallPackageAnimationFunc({ packageState, bigActions, smallActions });
  }, [packageState.isSmallOpen, packageState.start]);

  useEffect(() => {
    handelPackageAnimationFunc({ packageState, bigActions, smallActions });
  }, [packageState.isBigOpen, packageState.start]);
  return (
    <>
      <group rotation={[Math.PI / 2, -Math.PI / 2, Math.PI / 2]}>
        {children}
        <DraggableGroup position={[0, 0, 15]}>
          <primitive ref={ref} object={bigPackage} scale={1.2} />
        </DraggableGroup>
        <DraggableGroup position={[0, 0, -10]}>
          <primitive object={smallPackage} />
        </DraggableGroup>

        <primitive ref={studioRef} object={studio} scale={[7, 1, 3]} />
      </group>
    </>
  );
};

export default PackageModel;

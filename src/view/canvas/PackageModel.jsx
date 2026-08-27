import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import DraggableGroup from "./DraggableGroup";
import useAnimation from "../../hooks/useAnimation";
import useOrderStore from "../../store/order.store";
const PackageModel = ({ children }) => {
  const studioRef = useRef();
  const { scene: studio } = useGLTF("/room/room.glb");
  const { scene: bigPackage, animations } = useGLTF(
    "/package/VipPackage.glb",
  );
  const { scene: smallPackage, animations: smallAnimations } =
    useGLTF("/smallPackage/ClassicPackage.glb");
  useEffect(() => {
    useOrderStore.getState().setIsPageLoaded(true);
  }, []);

  const VIPanimation = useAnimations(animations, bigPackage);
  const CLASSICanimation = useAnimations(
    smallAnimations,
    smallPackage,
  );

  useAnimation(VIPanimation, CLASSICanimation);

  return (
    <>
      <group rotation={[Math.PI / 2, -Math.PI / 2, Math.PI / 2]}>
        {children}
        <DraggableGroup position={[0, 0, 15]}>
          <primitive
            castShadow={true}
            object={bigPackage}
            scale={1.2}
          />
        </DraggableGroup>
        <DraggableGroup position={[0, 0, -10]}>
          <primitive castShadow={true} object={smallPackage} />
        </DraggableGroup>
        <primitive
          ref={studioRef}
          object={studio}
          position={[0, -10, 0]}
          scale={[6, 6, 6]}
        />
      </group>
    </>
  );
};

export default PackageModel;

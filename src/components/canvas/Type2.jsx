import { useEffect, useMemo, useContext } from "react";
import {
  useGLTF,
  useAnimations,
  Detailed,
  useTexture,
} from "@react-three/drei";
import { english } from "../../store";
import * as THREE from "three";
import { MyContext } from "../pages/View3D";
const Type = ({
  planet,
  texture,
  index,
  name,
  position,
  planetsActionRef,
  isModelOpen,
  planetsRef,
}) => {
  console.log(planetsRef.current[index]);
  const earth = useGLTF(planet);
  // const clonedScene = useMemo(() => earth.scene.clone(), [earth.scene, index]);
  const actions = useAnimations(earth.animations, earth.scene);
  //  const actions = useMemo(() => useAnimations(earth.animations, clonedScene), [earth.animations, clonedScene]);
  planetsActionRef.current[index] = actions;
  const [lookAtContext] = useContext(MyContext);

  useEffect(() => {
    if (isModelOpen) {
      let actions = planetsActionRef.current[english[lookAtContext].index];
      for (let i = 0; i < actions.names.length; i++) {
        actions.actions[actions.names[i]]
          .reset()
          .setLoop(THREE.LoopOnce)
          .play().clampWhenFinished = true;
      }
    } else {
      for (let i = 0; i < actions.names.length; i++) {
        actions.actions[actions.names[i]].stop();
      }
    }
  }, [isModelOpen]);
  return (
    <>
      <Detailed hysteresis={0} distances={[10, 25]} position={position}>
        <primitive
          ref={(el) => {
            planetsRef.current[index] = el;
          }}
          object={earth.scene}
          scale={2.5}
          castShadow
          planetId={index}
          receiveShadow
          rotation={[-1, 4.5, -1]}
        />
        <mesh name={name} rotation={[0, 90, 0]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial map={useTexture(texture)} roughness={0} />
        </mesh>
      </Detailed>
    </>
  );
};

export default Type;

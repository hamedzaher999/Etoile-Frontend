import { useEffect, useMemo, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { usePlanetsStore } from "../../store/planet.store";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Lights from "./Lights";
const Planet = () => {
  const { planet, isOpen } = usePlanetsStore();
  const gltf = useGLTF(planet?.model);
  const groupRef = useRef();
  const lightPosition = [...planet?.position];
  lightPosition[0] += 1;
  lightPosition[1] += 0;
  lightPosition[2] += 1;
  const clonedScene = useMemo(() => {
    return gltf.scene.clone(true);
  }, [gltf.scene]);

  const setField = usePlanetsStore((s) => s.setField);
  useEffect(() => {
    setField("isPageLoaded", true);
  }, []);
  const actions = useAnimations(gltf.animations, clonedScene);
  useEffect(() => {
    if (isOpen) {
      if (!actions) return;
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
  }, [isOpen]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (!groupRef.current) return;
    easing.damp3(
      groupRef.current.position,
      [
        planet.position[0] + Math.sin(t * 0.5) * 0.2,

        planet.position[1] + Math.cos(t * 0.8) * 0.15,

        planet.position[2] + Math.cos(t * 0.8) * 0.2,
      ],
      0.2,
      delta,
    );
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y * 0.15, state.pointer.x * 0.25 * 0.15, 0],
      0.12,
      delta,
    );
  });

  return (
    <>
      <group position={planet?.position} ref={groupRef}>
        {isOpen && <Lights point={lightPosition} />}
        <primitive
          object={clonedScene}
          scale={2.5}
          castShadow
          receiveShadow
          rotation={[-1, 4.5, -1]}
        />
      </group>
    </>
  );
};

export default Planet;

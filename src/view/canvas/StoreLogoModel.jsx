import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader, Vector3 } from "three";
import { easing } from "maath";
import { memo, useEffect, useMemo, useRef } from "react";
import { mercuryTexture } from "../../assets/planetsTexture";
import { useHomeStore } from "../../store/home.store";

const StoreLogoModel = () => {
  const groupRef = useRef();
  const currentLookAt = useRef(new Vector3());
  const setField = useHomeStore((s) => s.setField);
  const camera = useThree((s) => s.camera);

  const { position_SM, position_LG, LookAt_SM, LookAt_LG } =
    useMemo(() => {
      const position_SM = new Vector3(0, 1, 7);
      const position_LG = new Vector3(0, -0.2, 6.2);

      const LookAt_SM = new Vector3(0, 2, 0);
      const LookAt_LG = new Vector3(-6.9, 2, -10);
      return { position_SM, position_LG, LookAt_SM, LookAt_LG };
    }, []);

  const texture = useMemo(
    () => useLoader(TextureLoader, mercuryTexture),
    [],
  );

  useEffect(() => {
    setField("isPageLoaded", true);
  }, []);

  useFrame(() => {
    const fov = window.innerWidth < 1024 ? 75 : 40;
    if (fov !== camera.fov) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  });

  useFrame((state, delta) => {
    const sm = window.innerWidth < 1024;
    const t = state.clock.elapsedTime;
    if (!groupRef.current) return;
    easing.damp3(
      groupRef.current.position,
      [Math.sin(t) * 0.15, Math.cos(t * 0.8) * 0.12, 0],
      0.2,
      delta,
    );
    easing.dampE(
      groupRef.current.rotation,
      [state.pointer.y * 0.15, state.pointer.x * 0.25 + t * 0.15, 0],
      0.12,
      delta,
    );

    camera.position.lerp(sm ? position_SM : position_LG, 0.01);
    const targetLookAt = sm ? LookAt_SM : LookAt_LG;
    currentLookAt.current.lerp(targetLookAt, 0.03);
    camera.lookAt(currentLookAt.current);
  });

  return (
    <>
      <OrbitControls enableZoom={false} minDistance={5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <group ref={groupRef}>
        <mesh scale={2}>
          <sphereGeometry args={[1, 128, 128]} />
          <meshStandardMaterial
            map={texture}
            roughness={1}
            metalness={0}
          />
        </mesh>
      </group>
    </>
  );
};

export default memo(StoreLogoModel);

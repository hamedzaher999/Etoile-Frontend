import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useProgress, Html } from "@react-three/drei";
import { Suspense } from "react";
const MyLogo = () => {
  const groupRef = useRef();
  const logo = useGLTF("/logoModel/logo3dModel.gltf");
  const [size, setSize] = useState();
  window.addEventListener("resize", getCurrentWidth);

  function getCurrentWidth() {
    const w = window.innerWidth;
    if (w < 640) setSize(1);
    else if (w < 768) setSize(1.5);
    else if (w > 768) setSize(1.7);
  }
  useEffect(() => {
    getCurrentWidth();
  }, []);
  useFrame((frame, delta) => {
    if (groupRef) {
      groupRef.current.rotation.y -= 0.001;
    }
    if (window.innerWidth > 1290) {
      frame.camera.position.x = -2;
      frame.camera.position.y = -1;
    } else if (window.innerWidth > 768) {
      frame.camera.position.x = 0;
      frame.camera.position.y = 0.5;
    } else if (window.innerWidth < 640) {
      frame.camera.position.x = 0;
      frame.camera.position.y = 0.3;
    }
    easing.dampE(
      groupRef.current.children[0].rotation,
      [0, frame.pointer.y / 5, frame.pointer.x / 5],
      0.1,
      delta
    );
  });

  return (
    <>
      <group ref={groupRef} rotation={[0, 0, 0]}>
        <primitive
          object={logo.scene}
          scale={size}
          castShadow
          receiveShadow
          position={[0, -0.8, 0]}
          rotation={[0, 0.1, 0]}
        />
      </group>
    </>
  );
};
function SpinningCube() {
  return (
    <>
      <mesh rotation={[0.5, 0.5, 0]} position={[0, -0.8, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#6a0b81" />
      </mesh>
    </>
  );
}
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white text-lg font-bold">
        {progress.toFixed(0)}% Loading...
      </div>
    </Html>
  );
}
const Logo3D = () => {
  return (
    <>
      <Canvas shadows className="pointer-events-auto ">
        {/* <OrbitControls  autoRotate autoRotateSpeed={0.1} enableZoom={false} /> */}
        <hemisphereLight
          position={[1, 1, 1]}
          intensity={3}
          color={"#ffffff"}
          groundColor="black"
        />
        <pointLight
          castShadow
          intensity={15}
          position={[0, 1, 5]}
          groundColor="black"
        />
        {/* <pointLight castShadow intensity={0} position={[-3, 4, 2]} /> */}
        <spotLight castShadow intensity={550} position={[8, 1, -5]} />

        {/* <Suspense fallback={<SpinningCube />}> */}
        <MyLogo />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default Logo3D;

import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Vector3 } from "three";
import { useHomeStore } from "../../store/home.store";

const LogoModel = () => {
  const logoRef = useRef();
  const setField = useHomeStore((S) => S.setField);
  const { camera } = useThree();
  const logo = useGLTF("/logoModel/logo3dModel.gltf");

  const [hovered, setHovered] = useState(false);
  const [pointerPos, setPointerPos] = useState([0, 0]);

  useEffect(() => {
    setField("isPageLoaded", true);
  }, []);

  const xlScreen = new Vector3(-2.8, -0.5, camera.position.z + 0.1);
  const mdScreen = new Vector3(0, 0.5, camera.position.z);
  const smScreen = new Vector3(0, 0.3, camera.position.z);

  // useFrame((_, delta) => {
  //   if (logoRef.current) {
  //     logoRef.current.rotation.y -= 0.001;
  //   }

  //   if (window.innerWidth > 1290) {
  //     camera.position.lerp(xlScreen, 0.01);
  //   } else if (window.innerWidth > 768)
  //     camera.position.lerp(mdScreen, 0.01);
  //   else if (window.innerWidth < 640)
  //     camera.position.lerp(smScreen, 0.01);

  //   // if (hovered && logoRef.current) {
  //   //   easing.dampE(
  //   //     logoRef.current.rotation,
  //   //     [0, pointerPos[1] / 5, pointerPos[0] / 5],
  //   //     0.1,
  //   //     delta,
  //   //   );
  //   // }
  // });

  return (
    <group
      scale={10}
      ref={logoRef}
      rotation={[0, 0, 0]}
      onPointerOver={(e) => {
        setHovered(true);
        e.stopPropagation();
      }}
      onPointerOut={() => setHovered(false)}
      onPointerMove={(e) => setPointerPos([e.point.x, e.point.y])}
    >
      <hemisphereLight
        position={[1, 1, 1]}
        intensity={3}
        color="#ffffff"
        groundColor="black"
      />
      {/* <pointLight castShadow intensity={0} position={[-3, 4, 2]} /> */}
      {/* <spotLight castShadow intensity={400} position={[8, 1, -5]} /> */}
      <primitive
        object={logo.scene}
        receiveShadow
        position={[0, -0.8, 0]}
        // rotation={[0, 0.1, 0]}
      />
    </group>
  );
};

export default LogoModel;

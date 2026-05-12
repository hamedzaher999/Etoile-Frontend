import * as THREE from "three";
import { memo } from "react";
const Lights = ({ point }) => {
  return (
    <>
      <hemisphereLight
        intensity={1}
        shadow={true}
        color={0xf0f0f0}
        castShadow
        groundColor="black"
      />
      <ambientLight intensity={0.2} color={"yellow"} />
      <pointLight
        intensity={40}
        castShadow
        color={"#ffffff"}
        position={[point[0] + 4, point[1] + 4, point[2] - 2.5]}
      />
      <pointLight intensity={3} castShadow position={point} />
      <spotLight
        position={point}
        castShadow
        angle={3}
        penumbra={1}
        intensity={15}
      />
    </>
  );
};

export default memo(Lights);

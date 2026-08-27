import { memo } from "react";

const PackageLights = () => {
  console.log("PackageLights rendered ");
  return (
    <>
      <ambientLight intensity={0.8} castShadow={true} />

      <spotLight
        intensity={300}
        angle={3}
        penumbra={0}
        position={[0, 15, 0]}
        rotation={[0, 2, 0]}
        castShadow
        color={"#ffffff"}
      />

      <spotLight
        intensity={700}
        angle={2}
        penumbra={10}
        position={[30, 3, 0]}
        rotation={[0, 2, 0]}
        castShadow
        color={"#a020f0"}
      />

      <pointLight
        intensity={150}
        distance={25}
        position={[0, 15, 0]}
        castShadow
        color={"#dddddd"}
      />
      <pointLight
        intensity={30}
        castShadow
        distance={25}
        position={[-18, 5, -2]}
        color={"#ffffff"}
      />

      {/* above the E  */}
      <pointLight
        intensity={30}
        castShadow
        distance={10}
        position={[-3, 5, 0]}
        color={"#ffffff"}
      />

      <spotLight
        intensity={1900}
        angle={0.4}
        penumbra={1}
        position={[0, 40, -40]}
        castShadow
        color={"#5555fff"}
      />
      <spotLight
        intensity={1800}
        angle={4}
        penumbra={10}
        position={[25, -15, 20]}
        castShadow
        color={"#ffffff"}
      />
    </>
  );
};

export default memo(PackageLights);

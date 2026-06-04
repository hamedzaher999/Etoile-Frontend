import { memo } from "react";

const PackageLights = () => {
  console.log("PackageLights rendered ");
  return (
    <>
      <group>
        <hemisphereLight
          intensity={2}
          color={"#555555"}
          groundColor={"#1a1a1a"}
          position={[0, 0, 0]}
        />
        <spotLight
          intensity={200}
          angle={3}
          penumbra={0}
          position={[0, 15, 0]}
          rotation={[0, 2, 0]}
          castShadow
          color={"#ffffff"}
        />

        <spotLight
          intensity={280}
          angle={3}
          penumbra={0}
          position={[30, 20, -20]}
          rotation={[0, 2, 0]}
          castShadow
          color={"#a020f0"}
        />
        <spotLight
          intensity={800}
          angle={0.5}
          penumbra={0.5}
          position={[18, 15, -20]}
          rotation={[0, 2, 0]}
          castShadow
          color={"#ffffff"}
        />
        {/* <pointLight
          intensity={0}
          distance={25}
          position={[5, 20, 5]}
          castShadow
          color={"#a020f0"}
        /> */}
        <pointLight
          intensity={150}
          distance={25}
          position={[0, 15, 0]}
          castShadow
          color={"#dddddd"}
        />
        {/* <pointLight
          intensity={30}
          castShadow
          distance={25}
          position={[-18, 5, -2]}
          color={"#ffffff"}
        /> */}

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
          angle={0.4}
          penumbra={1}
          position={[30, -15, 20]}
          castShadow
          color={"#ffffff"}
        />
        {/* <spotLight
          intensity={700}
          angle={0.4}
          penumbra={1}
          position={[-28, -20, -25]}
          castShadow
          color={"#ffffff"}
        /> */}
      </group>
    </>
  );
};

export default memo(PackageLights);

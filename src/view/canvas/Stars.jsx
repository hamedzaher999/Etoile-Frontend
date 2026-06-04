import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, Suspense, memo } from "react";
import { Float } from "@react-three/drei";
import whiteStar from "../../assets/stars/Untitled-1.png";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Stars = () => {
  // console.log("starsCanvas rerender");
  const starCount = 2500;
  const texture = useLoader(TextureLoader, whiteStar);

  const positions = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2100;
    }
    return positions;
  }, []);

  return (
    <>
      <Float speed={0.4} floatIntensity={4}>
        <Points positions={positions} frustumCulled={false}>
          <PointMaterial
            size={7}
            sizeAttenuation={true}
            depthWrite={false}
            map={texture}
            transparent={true}
            vertexColors={false}
          />
        </Points>
      </Float>
    </>
  );
};

const StarsCanvas = (color) => {
  return (
    <div
      style={{ backgroundColor: color ? color : "transparent" }}
      className="pointer-events-none absolute z-[-1] h-full w-full bg-black bg-space2 bg-cover bg-center bg-no-repeat"
    >
      <Canvas
        className="pointer-events-none"
        fog={{ color: "blue", near: 10, far: 10 }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default memo(StarsCanvas);

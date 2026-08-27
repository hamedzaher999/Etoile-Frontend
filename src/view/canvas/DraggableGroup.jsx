import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
function DraggableGroup({ children, position }) {
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const handleDown = (e) => {
    setIsDragging(true);
    setLastX(e.clientX);
  };
  //
  const handleUp = () => {
    setIsDragging(false);
    setDeltaX(0);
  };
  const handleMove = (e) => {
    if (isDragging) {
      const movement = e.clientX - lastX;
      setDeltaX(movement);
      setLastX(e.clientX);
    }
  };

  useEffect(() => {
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointermove", handleMove);
    };
  }, [isDragging, lastX]);

  useFrame(() => {
    if (groupRef.current && isDragging) {
      groupRef.current.rotation.y += deltaX * 0.01;
    }
    if (!isDragging) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.01,
      );
    }
  });
  return (
    <group
      // onPointerDown={handleDown}
      // onPointerUp={handleUp}
      position={position}
      ref={groupRef}
    >
      {children}
    </group>
  );
}

export default DraggableGroup;

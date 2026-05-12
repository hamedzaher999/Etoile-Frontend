import { useRef, useContext } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { state, english } from "../../store";
import * as THREE from "three";
import { MyContext } from "../pages/View3D";
import { Lights, Type } from ".";
let orb = false;
const Group = ({ isModelOpen }) => {
  const [lookAtContext] = useContext(MyContext);
  const groupRef = useRef();
  const { camera } = useThree();
  const planetsRef = useRef([]);
  const planetsActionRef = useRef([]);
  const point = [...english[lookAtContext].position];
  point[0] += 1;
  point[1] += 0;
  point[2] += 1;
  let po = english[lookAtContext].position;
  const look = new THREE.Vector3(po[0] - 0.2, po[1] + 2, po[2]);
  const lookAtTarget = new THREE.Vector3(0, 0, 0);
  useFrame((frame, delta) => {
    // let po=loc[lookAt]
    if (groupRef.current) {
      groupRef.current.children.forEach((planet) => {
        if (planet.children[1].name !== lookAtContext) {
          planet.rotation.y += 0.01;
        } else {
          planet.rotation.y = 0;
        }
      });
    }

    const targetPosition = new THREE.Vector3(po[0] + 5, po[1] + 7, po[2] + 5);
    state.target = look;
    if (!camera.position.equals(targetPosition)) {
      if (!orb) {
        camera.position.lerp(targetPosition, 0.01);
        lookAtTarget.lerp(look, 0.01);
        // camera.lookAt(lookAtTarget);
        camera.lookAt(po[0] - 0.2, po[1] + 2, po[2]);

        state.OrbitPosition = [
          camera.position.x,
          camera.position.y,
          camera.position.z,
        ];
      }
    }
    if (camera.position === targetPosition) {
      orb = true;
    }
    // setCameraPosition(frame.camera.position)
  });
  return (
    <>
      <Lights point={point} />
      <group ref={groupRef}>
        {Object.keys(english).map((element, i) => (
          <Type
            isModelOpen={isModelOpen}
            index={i}
            planetsActionRef={planetsActionRef}
            planetsRef={planetsRef}
            key={element}
            planetName={element}
            name={element}
            // lookAt={lookAt}
            texture={english[element].texture}
            planet={english[element].model}
            position={english[element].position}
          />
        ))}
      </group>
    </>
  );
};

export default Group;

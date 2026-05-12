import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls,Html ,Center} from "@react-three/drei"
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { solarSystem } from "../../constant"
import { easing } from "maath";
import { useRef, useState} from "react";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense } from "react";
import Logo3D from "./Logo3D";

const   Planet=({spherePosition,sphereSize,torusPosition,torusSize,texture})=> {
    const mappedTexture = useLoader(TextureLoader, texture);
    const [groupSize,setGroupSize]=useState(0.5)
    const sphereRef  = useRef(); 
    const groupRef=useRef();
    useFrame((frame,delta)=>{
    
        const lg=window.innerWidth>550
        const sm=window.innerWidth<=550
        const xl=window.innerWidth>=870
        if(sm)setGroupSize(0.5)
        if(lg)setGroupSize(0.7)
        if(xl)setGroupSize(0.9)
           if (groupRef.current) {
    groupRef.current.children.forEach(child => {
      // For example, rotate each mesh on Y axis
      child.rotation.x += 0.002;
      child.rotation.y += 0.002;
      child.rotation.z += 0.002;
    });
  }
            // groupRef.current.rotation.z+=0.1
        easing.dampE(groupRef.current.rotation,[30,(frame.pointer.y/5),(frame.pointer.x/5)],0.1,delta)
    })
return(
    <>
  <group ref={groupRef} scale={groupSize} rotation={[30,0,0]}> 
     <mesh position={torusPosition}  rotateY={30} rotateX={30} rotation={[0, Math.PI, 0]}>
        <torusGeometry args={[torusSize, 0.02, 16, 60]}  />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={4} />
    </mesh>
    {/* <mesh position={torusPosition}  rotateY={30} rotateX={30} rotation={[0, Math.PI, 0]}>
        <torusGeometry args={[torusSize*1.3, 0.01, 16, 60]}  />
        <meshStandardMaterial color="white" emissive="white" emissiveIntensity={4} />
    </mesh> */}
    <mesh  position={spherePosition} rotation={[90,0,0]}>
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshStandardMaterial 
        roughness={0.2}
        map={mappedTexture}
        />
    </mesh>
    {/* <EffectComposer>
        <Bloom
          luminanceThreshold={0.1}  
          luminanceSmoothing={0.9}  
          intensity={0.1}   
          kernelSize={2}     
           radius={0.5}
        />
      </EffectComposer> */}
    {/* <pointLight 
        color={"#ffffff"} 
        intensity={7}
        scale={2} 
        distance={4}
        position={[torusPosition[0],torusPosition[1],torusPosition[2]-3]} // Positioning it at the torus center
      /> */}
  </group>
    </>
    )
}


const   Home3D=()=> {
  
    return (
        <>
         <div className="w-full  h-full overflow-hidden">
         <Canvas   className="min-w-full min-h-full  overflow-hidden" camera={{
                    // position:[0,-7,3],
                    position:[-2,1,8],
                    // up:[1,0,0],
                    rotation:[0,0,0]
                 }} >
                {/* <OrbitControls   enableZoom={false} autoRotateSpeed={0.2}
                minPolarAngle={Math.PI/3 } 
                maxPolarAngle={Math.PI /3} 
                  target={[4, 0, 1]}
                /> */}
                <hemisphereLight color={'white'} position={[1, 1, 1]} intensity={2} groundColor="black" />
                <Suspense fallback={<Html> <p>.......</p></Html>}>
          <Center>
            {/* {
                   Object.keys(solarSystem).map((planet)=>(
                       <Planet key={planet} spherePosition={solarSystem[planet].planetPosition} sphereSize={solarSystem[planet].planetSize} torusPosition={solarSystem[planet].torusPosition} torusSize={solarSystem[planet].torusSize} texture={solarSystem[planet].texture} /> 
                   ))
            } */}
            {/* <Logo3D /> */}
          </Center>
          </Suspense>
            </Canvas>
         </div>
          
        </>
  )
}


export default Home3D

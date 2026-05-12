import {useEffect, useState} from "react"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls,Preload,useGLTF,useAnimations  } from "@react-three/drei"
import {Points,PointMaterial } from '@react-three/drei'



const Planet = ({open}) => {

 const group = useRef();
 const earth =  useGLTF('./earth/choclate.gltf')
 const actions  = useAnimations(earth.animations, group);

 useEffect(() => {
  actions.actions[actions.names[4]].reset().setLoop('fadeOut',1).play().clampWhenFinished=open
  actions.actions[actions.names[5]].reset().setLoop('fadeOut',1).play().clampWhenFinished=open
  actions.actions[actions.names[6]].reset().setLoop('fadeOut',1).play().clampWhenFinished=open
}, [actions]);

  return (

    <mesh>
        <hemisphereLight position={[1, 1, 1]} intensity={5} groundColor="black" />

        <pointLight intensity={1} position={[-3, 5, 2]} />
        
        {/* <spotLight 
          position={[-3, 5, 2]}
          angle={1}
          penumbra={0}
          intensity={100}
          castShadow
          shadow-mapSize={1024}
        /> */}

        <primitive 
            ref={group}
            object={earth.scene}
            scale={2.5}
            position={[0, 0, 0]}
            rotation={[-0.01, -0.3, -0.12]}
        />

  </mesh>
  )
}

const PlanetCanvas = () => {
const [open,setOpen] =useState(false)

  return (
    <Canvas
            // frameloop="demand"
            camera={{
                position: [20, 3, 5],
                fov: 25,
            }}
            // gl={{ preserveDrawingBuffer: true }}
            >
              
                  <OrbitControls
                  onClick={console.log(5)}
                    // autoRotate
                    // autoRotateSpeed={0.5}
                    // enableDamping  ={true}
                    enableZoom={false}
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 2}
                  />
                  <Planet open={true} />

            {/* <Preload all /> */}
        </Canvas>
  )

}
export default PlanetCanvas;
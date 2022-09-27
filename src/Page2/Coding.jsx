import {
  Circle,
  Cylinder,
  Float,
  Image,
  Lightformer,
  MeshReflectorMaterial,
  Text,
  useTexture
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three'
import PodiumAlpha from '../Images/PodiumAlpha.png'
import CodingSymbol from '../Images/CodingSymbol.png';

export default function Coding({choicePos}) {
  const [PodiumMap] = useTexture([PodiumAlpha])
  function Symbol() {
    return (
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
        floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[0.5, 0.8]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
        <Image
          url={CodingSymbol}
          transparent
          opacity={1}
          position={[-2.8, 0.4, -3]}
          scale={1.5}
          color={'#92b3ff'}
        />
      </Float>
    );
  }

  function Podium() {
    return <>        <group name="left" position={[-2.75, 0, -3]} scale={1.2}>
    <Cylinder
      args={[1, 0.8, 0.25, 30]}
      rotation={[Math.PI, 0, 0]}
      position={[0, -0.4, 0]}
    >
      <MeshReflectorMaterial
        color="#ffffff"
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        opacity={2}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.25}
        roughness={1}
      />
    </Cylinder>
    <Cylinder
      args={[1, 0.56, 0.27, 30]}
      rotation={[Math.PI, 0, 0]}
      position={[0, -0.4, 0]}
    >
      <MeshReflectorMaterial
        color="#828282"
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        opacity={2}
        depthScale={1.1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.25}
        roughness={1}
      />
    </Cylinder>
    <Lightformer
      form="circle"
      scale={[0.8, 0.8, 16]}
      rotation={[Math.PI * -0.5, 0, 0]}
      position={[0, -0.27, 0]}
      color={'#92b3ff'}
      map={PodiumMap}
      intensity={1.5}
    />
    {/* <Circle       form="circle"
    args={[1,64]}
      scale={[0.8, 0.8, 16]}
      rotation={[Math.PI * -0.5, 0, 0]}
      position={[0, -.26, 0]}
    >
      <meshBasicMaterial   color={'#ffffff'} map={PodiumMap} transparent/>
    </Circle> */}
  </group></>
  }

  const groupRef = useRef()

const vec1 = new THREE.Vector3(0,0,0);
const vec2 = new THREE.Vector3(7.75,0,0);
const vec3 = new THREE.Vector3(3.75, 0, 3);


  useFrame((delta, time)=>{
    if(choicePos === 1){
      return groupRef.current.position.lerp(vec1, time * 2)
      // return groupRef.current.position.lerp(vec1, 0.01, delta)
    } else if(choicePos === 2){
      return groupRef.current.position.lerp(vec2, time * 2)
  } else if(choicePos === 3){
    return groupRef.current.position.lerp(vec3, time * 2)
  } else {
    console.log('error')
  }
  })

  return (
    <group ref={groupRef}>
      <group position={[-1, 0, 0]}>
        <Symbol />
{/* <Podium/> */}
      </group>
      <Text
          font={'PermanentMarker.ttf'}
          fontSize={0.4}
          position={[-3.75, -0.44, -1.5]}
          rotation={[Math.PI * -0.4, 0, 0]}
          color={'#92b3ff'}
        >
                    Coding
        </Text>
        
    </group>
  );
}

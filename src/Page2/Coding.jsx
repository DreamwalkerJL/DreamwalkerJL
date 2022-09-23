import {
  Cylinder,
  Float,
  Image,
  Lightformer,
  MeshReflectorMaterial,
} from '@react-three/drei';
import React from 'react';

import CodingSymbol from '../Images/CodingSymbol.png';

export default function Coding() {
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
          position={[-3.2, 0.4, -3]}
          scale={1.5}
        />
      </Float>
    );
  }
  return (
    <group position={[-1, 0, 0]}>
      <Symbol />
      <group name="left" position={[-2.75, 0, -3]} scale={1.2}>
        <Cylinder
          args={[1, 0.8, 0.25, 30]}
          rotation={[Math.PI, 0, 0]}
          position={[0, -0.4, 0]}
        >
          <MeshReflectorMaterial
            color="#252525"
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
            color="#252525"
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
          scale={[0.8, 0.8]}
          rotation={[Math.PI * -0.5, 0, 0]}
          position={[0, -0.27, 0]}
        />
      </group>
    </group>
  );
}

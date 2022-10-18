import React, { useRef } from 'react';
import { useGLTF, useVideoTexture } from '@react-three/drei';
import CyberVideo from '../Images/CyberBackground3.mp4';
export function Screen5(props) {
  const { nodes, materials } = useGLTF('/Screen5.glb');
  const BG2 = useVideoTexture(CyberVideo);
  const meshRef = useRef();

  return (
    <group>
      <group scale={3} position={[0, -1.6, 0]}>
        <group {...props} dispose={null} rotation={[0, Math.PI, 0]}>
          <mesh
            geometry={nodes.polySurface2.geometry}
            material={nodes.polySurface2.material}
            position={[0, 0.53, -0.73]}
            rotation={[Math.PI / 2, 0, -Math.PI]}
            scale={[1, 2, 0.43]}
          >
            <meshBasicMaterial map={BG2} ref={meshRef} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload('/Screen5.glb');

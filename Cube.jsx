/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/Cube.glb');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Topowire_1.geometry} material={materials.lambert1} />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.lambert1}
        position={[0, 263.63, 0]}
      />
      <mesh
        geometry={nodes.Oil_Tank_1.geometry}
        material={materials.lambert1}
        position={[0, 516.58, 0]}
      />
      <mesh
        geometry={nodes.Oil_Tank.geometry}
        material={materials.lambert1}
        position={[0, 13.89, 0]}
      />
    </group>
  );
}

useGLTF.preload('/Cube.glb');

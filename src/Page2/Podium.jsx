import { Cylinder, Lightformer, MeshReflectorMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
export default function Podium() {
  const group1Ref = useRef();

  // useFrame(()=> {
  //     if(group1Ref.current.position.x > -2.75) {
  //         group1Ref.current.position.x -= 0.01
  //     } else
  //     group1Ref.current.position.x = -2.75
  // })
  console.log(group1Ref);
  return <group></group>;
}

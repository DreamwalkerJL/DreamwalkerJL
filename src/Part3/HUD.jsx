import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
export default function HUD() {
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());
    const { camera, mouse } = useThree();

    useFrame(({ mouse, delta, clock }) => {
      camera.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.1, 3.7), 0.005);
      camera.rotation.set(mouse.y * 0.05, -mouse.x * 0.1, 0);
    });
  }

  return <Rig />;
}

import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import * as THREE from 'three';
export default function HUD() {
  function Rig() {
    const [vec] = useState(() => new THREE.Vector3());
    const { camera, mouse } = useThree();

    const isMort = useMediaQuery({
      query: '(max-width: 976px)',
    });
    const BPlg = useMediaQuery({
      query: '(min-width: 976px)',
    });

    useFrame(({ mouse, delta, clock }) => {
      isMort && camera.position.lerp(vec.set(mouse.x * 2.2, mouse.y * 0.2, 4), 0.02);
      BPlg && camera.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.1, 3.7), 0.005);
      BPlg && camera.rotation.set(mouse.y * 0.05, -mouse.x * 0.1, 0);
    });
  }

  return <Rig />;
}

import { Billboard, PointMaterial, Points, Trail } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Depth, LayerMaterial } from 'lamina';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState } from 'react';
import * as THREE from 'three';

import Alpha from '../Images/Alpha3.png';
import Checker from '../Images/checker.png';

export default function Stars(props) {
  const [colorMap, alpha] = useLoader(THREE.TextureLoader, [Checker, Alpha]);
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(40000), { radius: 60 }),
  );
  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 72;
    ref.current.rotation.y += delta / 108;
  });
  const groupRef = useRef();
  const pointRef = useRef();

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]} position={[0, -10, -3]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          ref={pointRef}
          transparent
          color="#f9f9f3"
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
          map={alpha}
          blending={5}
        />
      </Points>
    </group>
  );
}

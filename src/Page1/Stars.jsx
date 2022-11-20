import { PointMaterial, Points } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import Alpha from '../Images/Alpha2.png';

export function Stars(props) {
  const pointsRef = useRef();
  const [alpha] = useLoader(THREE.TextureLoader, [Alpha]);
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(40000), { radius: 43 }),
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 72;
    ref.current.rotation.y -= delta / 108;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]} position={[0, -10, 100]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#87defa"
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
          ref={pointsRef}
          map={alpha}
          blending={2}
        />
      </Points>
    </group>
  );
}

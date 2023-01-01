import { Sphere, Trail } from '@react-three/drei';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import * as meshline from 'three.meshline';
import MoonAlpha from '../Images/Alpha.png';
export default function Trailer() {
  extend(meshline);
  const [alpha] = useLoader(THREE.TextureLoader, [MoonAlpha]);
  const boxRef = useRef();

  const trailRef = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * window.innerWidth) / 13.6;
    const y = (mouse.y * window.innerHeight) / 13.6 - 22;
    // const z = mouseMovement.speedX / 20 - 5;
    boxRef.current.position.set(x, y, 5);
    boxRef.current.rotation.set(-y, x, 5);
  });

  const groupRef = useRef();

  return (
    <>
      <group ref={groupRef}>
        <Trail
          width={0} // Width of the line
          color={'hotpink'} // Color of the line
          length={20} // Length of the line
          decay={2} // How fast the line fades away
          local={false} // Wether to use the target's world or local positions
          stride={0} // Min distance between previous and current point
          interval={1} // Number of frames to wait before next calculation
          target={boxRef} // Optional target. This object will produce the trail.
          attenuation={(w) => w} // A function to define the width in each point along it.
        >
          <Sphere args={[1, 16]} ref={boxRef}>
            <meshStandardMaterial />
          </Sphere>
          <meshLineMaterial
            ref={trailRef}
            lineWidth={5}
            color={'lightblue'}
            useMap
            map={alpha}
            blending={5}
          />
        </Trail>
      </group>
    </>
  );
}

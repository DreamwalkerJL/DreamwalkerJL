import { Box, Circle, Cloud, GradientTexture, Sphere, Trail } from '@react-three/drei';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Select, Selection } from '@react-three/postprocessing';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useControls } from 'leva';
import MouseMovement from 'mouse-movement';
import { useEffect, useRef, useState } from 'react';
import ReactCursorPosition from 'react-cursor-position';
import * as THREE from 'three';
import * as meshline from 'three.meshline';

import { Moon } from '../3D/Moon';
import MoonAlpha from '../Images/Alpha.png';
import Checker from '../Images/checker.png';
import { Effects } from './Effects';
export default function Trailer() {
  extend(meshline);
  const [colorMap, alpha] = useLoader(THREE.TextureLoader, [Checker, MoonAlpha]);
  const boxRef = useRef();
  // useFrame(()=> boxRef.current.position.x += 0.1)

  const { viewport } = useThree();
  // viewport = canvas in 3d units (meters)

  // const [x, setX] = useState()
  // const [y, setY] = useState()
  // useEffect(
  //   () => {
  //     const update = (e) => {
  //       setX(e.x)
  //       setY(e.y)
  //     }
  //     window.addEventListener('mousemove', update)
  //     window.addEventListener('touchmove', update)
  //     return () => {
  //       window.removeEventListener('mousemove', update)
  //       window.removeEventListener('touchmove', update)
  //     }
  //   },
  //   [setX, setY]
  // )

  const mouseMovement = new MouseMovement();

  let mouseMovementCallback = function () {
    // console.log(mouseMovement.speedX);
    // console.log(mouseMovement.speedY);
  };
  mouseMovement.init({ mousemoveCallback: mouseMovementCallback });
  const trailRef = useRef();

  const ref = useRef();
  useFrame(({ mouse }) => {
    const x = (mouse.x * window.innerWidth) / 15.3;
    const y = (mouse.y * window.innerHeight) / 15.3;
    const z = mouseMovement.speedX / 20 - 5;
    //   console.log(viewport.height)
    // console.log(window.innerHeight)
    boxRef.current.position.set(x, y, 5);

    boxRef.current.rotation.set(-y, x, 5);
  });

  function Testop() {
    return useFrame(() => mouseMovement.speedX);
  }

  // useFrame(()=> trailRef.current.rotation.x += 0.01)

  const groupRef = useRef();
  // useFrame(()=> groupRef.current.rotation.y += 0.01)
  // console.log(groupRef)

  return (
    <>
      <group ref={groupRef}>
        <Trail
          width={0} // Width of the line
          color={'hotpink'} // Color of the line
          length={20} // Length of the line
          decay={0.15} // How fast the line fades away
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

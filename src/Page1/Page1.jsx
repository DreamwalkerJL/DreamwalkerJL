import {
  Box,
  Circle,
  Cloud,
  Environment,
  Float,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Stats,
  Text,
  Text3D,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Select, Selection } from '@react-three/postprocessing';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { Moon } from '../3D/Moon';
import Checker from '../Images/checker.png';
import MoonAlpha from '../Images/Moon.png';
import { Effects } from './Effects';
import { Stars } from './Stars';
import { TextDW } from './TextDW';
import Trailer from './Trail2';
export default function Page1() {
  function Moon2() {
    const [colorMap, alpha] = useLoader(THREE.TextureLoader, [Checker, MoonAlpha]);
    return (
      <Circle args={[10, 320]}>
        <meshStandardMaterial alphaMap={alpha} transparent map={colorMap} />
      </Circle>
    );
  }
  function EnvLamia() {
    const ref = useRef();
    const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } });

    useFrame((state) => {
      const cos = Math.cos(state.clock.elapsedTime) * 95;
      const sin = Math.sin(state.clock.elapsedTime) * 95;
      ref.current.layers[0].origin.set(cos / 2, 0, 0);
      ref.current.layers[1].origin.set(cos, sin, cos);
      ref.current.layers[2].origin.set(sin, cos, sin);
      ref.current.layers[3].origin.set(cos, sin, cos);
    });
    return (
      <Environment background={'only'} frames={Infinity}>
        <mesh scale={1000}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial // Depth
            ref={ref}
            toneMapped={false}
            color={'gray'}
            side={THREE.BackSide}
          >
            <Depth
              colorA="#ff0090"
              colorB="black"
              alpha={1}
              mode="normal"
              near={95 * 3.5 * gradient}
              far={95 * 3.5}
              origin={[0, 0, 0]}
            />
            <Depth
              colorA="blue"
              colorB="#568ded"
              alpha={1}
              mode="add"
              near={87 * 14 * gradient}
              far={87 * 14}
              origin={[0, 1, 1]}
            />
            <Depth
              colorA="blue"
              colorB="#aa30d6"
              alpha={1}
              mode="add"
              near={87 * 21 * gradient}
              far={87 * 21}
              origin={[0, 1, -1]}
            />
            <Depth
              colorA="white"
              colorB="red"
              alpha={1}
              mode="overlay"
              near={10 * 8 * gradient}
              far={10 * 8}
              origin={[1, -1, -1]}
            />
            <Fresnel mode="add" color="white" intensity={0.1} power={0.7} bias={0.05} />
          </LayerMaterial>
        </mesh>
      </Environment>
    );
  }

  function MainCamera(props) {
    const ref = useRef();

    return (
      <PerspectiveCamera
        {...props}
        ref={ref}
        fov={60}
        near={1}
        far={1000}
        makeDefault
        position={[0, -22.5, 125]}
      />
    );
  }
  return (
    <div className="absolute, CanvasClipTop h-[110%] w-full">
      <Canvas>
        <Suspense fallback={<Html center>Loading.</Html>}>
          <Stats />
          <Moon2 />
          <Stars />

          <EnvLamia />
        </Suspense>
      </Canvas>
    </div>
  );
}

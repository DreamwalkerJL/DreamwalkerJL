import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useControls } from 'leva';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import LabObjects from '../3D/LabObjects';
import Effects from './Effects';
export default function Lab() {
  function EnvLamia() {
    const ref = useRef();
    const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } });

    useFrame((state) => {
      const cos = Math.cos(state.clock.elapsedTime / 4) * 88;
      const sin = Math.sin(state.clock.elapsedTime / 4) * 88;
      ref.current.layers[0].origin.set(cos / 2, 0, 0);
      ref.current.layers[1].origin.set(cos, sin, cos);
      ref.current.layers[2].origin.set(sin, cos, sin);
      ref.current.layers[3].origin.set(cos, sin, cos);
    });
    return (
      <Environment background={'only'} frames={Infinity}>
        <mesh scale={1000} rotation={[0, -0.3, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial // Depth
            ref={ref}
            toneMapped={false}
            color={'gray'}
            side={THREE.BackSide}
          >
            <Depth
              colorA="#000000"
              colorB="black"
              alpha={1}
              mode="normal"
              near={88 * 3.5 * gradient}
              far={88 * 3.5}
              origin={[0, 0, 0]}
            />
            <Depth
              colorA="#4c4c4c" // changes strong
              colorB="#000000"
              alpha={1}
              mode="add"
              near={80 * 14 * gradient}
              far={88 * 14}
              origin={[0, 1, 1]}
            />
            <Depth
              colorA="black"
              colorB="#535353"
              alpha={1}
              mode="add"
              near={30 * 21 * gradient}
              far={90 * 21}
              origin={[0, 1, -1]}
            />
            <Depth
              colorA="black"
              colorB="#393939" // gradier
              alpha={1}
              mode="overlay"
              near={10 * 8 * gradient}
              far={10 * 8}
              origin={[1, -1, -1]}
            />
            <Fresnel mode="add" color="#898989" intensity={0.1} power={0.5} bias={0.05} />
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
        position={[0, 0, 90]}
        rotation={[0, 0, 0]}
      />
    );
  }
  return (
    <div className="relative  h-[130%] w-full CanvasClipMiddle">
      <Canvas>
        <OrbitControls />
        <MainCamera />
        <EnvLamia />
        <LabObjects />
        <Effects />
      </Canvas>
    </div>
  );
}

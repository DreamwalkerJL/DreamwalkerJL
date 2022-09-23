import {
  Backdrop,
  Box,
  Circle,
  Cylinder,
  Environment,
  Float,
  Image,
  Lightformer,
  MeshReflectorMaterial,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  Stats,
  Text,
  useHelper,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useControls } from 'leva';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import CodingSymbol from '../Images/CodingSymbol.png';
import { Model } from '../ScrollTest2';
import { Brush } from './Brush';
import { Char } from './Char';
import Coding from './Coding';
import Effects from './Effects';
import Podium from './Podium';
import Stars from './Stars2';
export default function Page2() {
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
              colorA="#ff0088"
              colorB="black"
              alpha={1}
              mode="normal"
              near={88 * 3.5 * gradient}
              far={88 * 3.5}
              origin={[0, 0, 0]}
            />
            <Depth
              colorA="#ff0000" // changes strong
              colorB="#e09c35"
              alpha={1}
              mode="add"
              near={80 * 14 * gradient}
              far={88 * 14}
              origin={[0, 1, 1]}
            />
            <Depth
              colorA="green"
              colorB="#f6bc8d"
              alpha={1}
              mode="add"
              near={30 * 21 * gradient}
              far={90 * 21}
              origin={[0, 1, -1]}
            />
            <Depth
              colorA="white"
              colorB="#dc4d4d" // gradier
              alpha={1}
              mode="overlay"
              near={10 * 8 * gradient}
              far={10 * 8}
              origin={[1, -1, -1]}
            />
            <Fresnel mode="add" color="#f2c9c9" intensity={0.1} power={0.5} bias={0.05} />
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
        position={[0, 0.5, 6]}
        rotation={[0, 0, 0]}
      />
    );
  }
  function Performance() {
    useFrame(() => console.log(PerformanceMonitor.current.fps));
  }

  console.log(PerformanceMonitor);
  const { bg } = useControls({ bg: { value: '#262837', label: 'background' } });

  function DirectL() {
    const cameraRef = useRef();
    const lightRef = useRef();
    useHelper(lightRef, THREE.DirectionalLightHelper);
    return (
      <directionalLight
        castShadow
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={1}
        position={[10, 10, 10]}
        intensity={0.6}
        ref={lightRef}
        color={'#b9d5ff'}
      >
        <orthographicCamera
          ref={cameraRef}
          attach="shadow-camera"
          args={[-3, 3, 3, -3]}
        />
      </directionalLight>
    );
  }

  return (
    <div className="relative  h-[130%] w-full CanvasClipMiddle">
      <Canvas demand>
        <Stats />
        <color attach="background" args={[bg]} />

        <Effects />
        {/* <OrbitControls /> */}
        {/* <Backdrop castShadow floor={2} position={[0, -0.5, -6]} scale={[50, 15, 15]}>
          <MeshReflectorMaterial
            color="#252525"
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            opacity={2}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.25}
            roughness={1}
          />
        </Backdrop> */}
        <MainCamera />
        {/* <ambientLight intensity={0.7} /> */}
        {/* <EnvLamia /> */}
        {/* <Stars/> */}
        <Char />

        <Brush />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.491, 0]}>
          <planeGeometry args={[20, 15]} />
          <MeshReflectorMaterial
            color="#252525"
            blur={[400, 100]}
            resolution={1024}
            mixBlur={1}
            opacity={2}
            depthScale={1.1}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.25}
            roughness={1}
          />
        </mesh>
        <fog attach="fog" args={['#262837', 1, 15]} />
        {/* <DirectL/> */}
        <Coding />
        <Text
          font={'Mysteria.otf'}
          fontSize={0.6}
          position={[0, -0.44, 1.5]}
          rotation={[Math.PI * -0.4, 0, 0]}
        >
          3D
        </Text>
        {/* <Box args={[2,.5]}>
          <meshStandardMaterial color={'black'} />
        </Box> */}
        <Environment resolution={512}>
          {/* Ceiling */}
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -9]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, -3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 0]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 3]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 6]}
            scale={[10, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 4, 9]}
            scale={[10, 1, 1]}
          />
          {/* Sides */}
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-50, 2, 0]}
            scale={[100, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[50, 2, 0]}
            scale={[100, 2, 1]}
          />
          {/* Key */}
          <Lightformer
            form="ring"
            color="red"
            intensity={10}
            scale={2}
            position={[10, 5, 10]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

import {
  AdaptiveDpr,
  AdaptiveEvents,
  Backdrop,
  Box,
  Circle,
  Cylinder,
  Environment,
  Float,
  Html,
  Image,
  Lightformer,
  MeshReflectorMaterial,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  Stats,
  Text,
  useHelper,
  useTexture,
  useMatcapTexture,
  usePerformanceMonitor,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import CodingSymbol from '../Images/CodingSymbol.png';
import { Model } from '../ScrollTest2';
import { Brush } from './Brush';
import { Char } from './Char';
import Coding from './Coding';
import Effects from './Effects';
import Podium from './Podium';
import Stars from './Stars2';
import Arrow from '../Images/Arrow.svg';
import { Selection, Select } from '@react-three/postprocessing';
import round from 'lodash/round';
import Page1 from '../Page1/Page1'

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
      <Environment background frames={Infinity}>
        <mesh scale={1000} rotation={[0, -0.3, 0]}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial // Depth
            ref={ref}
            toneMapped={false}
            color={'gray'}
            side={THREE.BackSide}
          >
            <Depth
              colorA="#280d41"
              colorB="black"
              alpha={1}
              mode="normal"
              near={88 * 3.5 * gradient}
              far={88 * 3.5}
              origin={[0, 0, 0]}
            />
            <Depth
              colorA="#711e74" // changes strong
              colorB="#280d41"
              alpha={1}
              mode="add"
              near={80 * 14 * gradient}
              far={88 * 14}
              origin={[0, 1, 1]}
            />
            <Depth
              colorA="#280d41"
              colorB="#280d41"
              alpha={1}
              mode="add"
              near={30 * 21 * gradient}
              far={90 * 21}
              origin={[0, 1, -1]}
            />
            <Depth
              colorA="#ad7adc"
              colorB="#434343" // gradier
              alpha={1}
              mode="overlay"
              near={10 * 8 * gradient}
              far={10 * 8}
              origin={[1, -1, -1]}
            />
            <Fresnel mode="add" color="#280d41" intensity={0.1} power={0.5} bias={0.05} />
          </LayerMaterial>
        </mesh>
      </Environment>
    );
  }
  // function EnvLamia() {
  //   const ref = useRef();
  //   const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } });

  //   useFrame((state) => {
  //     const cos = Math.cos(state.clock.elapsedTime / 4) * 88;
  //     const sin = Math.sin(state.clock.elapsedTime / 4) * 88;
  //     ref.current.layers[0].origin.set(cos / 2, 0, 0);
  //     ref.current.layers[1].origin.set(cos, sin, cos);
  //     ref.current.layers[2].origin.set(sin, cos, sin);
  //     ref.current.layers[3].origin.set(cos, sin, cos);
  //   });
  //   return (
  //     <Environment background={'only'} frames={Infinity}>
  //       <mesh scale={1000} rotation={[0, -0.3, 0]}>
  //         <sphereGeometry args={[1, 64, 64]} />
  //         <LayerMaterial // Depth
  //           ref={ref}
  //           toneMapped={false}
  //           color={'gray'}
  //           side={THREE.BackSide}
  //         >
  //           <Depth
  //             colorA="#ff0088"
  //             colorB="black"
  //             alpha={1}
  //             mode="normal"
  //             near={88 * 3.5 * gradient}
  //             far={88 * 3.5}
  //             origin={[0, 0, 0]}
  //           />
  //           <Depth
  //             colorA="#ff0000" // changes strong
  //             colorB="#e09c35"
  //             alpha={1}
  //             mode="add"
  //             near={80 * 14 * gradient}
  //             far={88 * 14}
  //             origin={[0, 1, 1]}
  //           />
  //           <Depth
  //             colorA="green"
  //             colorB="#f6bc8d"
  //             alpha={1}
  //             mode="add"
  //             near={30 * 21 * gradient}
  //             far={90 * 21}
  //             origin={[0, 1, -1]}
  //           />
  //           <Depth
  //             colorA="white"
  //             colorB="#dc4d4d" // gradier
  //             alpha={1}
  //             mode="overlay"
  //             near={10 * 8 * gradient}
  //             far={10 * 8}
  //             origin={[1, -1, -1]}
  //           />
  //           <Fresnel mode="add" color="#f2c9c9" intensity={0.1} power={0.5} bias={0.05} />
  //         </LayerMaterial>
  //       </mesh>
  //     </Environment>
  //   );
  // }
  function MainCamera(props) {
    const ref = useRef();

    return (
      <PerspectiveCamera
        {...props}
        ref={ref}
        fov={60}
        near={1}
        far={100}
        makeDefault
        position={[0, 0.8, 6]}
        rotation={[0, 0, 0]}
      />
    );
  }

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

  function Arrows() {
    return (
      <>
        {' '}
        <Image
          name="right"
          url={Arrow}
          position={[0.35, -0.1, 3.35]}
          rotation={[Math.PI * -0.4, 0, 0]}
          scale={0.15}
          transparent
          color={'white'}
          onClick={rotateRight}
        />
        <Image
          name="left"
          url={Arrow}
          position={[-0.22, -0.1, 3.35]}
          rotation={[Math.PI * -0.4, 0, Math.PI]}
          scale={0.15}
          transparent
          color={'white'}
          onClick={rotateLeft}
        />
        <Image
          name="right"
          url={Arrow}
          position={[0.22, -0.1, 3.35]}
          rotation={[Math.PI * -0.4, 0, 0]}
          scale={0.15}
          transparent
          color={'white'}
          onClick={rotateRight}
        />
        <Image
          name="left"
          url={Arrow}
          position={[-0.35, -0.1, 3.35]}
          rotation={[Math.PI * -0.4, 0, Math.PI]}
          scale={0.15}
          transparent
          color={'white'}
          onClick={rotateLeft}
        />
      </>
    );
  }

  const [choicePos, choicePosSet] = useState(1);

  function rotateRight() {
    if (choicePos === 3) {
      return choicePosSet(1);
    } else {
      return choicePosSet((prev) => prev + 1);
    }
  }
  function rotateLeft() {
    if (choicePos === 1) {
      return choicePosSet(3);
    } else {
      return choicePosSet((prev) => prev - 1);
    }
  }

  const [hovered, hover] = useState(null);

  function Floor() {
    const [matcap2] = useMatcapTexture('161B1F_C7E0EC_90A5B3_7B8C9B');

    return (
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.491, 0]}>
        {' '}
        //Floor
        <planeGeometry args={[30, 15]} />
        <meshMatcapMaterial matcap={matcap2} />
      </mesh>
    );
  }

  const [dpr, setDpr] = useState(2);

  console.log(dpr);

  const [fp, fpSet] = useState()
  console.log(fp);
  return (
    <div className="relative  h-[130%] w-full CanvasClipMiddle">
      <Canvas
        performance={{
          current: 0.3,
          min: 0.1,
        }}
      >
        <PerformanceMonitor
        fps={90}
          bounds={({refreshrate}) => (refreshrate > 90 ? [60, 90] : [50, 60])}
          // onChange={({factor})=>fpSet(factor)}
          iterations={3}
         factor={.5}
          onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}
        ></PerformanceMonitor>
        {/* <Adaptive/>
        <AdaptiveDpr pixelated />
        <AdaptiveEvents /> */}

        <Suspense fallback={<Html center>Loading.</Html>}>
          <Stats />
          {/* <color attach="background" args={[bg]} /> */}

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
          <ambientLight intensity={7} />

          <Stars />
          <Floor />
          {/* <Effects /> */}

          <Char choicePos={choicePos} />
          <Coding choicePos={choicePos} />
          {/* <Brush choicePos={choicePos} /> */}

          <fog attach="fog" args={['#140a1f', 1, 15]} />
          <Arrows />
          {/* <DirectL/> */}

          {/* <Box args={[2,.5]}>
          <meshStandardMaterial color={'black'} />
        </Box> */}
          <EnvLamia />
          {/* <Environment resolution={512}>
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -9]}
              scale={[10, 1, 1]}
              color={'#9e8eb4'}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -6]}
              scale={[10, 1, 1]}
              color={'#583786'}
            />
            <Lightformer
              intensity={2}
              rotation-x={Math.PI / 2}
              position={[0, 4, -3]}
              scale={[10, 1, 1]}
              color={'#cacaca'}
            />
          </Environment> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

import { Box } from '@react-three/drei';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  GodRays,
  LUT,
  Outline,
  SelectiveBloom,
  SSR,
  Vignette,
} from '@react-three/postprocessing';
import { useControls } from 'leva';
import { BlurPass, KernelSize, LUTCubeLoader, Resizer } from 'postprocessing';
import { useEffect, useRef, useState } from 'react';
import { AmbientLight } from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
export function Effects() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube');

  function Bloomer() {
    const bloomerRef = useRef();
    console.log(bloomerRef);

    //   useFrame(()=> bloomRef.current.blendMode.blendFunction = Number(1)  )
    return (
      <>
        {' '}
        <ambientLight ref={bloomerRef} intensity={3} />{' '}
        <Bloom
          light={bloomerRef}
          mipmapBlur
          ref={bloomerRef}
          luminanceThreshold={0.1}
          luminanceSmoothing={0}
          intensity={0.3}
          blendFunction={0}
        />
      </>
    );
  }

  return (
    <>
      {/* // autoClear={false} */}
      <EffectComposer disableNormalPass>
        {/* <SSR /> */}{' '}
        <Bloom
          luminanceThreshold={0.1}
          mipmapBlur
          luminanceSmoothing={0}
          intensity={0.7}
          blendFunction={0}
        />
        {/* <Outline blur edgeStrength={100} /> */}
        {/* <LUT lut={texture} /> */}
        {/* <mesh>
          <boxBufferGeometry args={[10,10]} emissiveIntensity={20} toneMapped={false}/>
          <meshStandardMaterial/>
          </mesh> */}
        {/* <Blooming/> */}
        {/* <Bloomer/> */}
      </EffectComposer>
    </>
  );
}

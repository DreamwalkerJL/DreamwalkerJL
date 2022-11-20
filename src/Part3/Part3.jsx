import {
  Html,
  useProgress,
} from '@react-three/drei';
import { Canvas, useFrame, } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Screen5 } from './Screen5';
import HUD from './HUD';
import LoadingIcon from '../Images/Loading.json';
import { Player } from '@lottiefiles/react-lottie-player';
export default function Part3() {
  const divRef = useRef();
  const canvasRef = useRef();

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();

    return (
      <Html center>
        <div className="relative flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black text-center  font-Dreamscape text-4xl text-white">
          <div className="relative bottom-[5vw]">
            <Player
              src={LoadingIcon}
              speed={1.5}
              className="relative h-[20vw] w-[20vw]"
              autoplay
              loop
              keepLastFrame
            />
            <p>{Math.floor(progress)} % loaded</p>
          </div>
        </div>
      </Html>
    );
  }
  return (
    <div ref={divRef} className="absolute h-full w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 20 }} ref={canvasRef} color="blue">
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <HUD />
          <color attach="background" args={['#000000']} />
          <Screen5 />
        </Suspense>
      </Canvas>
    </div>
  );
}

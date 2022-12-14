import {
  Cloud,
  Environment,
  Float,
  Html,
  PerspectiveCamera,
  Text,
  useProgress,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Depth, Fresnel, LayerMaterial } from 'lamina';

import { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';

import { Moon } from '../3D/Moon';
import { Effects } from './Effects';
import { Stars } from './Stars';
import { TextDW } from './TextDW';
import Trailer from './Trail';
import MoonLoading from '../Images/MoonLoading.png';
import { useNavigate } from 'react-router-dom';
export default function Page1() {
  const navigate = useNavigate();

  function EnvLamia() {
    const ref = useRef();
    const gradient = 0.7;

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

  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    const [isFailed, isFailedSet] = useState(false);
    useFrame((delta) => {
      delta.clock.elapsedTime > 5 && isFailedSet(true);
    });

    return (
      <Html center>
        <div className="font-Dreamscape relative flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-black  text-center text-4xl text-white">
          <div className="relative bottom-[5vw]">
            <img src={MoonLoading} />
            {isFailed ? (
              <p>Loading failed - Please refresh the browser</p>
            ) : (
              <p>{Math.floor(progress)} % loaded</p>
            )}
          </div>
        </div>
      </Html>
    );
  }

  return (
    <div className="absolute h-full w-full ">
      <Canvas>
        <Suspense fallback={<Loader />}>
          <MainCamera />
          <ambientLight />
          <Stars />
          <group>
            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={0} // XYZ rotation intensity, defaults to 1
              floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[1, 6]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <Cloud
                speed={-0.01}
                segments={80}
                width={20}
                depth={1}
                position={[10, -25, 0]}
              />
            </Float>
            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={0} // XYZ rotation intensity, defaults to 1
              floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[1, 6]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <Cloud
                speed={-0.01}
                segments={80}
                width={20}
                depth={1}
                position={[-10, -25, 0]}
              />
            </Float>
          </group>
          <Trailer />
          <Moon />
          <Effects />
          <Text
            font={'Mysteria.otf'}
            fontSize={6.180469715698393}
            position={[-133, 40, 0]}
            onClick={() => navigate('/')}
          >
            EXIT
          </Text>
          <Text font={'Namita.otf'} fontSize={6.180469715698393} position={[0, -45, 0]}>
            by Joshua Lim
          </Text>
          <TextDW />
          <EnvLamia />
        </Suspense>
      </Canvas>
    </div>
  );
}

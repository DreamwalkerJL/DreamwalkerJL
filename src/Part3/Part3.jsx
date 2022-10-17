import {
  Box,
  CameraShake,
  Environment,
  Html,
  Image,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  ScrollControls,
  Stats,
  useProgress,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useControls } from 'leva';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Char90 from './Char90';

import { Screen5 } from './Screen5';
import Title1 from '../Images/Title 11.json';
import TitlePic from '../Images/Title1.png'
import Effects from './Effects';
import HUD from './HUD';
import { useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
export default function Part3() {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });
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

  function MainCamera(props) {
    const ref = useRef();

    useFrame(({ mouse, delta, time }) => {
      const x = (mouse.x * window.innerWidth) / 2000;
      const y = (mouse.y * window.innerHeight) / 2000;
      //   console.log(viewport.height)
      // console.log(window.innerHeight)
      console.log(x, y);

      // ref.current.position.set(x,y,5)
      ref.current.rotation.set(y, -x, 0);
    });

    return (
      <group>
        <PerspectiveCamera
          {...props}
          ref={ref}
          fov={30}
          near={0.01}
          far={100}
          makeDefault
          position={[0, 0, 2]}
          rotation={[0, 0, 0]}
        />
        <CameraShake
          maxYaw={0.01}
          maxPitch={0.01}
          maxRoll={0.01}
          yawFrequency={0.5}
          pitchFrequency={0.5}
          rollFrequency={0.4}
        />
      </group>
    );
  }

  function Title() {
    const defaultOptions2 = {
      loop: false,
      autoplay: true,
      animationData: Title1,
   
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
// useFrame(()=> {
//   scrollYProgress.current === 0 ? lottieRef.current.anim.isPaused = false : lottieRef.current.anim.isPaused = true
// })
    const lottieRef = useRef();

const imgRef = useRef()


function imgSize() {
 return isMort ? [2.5,1.25,1] : [2,1,1] 
}
    return (
      <group>
        <Plane args={[0.4, 0.3]} visible={false} position={[0, 0, -1.2]}>
          <Html center position={[0, 0, -2]} scale={0.015} className="pointer-events-none">
            {/* <Lottie options={defaultOptions2} height={720} width={1500} ref={lottieRef} isStopped={true}/> */}
          </Html>
          <meshBasicMaterial visible={false} />
        </Plane>
        <Image ref={imgRef} scale={imgSize()} position={[0,0,-.5]} url={TitlePic} transparent opacity={0}/>
      </group>
    );
  }

  function BGEdge() {
    return (
      <group>
        <Box args={[4, 0.6, 1.5]} position={[0, 1.2, 0.2]}>
          <meshStandardMaterial color={'#000000'} />
        </Box>
        <Box args={[4, 0.6, 1]} position={[0, -1.2, 0.2]}>
          <meshStandardMaterial color={'#000000'} />
        </Box>
      </group>
    );
  }
  const divRef = useRef()
  const canvasRef = useRef()



  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }
  return (
    <div ref={divRef} className='absolute w-full h-full'>
      <Canvas camera={{ position: [0, 0, 4], fov: 20 }} ref={canvasRef} color='blue'>

        <Stats />
        {/* <Char90/> */}
        <ambientLight intensity={0.5} />
        {/* <OrbitControls/> */}
        <HUD />

        <color attach="background" args={['#000000']} />
        {/* <CyberBackground3/> */}
        {/* <EnvLamia/> */}
     
        {/* <Effects/> */}

        <Screen5 />

      </Canvas>
    </div>
  );
}

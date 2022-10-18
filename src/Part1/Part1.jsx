import { Box, Html, Image, Plane } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { Screen5 } from './Screen5';
import TitlePic from '../Images/Title1.png';
import HUD from './HUD';
import { useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
export default function Part1() {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });

  function Title() {
    const imgRef = useRef();

    useFrame(() => {
      imgRef.current.material.opacity < 1 && (imgRef.current.material.opacity += 0.01);
    });
    function imgSize() {
      return isMort ? [2.5, 1.25, 1] : [2, 1, 1];
    }
    return (
      <group>
        <Plane args={[0.4, 0.3]} visible={false} position={[0, 0, -1.2]}>
          <Html
            center
            position={[0, 0, -2]}
            scale={0.015}
            className="pointer-events-none"
          >
            {/* <Lottie options={defaultOptions2} height={720} width={1500} ref={lottieRef} isStopped={true}/> */}
          </Html>
          <meshBasicMaterial visible={false} />
        </Plane>
        <Image
          ref={imgRef}
          scale={imgSize()}
          position={[0, 0, -0.5]}
          url={TitlePic}
          transparent
          opacity={0}
        />
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

  const divRef = useRef();
  const canvasRef = useRef();
  const [dpr, dprSet] = useState(0.1);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['end end', 'end start'],
  });

  function CanvasDPR() {
    useFrame(() => {
      scrollYProgress.current > 0.99 ? dprSet(0.01) : dprSet(1);
    });
  }

  return (
    <div ref={divRef} className=" h-full w-full">
      <Canvas dpr={dpr} camera={{ position: [0, 0, 4], fov: 20 }} ref={canvasRef}>
        <CanvasDPR />
        <ambientLight intensity={0.5} />
        <HUD />
        <Title />
        <color attach="background" args={['#000000']} />
        <BGEdge />
        <Screen5 />
      </Canvas>
    </div>
  );
}

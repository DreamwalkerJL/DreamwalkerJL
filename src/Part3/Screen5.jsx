/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Environment,
  Html,
  Lightformer,
  Plane,
  useGLTF,
  useMatcapTexture,
  useTexture,
  useVideoTexture,
  Image,
  Loader,
  useProgress,
} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import Lottie from 'react-lottie';
import Title1 from '../Images/Title 11.json';
import { useControls } from 'leva';
import { useScroll } from 'framer-motion';
import CyberVideo from '../Images/AreaScreenVideo.mp4';
import { suspend } from 'suspend-react';
import * as THREE from 'three';
import XImg from '../Images/X.jpg'
import { Gallery } from './Gallery';
import Dirt from '../Images/ScreenBackgroundDirt.png';
import AreaVideo from '../Images/Area.mp4';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import ImgGallery from './ImgGallery';

export function Screen5(props) {
  const { nodes, materials } = useGLTF('/Screen5.glb');
  const { scrollYProgress } = useScroll();

  const Area = useVideoTexture(AreaVideo);

  const ScreenVideo = useVideoTexture(CyberVideo);

  const meshRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: Title1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [imgState, imgStateSet] = useState(1);
  const [testrr, testrrSet] = useState(0)


  function testrrFunc() {
    testrr < 15 && testrrSet(prev => prev + 1)
    testrr === 15 && testrrSet(1)

  }

  function rightButton() {
    imgState < 15 && imgStateSet(prev => prev + 1);
    imgState === 15 && imgStateSet(1);

  }
  function leftButton() {
    imgState > 1 && imgStateSet(prev => prev - 1);
    imgState === 1 && imgStateSet(15);
  }


  const ImgDisplay = Gallery[0][imgState];
  const ImgFullDisplay = Gallery[1][imgState];

  const [onFullDisplay, onFullDisplaySet] = useState(false);

  function clickDisplay() {
    onFullDisplaySet((prev) => !prev);
  }

const XTexture = useTexture(XImg)

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}




  return (

    <group scale={1}>
      <Plane args={[0.16, 0.16]} position={[-0.595, 0.15, 0.005]} onClick={leftButton}>
        <meshBasicMaterial visible={false} />
      </Plane>
      <Plane args={[0.16, 0.16]} position={[0.606, 0.15, 0.005]} onClick={rightButton} >
        <meshBasicMaterial visible={false} />
      </Plane>
      <Image
        url={Dirt}
        transparent
        position={[0.006, 0.15, 0.003]}
        scale={[1.5, 0.6]}
        opacity={1}
        toneMapped={false}
      />

      <ImgGallery ImgState={imgState} onFullDisplay={onFullDisplay} clickDisplay={clickDisplay}/>

      <Plane position={onFullDisplay ? [-4, -4, -4] : [0.006, 0.15, 0.006]} visible={false} args={[0.97, 0.6]} onClick={clickDisplay}/>
  


     <Plane args={[.15,.15]} position={onFullDisplay ? [.58, .525, 0.009] : [-4, -4, -4]} onClick={clickDisplay}>
      <meshBasicMaterial map={XTexture} toneMapped={false}/>
     </Plane>


      <Plane args={[4, 2.1]}>
        <meshStandardMaterial map={Area} />
      </Plane>
      <Plane
        args={[1.499, 0.598]}
        position={[0.0058, 0.149, 0.001]}
        rotation={[0,0,0]}
      >
        <meshStandardMaterial map={ScreenVideo} side={THREE.FrontSide}  opacity={1} transparent />
      </Plane>

      {/* <Environment>
            <Lightformer
                form="rect" // circle | ring | rect (optional, default = rect)
                intensity={2} // power level (optional = 1)
                color="#acff9b" // (optional = white)
                scale={[1, 1]} // Scale it any way you prefer (optional = [1, 1])
                position={[0,0,1]} rotation={[0,Math.PI,0]}
               
                />
                </Environment> */}
      <ambientLight intensity={0.5} />
    </group>

  );
}
useGLTF.preload('/Screen5.glb');
import { Html, Plane, Image } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import HUDMain from '../Images/HUDMain.json';
import HUDMain2 from '../Images/HUDMain2.json';
import Lottie from 'react-lottie';
import Title1 from '../Images/Title 11.json';
import HUDMainPic from '../Images/HUDMain.png';
import { useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ZoomIn from '../Images/ZoomIn.png';
import ZoomOut from '../Images/ZoomOut.png';
export default function HUD() {
  function Rig() {
    const BPlg = useMediaQuery({
      query: '(min-width: 976px)',
    });
    const lg = 976;
    const WW = window.innerWidth;

    const [vec] = useState(() => new THREE.Vector3());
    const { camera, mouse } = useThree();
    const { scrollYProgress } = useScroll();
    const [vec2] = useState(() => new THREE.Vector3());
    const imgRef = useRef();
    const lottieRef = useRef();
    const planeRef = useRef();

    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: HUDMain,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const lol = 50;
    useFrame(({ mouse, delta, clock }) => {
   
        camera.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.1, 3.7), 0.005)


        camera.rotation.set(mouse.y * 0.05, -mouse.x * 0.1, 0)

      // planeRef.current.position.copy(camera.position);
      // planeRef.current.quaternion.copy(camera.quaternion);
      // planeRef.current.translateZ(-2);
      // clock.elapsedTime > 2 && (lottieRef.current.anim.isStopped = true)
      // imgRef.current.material.opacity < 1 && clock.elapsedTime > 3 && scrollYProgress.current === 0 &&  BPlg && (imgRef.current.material.opacity += 0.03)
      // scrollYProgress.current > 0 && imgRef.current.material.opacity > 0.001 && (imgRef.current.material.opacity -= 0.02 )
    });

    const [ZoomState, ZoomStateSet] = useState(false);

    function ZoomClick() {
      ZoomStateSet((prev) => !prev);
      console.log(ZoomState);
    }
    return (
      <>
      {/* <Image url={ZoomState ? ZoomOut : ZoomIn} ref={imgRef} scale={[.3,.2]} position={[.89,-.108,0.01]} transparent opacity={.9} toneMapped={true} onClick={ZoomClick}/> */}
        {/* <Plane args={[1.45, 4]} ref={planeRef} visible={false} /> */}
      </>
    );
  }

  return <Rig />;
}

import { Html, Plane, Image } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import HUDMain from '../Images/HUDMain.json'
import HUDMain2 from '../Images/HUDMain2.json'
import Lottie from 'react-lottie';
import Title1 from '../Images/Title 11.json';
import HUDMainPic from '../Images/HUDMain.png'
import { useScroll } from 'framer-motion';
export default function HUD() {

    function Rig() {
      const sm = 480
      const WW = window.innerWidth

        const [vec] = useState(() => new THREE.Vector3());
        const { camera, mouse } = useThree();
        const {scrollYProgress} = useScroll()
        const [vec2] = useState(() => new THREE.Vector3());
        const imgRef = useRef()
        const lottieRef = useRef()
        const planeRef = useRef()

        const defaultOptions = {
            loop: false,
            autoplay: true,
            animationData: HUDMain,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          };

        
          const lol = 50
        useFrame(({ mouse, delta, clock }) => {
          
          scrollYProgress.current === 0 && WW > sm ? camera.position.lerp(vec.set(mouse.x * .1, mouse.y * .1, 3), 0.01) :  camera.position.lerp(vec.set(0,0,6), 0.01)
          scrollYProgress.current === 0 && WW > sm ? camera.rotation.set(mouse.y *.1, -mouse.x *.2, 0) : camera.rotation.set(0,0,0)
          planeRef.current.position.copy(camera.position);
          planeRef.current.quaternion.copy(camera.quaternion);
          planeRef.current.translateZ(-2);
          // clock.elapsedTime > 2 && (lottieRef.current.anim.isStopped = true)
          imgRef.current.material.opacity < 1 && clock.elapsedTime > 3 && scrollYProgress.current === 0 &&  WW > sm && (imgRef.current.material.opacity += 0.03)
          scrollYProgress.current > 0 && imgRef.current.material.opacity > 0.001 && (imgRef.current.material.opacity -= 0.02 )
      
        });
    return <Plane args={[1.45,4]} ref={planeRef}> <meshStandardMaterial visible={false} />

          {/* <Html

 center
            position={[0, 0, 1]}
            scale={.1}
       
          >

            <Lottie options={defaultOptions} height={'110vh'} width={'110vw'} ref={lottieRef}/>
 


          </Html> */}
          <Image url={HUDMainPic} ref={imgRef} scale={[1.59,1,1]} transparent opacity={0}/>
</Plane>
      }

  return (
 
<Rig/>

  )
}

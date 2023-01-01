import { Plane } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
export default function HUD() {
  function Rig() {
    const isMort = useMediaQuery({
      query: '(max-width: 976px)',
    });
    const BPlg = useMediaQuery({
      query: '(min-width: 976px)',
    });

    const [vec] = useState(() => new THREE.Vector3());
    const { camera } = useThree();
    const { scrollYProgress } = useScroll();
    const planeRef = useRef();
    const [countPos, setCountPos] = useState(0);
    const [countRot, setCountRot] = useState(0);

    const incrementCountPos = () => {
      if (scrollYProgress.current === 0 && countPos < 0.1) {
        return setCountPos(countPos + 0.0005);
      } else if (scrollYProgress.current === 0 && countPos < 0.2) {
        setCountPos(0.1);
      } else {
        setCountPos(0);
      }
    };

    const incrementCountRot = () => {
      if (scrollYProgress.current === 0 && countRot < 0.2) {
        return setCountRot(countRot + 0.0005);
      } else if (scrollYProgress.current === 0 && countRot < 0.3) {
        setCountRot(0.2);
      } else {
        setCountRot(0);
      }
    };

    useFrame(({ mouse, delta, clock }) => {
      scrollYProgress.current < 0.1 && incrementCountPos();
      scrollYProgress.current < 0.1 && incrementCountRot();
      scrollYProgress.current < 1 &&
        isMort &&
        camera.position.lerp(vec.set(mouse.x * 1.25, mouse.y * 0.4, 5), 0.02);
      scrollYProgress.current === 0 && BPlg
        ? camera.position.lerp(vec.set(mouse.x * countPos, mouse.y * countPos, 3), 0.01)
        : camera.position.lerp(vec.set(0, 0, 4.7), 0.01);
      scrollYProgress.current === 0 && BPlg
        ? camera.rotation.set(mouse.y * countPos, -mouse.x * countRot, 0)
        : camera.rotation.set(0, 0, 0);
      planeRef.current.position.copy(camera.position);
      planeRef.current.quaternion.copy(camera.quaternion);
      planeRef.current.translateZ(-2);
    });
    return (
      <Plane args={[1.45, 4]} ref={planeRef}>
        <meshStandardMaterial visible={false} />
      </Plane>
    );
  }

  return <Rig />;
}

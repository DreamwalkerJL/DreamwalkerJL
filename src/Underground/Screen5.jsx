import { useState } from 'react';
import { Plane, useGLTF, useTexture, useVideoTexture, Image } from '@react-three/drei';
import CyberVideo from '../Images/AreaScreenVideo.mp4';
import * as THREE from 'three';
import Dirt from '../Images/ScreenBackgroundDirt.png';
import ImgGallery from './ImgGallery';
import ExitGallery from '../Images/ExitGallery.png';
import { useNavigate } from 'react-router-dom';
import AreaImg from '../Images/Area.jpg';

export function Screen5() {
  const ScreenVideo = useVideoTexture(CyberVideo);
  const [imgState, imgStateSet] = useState(1);
  const [onFullDisplay, onFullDisplaySet] = useState(false);

  const AreaImgTexture = useTexture(AreaImg);
  const navigate = useNavigate();

  function rightButton() {
    imgState < 15 && imgStateSet((prev) => prev + 1);
    imgState === 15 && imgStateSet(1);
  }

  function leftButton() {
    imgState > 1 && imgStateSet((prev) => prev - 1);
    imgState === 1 && imgStateSet(15);
  }

  function clickDisplay() {
    onFullDisplaySet((prev) => !prev);
  }

  return (
    <group scale={1}>
      <Plane args={[0.16, 0.16]} position={[-0.595, 0.15, 0.005]} onClick={leftButton}>
        <meshBasicMaterial visible={false} />
      </Plane>
      <Plane args={[0.16, 0.16]} position={[0.606, 0.15, 0.005]} onClick={rightButton}>
        <meshBasicMaterial visible={false} />
      </Plane>
      <Image
        url={ExitGallery}
        scale={[0.3, 0.2]}
        position={[-0.621, 0.55, 0.001]}
        transparent
        onClick={() => navigate('/')}
      />
      <Image
        url={Dirt}
        transparent
        position={[0.006, 0.15, 0.003]}
        scale={[1.5, 0.6]}
        opacity={1}
        toneMapped={false}
      />
      <ImgGallery
        ImgState={imgState}
        onFullDisplay={onFullDisplay}
        clickDisplay={clickDisplay}
      />
      <Plane args={[4, 2.1]}>
        <meshStandardMaterial map={AreaImgTexture} />
      </Plane>
      <Plane args={[1.499, 0.598]} position={[0.0058, 0.149, 0.001]} rotation={[0, 0, 0]}>
        <meshStandardMaterial
          map={ScreenVideo}
          side={THREE.FrontSide}
          opacity={1}
          transparent
        />
      </Plane>
      <ambientLight intensity={1} />
    </group>
  );
}
useGLTF.preload('/Screen5.glb');

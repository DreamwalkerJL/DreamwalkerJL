import { Image } from '@react-three/drei';
import React from 'react';
import { Gallery } from './Gallery';
export default function ImgGallery({ImgState, onFullDisplay, clickDisplay}) {

  return (
    <>
    <group>
      <Image
        url={Gallery[0][1]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 1 ? true : false}
      />
      <Image
        url={Gallery[0][2]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 2 ? true : false}
      />
      <Image
        url={Gallery[0][3]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 3 ? true : false}
      />
      <Image
        url={Gallery[0][4]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 4 ? true : false}
      />
      <Image
        url={Gallery[0][5]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 5 ? true : false}
      />
      <Image
        url={Gallery[0][6]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 6 ? true : false}
      />
      <Image
        url={Gallery[0][7]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 7 ? true : false}
      />
      <Image
        url={Gallery[0][8]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 8 ? true : false}
      />
      <Image
        url={Gallery[0][9]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 9 ? true : false}
      />
      <Image
        url={Gallery[0][10]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 10 ? true : false}
      />
      <Image
        url={Gallery[0][11]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 11 ? true : false}
      />
      <Image
        url={Gallery[0][12]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 12 ? true : false}
      />
      <Image
        url={Gallery[0][13]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 13 ? true : false}
      />
      <Image
        url={Gallery[0][14]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 14 ? true : false}
      />
      <Image
        url={Gallery[0][15]}
        transparent
        toneMapped={false}
        position={[0.006, 0.15, 0.002]}
        scale={[1.5, 0.6]}
        opacity={1}
        visible={ImgState === 15 ? true : false}
      />
    </group>
    <group>
    <Image
          url={Gallery[1][1]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 1 ? true: false}
        />
    <Image
          url={Gallery[1][2]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 2 ? true: false}
        />
    <Image
          url={Gallery[1][3]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 3 ? true: false}
        />
    <Image
          url={Gallery[1][4]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 4 ? true: false}
        />
    <Image
          url={Gallery[1][5]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 5 ? true: false}
        />
    <Image
          url={Gallery[1][6]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 6 ? true: false}
        />
    <Image
          url={Gallery[1][7]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 7 ? true: false}
        />
    <Image
          url={Gallery[1][8]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 8 ? true: false}
        />
    <Image
          url={Gallery[1][9]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 9 ? true: false}
        />
    <Image
          url={Gallery[1][10]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 10 ? true: false}
        />
    <Image
          url={Gallery[1][11]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 11 ? true: false}
        />
    <Image
          url={Gallery[1][12]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 12 ? true: false}
        />
    <Image
          url={Gallery[1][13]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 13 ? true: false}
        />
    <Image
          url={Gallery[1][14]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 14 ? true: false}
        />
    <Image
          url={Gallery[1][15]}
          position={onFullDisplay ? [0.006, .1, 0.008] : [-4, -4, -4]}
          scale={1}
       
          opacity={1}

          toneMapped={false}
          onClick={clickDisplay}
          visible={onFullDisplay && ImgState === 15 ? true: false}
        />
    </group>
    </>
  );
}

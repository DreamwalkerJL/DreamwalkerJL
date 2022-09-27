import { Box } from '@react-three/drei';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  GodRays,
  LUT,
  Outline,
  SelectiveBloom,
  SSR,
  Vignette,
} from '@react-three/postprocessing';

import { LUTCubeLoader } from 'postprocessing';

export function Effects() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube');



  return (
    <>
      {/* // autoClear={false} */}
      <EffectComposer  >

        <Bloom
          luminanceThreshold={0.1}
          mipmapBlur
          luminanceSmoothing={0}
          intensity={0.7}
          blendFunction={0}
        />

        <LUT lut={texture} />

      </EffectComposer>
    </>
  );
}

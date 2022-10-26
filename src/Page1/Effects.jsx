import { Bloom, EffectComposer } from '@react-three/postprocessing';

export function Effects() {
  return (
    <>
      <EffectComposer disableNormalPass>
        <Bloom
          luminanceThreshold={0.1}
          mipmapBlur
          luminanceSmoothing={0}
          intensity={0.7}
          blendFunction={0}
        />
      </EffectComposer>
    </>
  );
}

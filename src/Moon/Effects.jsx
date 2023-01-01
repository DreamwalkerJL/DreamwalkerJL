import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { useMediaQuery } from 'react-responsive';

export function Effects() {
  const BPlg = useMediaQuery({
    query: '(min-width: 976px)',
  });

  return (
    <>
      <EffectComposer disableNormalPass>
        {BPlg && (
          <Bloom
            luminanceThreshold={0.1}
            mipmapBlur
            luminanceSmoothing={0}
            intensity={1}
            blendFunction={0}
          />
        )}
      </EffectComposer>
    </>
  );
}

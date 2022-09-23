import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from '@react-three/postprocessing';
import { BlurPass } from 'postprocessing';
export default function Effects() {
  return (
    <EffectComposer>
      {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
      <Bloom
        luminanceThreshold={0}
        luminanceSmoothing={0.9}
        height={300}
        blurPass={new BlurPass()}
      />
      <Noise opacity={0.03} />

      {/* <Vignette eskil={false} offset={0.1} darkness={1.5} blendFunction={1}/> */}
    </EffectComposer>
  );
}

import { Box } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Outline,
  Vignette,
  Select,
  Selection,
  LUT,
} from '@react-three/postprocessing';
import { LUTCubeLoader } from 'postprocessing';
import { BlurPass } from 'postprocessing';
export default function Effects() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube');
  return (
    <group>  
      <EffectComposer  disableNormalPass autoClear multisampling={2} >
        {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
        {/* <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={1}
      
          intensity={2}
     
        /> */}
          <LUT lut={texture} />
        <Noise opacity={0.0} />
        {/* <Outline blur visibleEdgeColor="red"  edgeStrength={100} width={500}                 xRay
          
                pulseSpeed={0.0}
            
                hiddenEdgeColor={0x22090a}/> */}
      

        <Vignette eskil={false} offset={0.1} darkness={.75} blendFunction={1}/>
      </EffectComposer>
      </group>
  );
}

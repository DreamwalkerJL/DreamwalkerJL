import { Text, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Depth, Fresnel, LayerMaterial } from 'lamina';
import { useRef } from 'react';
export function TextDW(props) {
  const ref = useRef();
  const gradient = 0.2;

  useFrame((state) => {
    const cos = Math.cos(state.clock.elapsedTime) * 20;
    const sin = Math.sin(state.clock.elapsedTime) * 20;
    ref.current.layers[0].origin.set(cos / 2, 0, 0);
    ref.current.layers[1].origin.set(cos, sin, cos);
    ref.current.layers[2].origin.set(sin, cos, sin);
  });

  return (
    <group {...props} dispose={null} scale={1}>
      <Text font={'Mysteria.otf'} fontSize={10} position={[0, 15, 0]}>
        Dreamwalker
        <LayerMaterial ref={ref} toneMapped={false}>
          <Depth
            colorA="#ff0080"
            colorB="black"
            alpha={1}
            mode="normal"
            near={4 * 3.5 * gradient}
            far={4 * 3.5}
            origin={[0, 0, 0]}
          />
          <Depth
            colorA="blue"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={4 * 14 * gradient}
            far={4 * 14}
            origin={[0, 1, 1]}
          />
          <Depth
            colorA="green"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={4 * 21 * gradient}
            far={4 * 21}
            origin={[0, 1, -1]}
          />
          <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
        </LayerMaterial>
      </Text>
    </group>
  );
}

useGLTF.preload('/Moon.gltf');

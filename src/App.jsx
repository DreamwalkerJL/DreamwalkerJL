import './App.css';

import {
  Box,
  Decal,
  PerformanceMonitor,
  Plane,
  RenderTexture,
  Stats,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';

import NightSky from '../assets/NightSky.json';
import Lab from './Lab/Lab';
import { Example } from './Nav/Example';
import Nav from './Nav/Nav';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Part1 from './Part1/Part1';
import HUD from './Part1/HUD';
import { motion, useScroll } from 'framer-motion';
import Part2 from './Part2/Part2';

function App() {
  const { scrollYProgress } = useScroll();
  const frameVariant = {
    offscreen: {
      scale: 1,

      transition: {
        type: 'linear',

        duration: 0,
      },
    },

    onscreen: {
      scale: 1,

      transition: {
        type: 'linear',

        duration: 0,
      },
    },
  };

  return (
    <div>
      <div className="absolute h-full w-full">
        <div class='relative h-full w-full'>
          <Part1 />
        </div>

        <div className="part2BG">
          <Part2  />
        </div>
        <div className="bg-black relative h-full w-full"></div>
      </div>

      <div className="">
        {/* <Nav /> */}
        <Example />
      </div>
    </div>
  );
}

export default App;

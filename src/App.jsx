import './App.css';

import {
  Box,
  Decal,
  PerformanceMonitor,
  Plane,
  RenderTexture,
  Stats,
  useProgress,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
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
import Part3 from './Part3/Part3';
import ImgGalleryMobile from './Part3/ImgGalleryMobile'
import { useMediaQuery } from 'react-responsive';
import AboutMe from './AboutMe/AboutMe';

function App() {

  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });
  const BPsm = useMediaQuery({
    query: '(min-width: 480px)',
  });
  const BPmd = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const BPlg = useMediaQuery({
    query: '(min-width: 976px)',
  });
  const BPxl = useMediaQuery({
    query: '(min-width: 1440px)',
  });
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
        <div class="relative h-full w-full">
          <Part1 />
        </div>
        <AboutMe/>
        <div className="part2BG relative flex h-auto w-[100] flex-row   lg:py-[5vw]">
          <Part2 />
        </div>
        {/* <div className="relative h-full w-full bg-black">
          <Part3 />
        </div> */}
      {isMort && <ImgGalleryMobile/>}
     
      </div>

      <div className="">
        {/* <Nav /> */}
        {/* <Example /> */}

      </div>

    </div>
  );
}

export default App;

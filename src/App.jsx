import './App.css';

import { PerformanceMonitor } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import Lottie from 'react-lottie';

import NightSky from '../assets/NightSky.json';
import Lab from './Lab/Lab';
import { Example } from './Nav/Example';
import Nav from './Nav/Nav';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';

function App() {
  return (
    <div>
      <div className="absolute h-full w-full  ">
        <Page1 />

        <Page2 />

        {/* <Lab/> */}
        {/* <object data={NightSky} type=""></object> */}
      </div>
      <div className="">
        {/* <Nav /> */}
        <Example />
      </div>
    </div>
  );
}

export default App;

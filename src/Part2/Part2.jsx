import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import SkillFrame3D from '../Images/SkillFrame3D.json';
import SkillFrameDesign from '../Images/SkillFrameDesign.json';
import SkillFrameCoding from '../Images/SkillFrameCoding.json';
import SkillFrameCodingPic from '../Images/SkillFrameCoding.png';

import { motion, useScroll, useInView } from 'framer-motion';
import { NoToneMapping } from 'three';
import SkillsTitle from '../Images/SkillsTitle.json';
export default function () {
  const WW = window.innerWidth;
  const size = {
    sm: 480,
    md: 768,
    lg: 976,
    xl: 1440,
  };
  const divRef = useRef();
  const motionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'end end'],
  });

  function Title() {
    const lottieRef = useRef();
    const options = {
      loop: false,
      autoplay: true,

      firstFrame: 300,
      animationData: SkillsTitle,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const titleVar = {
      offscreen: {
        y: 100,
        opacity: 0,
      },
      onscreen: {
        y: 50,
        opacity: 1,
        transition: {
          type: 'linear',

          duration: 0,
        },
      },
    };

    useEffect(() => {
      lottieRef.current.anim.isPaused = true;
      scrollYProgress.onChange((latest) => {
        latest > 0.15 && (lottieRef.current.anim.isPaused = false);
      });
    }, []);

    return (
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={titleVar}
        viewport={{ once: true, margin: '0px 0px -500px 0px' }}
        ref={motionRef}
        className="relative h-1/4 w-full flex"
      >
        <Lottie options={options} height={450} width={800} ref={lottieRef} />
      </motion.div>
    );
  }

  function Frame() {
    const lottieRef1 = useRef();
    const lottieRef2 = useRef();
    const lottieRef3 = useRef();
    const divRef = useRef();

    const frameVar = {
      offscreen: {
        y: 100,
        opacity: 0,
      },
      onscreen: {
        y: 50,
        opacity: 1,
        transition: {
          type: 'linear',
          duration: 1.5,
        },
      },
    };

    const SF3D = {
      loop: false,
      autoplay: true,
      firstFrame: 300,
      animationData: SkillFrame3D,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const SFCoding = {
      loop: false,
      autoplay: true,
      animationData: SkillFrameCoding,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    const SFDesign = {
      loop: false,
      autoplay: true,
      animationData: SkillFrameDesign,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    useEffect(() => {
      scrollYProgress.onChange((latest) => {
        lottieRef1.current.anim.isPaused = true;
        latest > 0.22 && (lottieRef1.current.anim.isPaused = false);
        console.log(latest);
      });
    }, []);

    return (
      <div className="relative h-full w-full">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={frameVar}
          viewport={{ once: true, margin: '0px 0px -500px 0px' }}
          ref={motionRef}
          className="relative h-full w-full flex"
        >
          <Lottie options={SF3D} height={450} width={400} ref={lottieRef1} />
          <Lottie options={SFDesign} height={450} width={400} ref={lottieRef2} />
          <Lottie options={SFCoding} height={450} width={400} ref={lottieRef3} />

          {/* <img src={SkillFrameCodingPic} height={250} width={200}/>
          <img src={SkillFrameCodingPic} height={250} width={200}/> */}
          {/* <Lottie options={SFCoding} height={250} width={200} ref={lottieRef3} /> */}
        </motion.div>
      </div>
    );
  }
  return (
    <div className="relative h-full w-full" ref={divRef}>
      <Title />
      <Frame />
    </div>
  );
}

import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import AboutMeTitle from '../Images/AboutMeTitle.json';
import HealthySVG from '../Images/AboutMeSVG/Healthy.json';
import NerdSVG from '../Images/AboutMeSVG/Nerd.json';
import TechnologySVG from '../Images/AboutMeSVG/Technology.json';
import HealthyMobileSVG from '../Images/AboutMeSVG/HealthyMobile.json';
import CreativeMobileSVG from '../Images/AboutMeSVG/CreativeMobile.json';
import TechnologyMobileSVG from '../Images/AboutMeSVG/TechnologyMobile.json';
import CreativeSVG from '../Images/AboutMeSVG/Creative.json';
import { Player } from '@lottiefiles/react-lottie-player';
import AboutMeImg from '../Images/AboutMeImg.jpg';
import AboutMeDesign from '../Images/AboutMe/AboutMeDesign.jpg';
import AboutMeD3 from '../Images/AboutMe/AboutMeD3.jpg';
import AboutMeCoding from '../Images/AboutMe/AboutMeCoding.jpg';
import AboutMeMobileDesign from '../Images/AboutMe/AboutMeMobileDesign.jpg';
import AboutMeMobileD3 from '../Images/AboutMe/AboutMeMobileD3.jpg';
import AboutMeMobileCoding from '../Images/AboutMe/AboutMeMobileCoding.jpg';
import { useMediaQuery } from 'react-responsive';
export default function AboutMe({scrollToDesign, scrollTo3D, scrollToCoding}) {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });
  const BPsm = useMediaQuery({
    query: '(min-width: 540px)',
  });
  const BPmd = useMediaQuery({
    query: '(min-width: 7620px)',
  });
  const BPlg = useMediaQuery({
    query: '(min-width: 976px)',
  });
  const BPxl = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const Var = {
    offscreen: {
      x: '-20%',
      opacity: 0,
    },
    onscreen: {
      x: '0%',
      opacity: 1,

      transition: {
        type: 'linear',
        duration: 2,
        staggerChildren: 1,
        delayChildren: 0.5,
      },
    },
  };

  const VarMobile = {
    offscreen: {
      x: '-20%',
      opacity: 0,
    },
    onscreen: {
      x: '0%',
      opacity: 1,

      transition: {
        type: 'linear',
        duration: 2,
        staggerChildren: 1,
        delayChildren: 0.5,
      },
    },
  };

  function Container() {
    return (
      <div>
        <div className=" relative left-[10vw] flex h-max w-[70vw]  flex-row flex-wrap gap-[10vw] pt-[70vw] pb-[20vw] opacity-100 lg:left-[0vw] lg:top-[300px] lg:gap-[4.4vw] lg:pt-[310px] lg:pb-[450px] ">
          <motion.div
            className="  relative  h-max   w-max border-[4px] lg:border-[.3vw] border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:top-[8.9vw]  lg:order-2"
            whileHover={{
              backgroundColor: '#ffffff',
              transition: { duration: 0.25 },
            }}
          >
            <p className="relative  h-max w-[78vw] pr-[20px] pt-[12px] pl-[20px] pb-[4px] text-[22px] font-semibold sm:text-[40px] lg:w-[31vw] ">
              ME MYSELF & I
            </p>
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] lg:pr-[2vw] text-[22px] font-extralight leading-6 lg:w-[31vw]">
              I'm a passionate web designer & front-end developer based in Switzerland. My
              goal is to stay consistent in my desire to improve, so that I'll one day be
              able to make a big impact with my skills.
            </p>
          </motion.div>
          <motion.div
            className="  relative h-max  w-max cursor-pointer border-[4px] lg:border-[.3vw]  border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:order-1  "
            whileHover={{
              backgroundColor: '#ffffff',
              scale: 1.01,
              transition: { duration: 0.25 },
            }}
            onClick={scrollToDesign}
          >
            <img
              className="h-max w-[78vw] pr-[20px] pt-[20px] pl-[20px] lg:w-[31vw]"
              src={BPsm ? AboutMeDesign : AboutMeMobileDesign}
            />
            <p className="relative  h-max w-[78vw] pr-[20px] pt-[12px] pl-[20px] pb-[4px] text-[22px] font-semibold sm:text-[40px] lg:w-[31vw] ">
              DESIGN
            </p>
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] lg:pr-[2vw] text-[22px] font-extralight leading-6 lg:w-[31vw]">
              Around 2015 I started setting foot in graphical design with photoshop.
              Working in the TV branche as a graphic & motion designer, I've created
              countless flyers, posters, videos etc. Right now I'm more focused on web
              design.
            </p>
          </motion.div>

          <motion.div
            className="  relative h-max  w-max cursor-pointer border-[4px] lg:border-[.3vw] border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:order-3"
            whileHover={{
              backgroundColor: '#ffffff',
              scale: 1.01,
              transition: { duration: 0.25 },
            }}
            onClick={scrollTo3D}
          >
            <img
              className="h-max w-[78vw] pr-[20px] pt-[20px] pl-[20px] lg:w-[31vw]"
              src={BPsm ? AboutMeD3 : AboutMeMobileD3}
            />
            <p className="relative  h-max w-[78vw] pr-[20px] pt-[12px] pl-[20px] pb-[4px] text-[22px] font-semibold sm:text-[40px] lg:w-[31vw] ">
              3D
            </p>
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] lg:pr-[2vw] text-[22px] font-extralight leading-6 lg:w-[31vw]">
              In 2020 I started creating Motion Design & Pictures with 3D. It has been
              very joyful working with all kinds of 3D Softwares. With Three.js I was able
              to implement my 3D knowledge with front-end coding. Creating 3D in React has
              been a game changer for me.
            </p>
          </motion.div>
          <motion.div
            className=" relative h-max  w-max cursor-pointer  border-[4px] lg:border-[.3vw] border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:order-4"
            whileHover={{
              backgroundColor: '#ffffff',
              scale: 1.01,
              transition: { duration: 0.25 },
            }}
            onClick={scrollToCoding}
          >
            <img
              className="h-max w-[78vw] pr-[20px] pt-[20px] pl-[20px] lg:w-[31vw]"
              src={BPsm ? AboutMeCoding : AboutMeMobileCoding}
            />
            <p className="relative  h-max w-[78vw] pr-[20px] pt-[12px] pl-[20px] pb-[4px] text-[22px] font-semibold sm:text-[40px] lg:w-[31vw] ">
              CODING
            </p>
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] lg:pr-[2vw] text-[22px] font-extralight leading-6 lg:w-[31vw]">
              In 2022 I started taking coding more seriously. Working with different kinds
              of front-end frameworks like React and Three.js has been very enjoyable.
              With help of my previous experience in design & 3D, I am able to create
              unique websites.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black">
      <div className="relative top-[30px] z-10 flex h-[30px] w-full   bg-BGFrameTop bg-left" />
      <div className="relative left-[50%] z-0 flex  w-full translate-x-[-50%] flex-col bg-[#f9ef02] bg-AboutMeMobileBG  bg-contain bg-[center_top] bg-no-repeat lg:items-center  lg:bg-AboutMeBG lg:bg-auto lg:bg-right ">
        <Container />
      </div>
      <div className="relative bottom-[30px] z-10 flex h-[30px] w-full  bg-BGFrameBot bg-left" />
    </div>
  );
}

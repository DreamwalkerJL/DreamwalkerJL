import { motion, useScroll } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
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
import { useMediaQuery } from 'react-responsive';
import DesignMainImg from '../Images/SkillsImg/DesignMain.jpg';
import Design1 from '../Images/SkillsImg/Design1.png';
import Design2 from '../Images/SkillsImg/Design2.png';
import Design3 from '../Images/SkillsImg/Design3.png';
import DesignMobile1 from '../Images/SkillsImg/DesignMobile1.jpg';
import DesignMobile2 from '../Images/SkillsImg/DesignMobile2.jpg';
import DesignMobile3 from '../Images/SkillsImg/DesignMobile3.jpg';
import DesignIcon1 from '../Images/SkillsImg/DesignIcon1.png';
import DesignIcon2 from '../Images/SkillsImg/DesignIcon2.png';
import DesignIcon3 from '../Images/SkillsImg/DesignIcon3.png';
import DesignIcon4 from '../Images/SkillsImg/DesignIcon4.png';
import DesignIcon5 from '../Images/SkillsImg/DesignIcon5.png';
import D3MainImg from '../Images/SkillsImg/D3Main.jpg';
import D331 from '../Images/SkillsImg/D31.png';
import { useNavigate } from 'react-router-dom';
import SkillFrameDesign from '../Images/SkillFrameDesign.json';
import YoutubeIcon from '../Images/Youtube.png';
import ArtstationIcon from '../Images/Artstation.png';
import Array from './SkillsArray';
import SkillsMiniFrameMap from './SkillsMiniFrameMap';

export default function Skills({ i, deRef, d3Ref, coRef }) {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });
  const BPsm = useMediaQuery({
    query: '(min-width: 540px)',
  });
  const BPlg = useMediaQuery({
    query: '(min-width: 976px)',
  });
  const BPxl = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  const Var = {
    offscreen: {
      y: '75px',
      opacity: 0,
      '--rotate': '120deg',
    },
    onscreen: {
      y: '0px',
      opacity: 1,
      '--rotate': '0deg',
      transition: {
        type: 'linear',
        duration: 1.25,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    hover: {},
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

  function Design() {
    const iconVar = {
      whilehover: {
        scale: 1.2,
      },
    };
    const miniFrameVar = {
      hover: {
        // backgroundColor:'red',

        filter: 'blur(3px) brightness(20%)',
        transition: {},
      },
    };
    const miniFrameLinkVar = {
      hover: {
        opacity: 1,
      },
    };

    const divRef = useRef();
    const { scrollYProgress } = useScroll({
      target: divRef,
      offset: ['start end', 'end 35%'],
    });
    const refs = [deRef, d3Ref, coRef];
    return (
      <div ref={divRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={refs[i]}
          className="  relative flex h-max w-full  flex-col gap-[10vw] lg:top-0 lg:h-[80vh]    "
        >
          <div className="relative left-[10vw] z-10 flex h-max w-[80vw] flex-col gap-[2vw] overflow-hidden bg-[#f9ef02] bg-auto bg-left text-center lg:left-0 lg:top-[35px] lg:h-[240px] lg:w-[30vw] lg:gap-[18px] lg:bg-opacity-0 lg:bg-SkillsTitleBG lg:text-start xl:h-[271px] xl:gap-[12px] xl:bg-cover  xxl:h-[300px] xxl:gap-[20px]">
            <p className="relative pt-[2vw] font-Oxanium text-[22px] font-semibold lg:left-[50px] lg:top-[12px] lg:p-0 lg:text-[40px] xl:text-[56px]">
              {Array[i].title}
            </p>
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative bottom-0 h-[1px] w-[70vw]  bg-black lg:left-[53px] lg:w-[30vw]"></div>
            </div>
            <p className="relative pl-[20px] pr-[20px] font-Oxanium text-[14px] font-extralight sm:text-[16px]  lg:left-[50px]  lg:w-[25vw] lg:p-0  xl:text-[22px] xxl:text-[30px] xxl:leading-8">
              {Array[i].subTitle}
            </p>
            <div className="relative flex flex-row justify-center gap-[5px] pb-[2.5vw] lg:bottom-[0px] lg:left-[50px] lg:justify-start  xl:bottom-[0px]  ">
              <a href={Array[i].titleIconLink1} target="_blank" rel="Ps">
                <motion.img
                  variants={iconVar}
                  whileHover={'whilehover'}
                  src={Array[i].titleIcon1}
                  className="relative w-[30px] cursor-pointer "
                />
              </a>
              <a href={Array[i].titleIconLink2} target="_blank" rel="Ae">
                <motion.img
                  variants={iconVar}
                  whileHover={'whilehover'}
                  src={Array[i].titleIcon2}
                  className="relative w-[30px] cursor-pointer "
                />
              </a>
              <a href={Array[i].titleIconLink3} target="_blank" rel="Id">
                <motion.img
                  variants={iconVar}
                  whileHover={'whilehover'}
                  src={Array[i].titleIcon3}
                  className="relative w-[30px] cursor-pointer "
                />
              </a>
              <a href={Array[i].titleIconLink4} target="_blank" rel="Pr">
                <motion.img
                  variants={iconVar}
                  whileHover={'whilehover'}
                  src={Array[i].titleIcon4}
                  className="relative w-[30px] cursor-pointer "
                />
              </a>
              <a href={Array[i].titleIconLink5} target="_blank" rel="Ai">
                <motion.img
                  variants={iconVar}
                  whileHover={'whilehover'}
                  src={Array[i].titleIcon5}
                  className="relative w-[30px] cursor-pointer "
                />
              </a>
              {Array[i].titleIcon6 ? (
                <a href={Array[i].titleIconLink6} target="_blank" rel="Ai">
                  <motion.img
                    variants={iconVar}
                    whileHover={'whilehover'}
                    src={Array[i].titleIcon6}
                    className="relative w-[30px] cursor-pointer "
                  />
                </a>
              ) : (
                false
              )}
              {Array[i].titleIcon7 ? (
                <a href={Array[i].titleIconLink7} target="_blank" rel="Ai">
                  <motion.img
                    variants={iconVar}
                    whileHover={'whilehover'}
                    src={Array[i].titleIcon7}
                    className="relative w-[30px] cursor-pointer "
                  />
                </a>
              ) : (
                false
              )}
            </div>
          </div>
          <motion.div
            variants={Var}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className=" relative z-0  flex h-max w-full justify-center opacity-100 lg:absolute lg:right-[5vw]  lg:w-max"
          >
            <img
              src={Array[i].mainFrame}
              className="   relative w-[80vw] border-2 border-[#f9ef02] lg:w-[800px] xl:w-[1036.8px] xxl:w-[60vw] "
            />
          </motion.div>
              
          <SkillsMiniFrameMap mainI={i} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-black">
      <div className="relative z-0  h-max  w-full  bg-SkillsBG bg-cover bg-fixed bg-[center_top] bg-no-repeat  pb-[250px] ">
        <Design />
      </div>
    </div>
  );
}

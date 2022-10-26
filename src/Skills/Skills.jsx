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

export default function Skills({ i }) {
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
  console.log(Array);
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

    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        ref={divRef}
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
            <a
              href={Array[i].titleIconLink1}
              target="_blank"
              rel="Ps"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={Array[i].titleIcon1}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href={Array[i].titleIconLink2}
              target="_blank"
              rel="Ae"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={Array[i].titleIcon2}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href={Array[i].titleIconLink3}
              target="_blank"
              rel="Id"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={Array[i].titleIcon3}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href={Array[i].titleIconLink4}
              target="_blank"
              rel="Pr"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={Array[i].titleIcon4}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href={Array[i].titleIconLink5}
              target="_blank"
              rel="Ai"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={Array[i].titleIcon5}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            {Array[i].titleIcon6 ? (
              <a
              href={Array[i].titleIconLink6}
                target="_blank"
                rel="Ai"
              >
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
              <a
              href={Array[i].titleIconLink7}
                target="_blank"
                rel="Ai"
              >
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
            className="   relative w-[80vw] border-2 border-black lg:w-[800px] xl:w-[1036.8px] xxl:w-[60vw] "
          />
        </motion.div>
        {/* <motion.div
          variants={Var}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: '50px' }}
          className="relative  flex  w-full flex-col  items-center gap-[5vw] lg:absolute lg:top-[58vh] lg:right-[7vw] lg:w-max lg:flex-row lg:items-start lg:gap-[2vw] xxl:top-[50vh] xxl:gap-[1vw]"
        > */}
        {/* <motion.div
            variants={Var}
            className="relative flex w-max cursor-pointer flex-col items-center bg-[#f9ef02] lg:h-[150.5px] lg:bg-opacity-0"
            whileHover={'hover'}
            onClick={() =>
              window.open('https://www.artstation.com/artwork/mzk2O1', '_blank')
            }
          >
            <motion.img
              src={BPlg ? Design3 : DesignMobile3}
              className=" relative  w-[80vw] p-1 lg:w-[270px]  lg:p-0 xl:w-[327px] xxl:w-[460px] "
              variants={BPlg && miniFrameVar}
            />
            <motion.p
              variants={BPlg && miniFrameVar}
              className="l pointer-events-none relative w-[80vw] text-center font-Oxanium text-[14px] font-light  sm:text-[16px] lg:bottom-[50px] lg:left-6 lg:w-[250px] lg:p-[2px] lg:text-start  lg:text-[10px] xl:bottom-[63px] xl:w-[327px] xl:text-[13px] xl:leading-5 xxl:bottom-[82px] xxl:w-[460px] xxl:text-[23px] xxl:leading-6"
            >
              Fantasy Images <br /> Creating and Editing Pictures
              <br />
              2015 - 2019
            </motion.p>
            <motion.div
              variants={BPlg && miniFrameLinkVar}
              className="relative flex h-max w-max justify-start gap-2  pb-2 pt-1 text-base opacity-100 lg:bottom-[178px] lg:flex-col lg:items-center lg:gap-0 lg:p-0  lg:opacity-0 xl:bottom-[210px] xxl:bottom-[275px]"
            >
              <p className="font-Oxanium text-[14px]  font-extralight text-black sm:text-[16px] lg:order-2 lg:text-[14px] lg:font-normal lg:text-white xl:text-[16px] xxl:text-[22px]">
                View on Artstation
              </p>
              <img
                src={ArtstationIcon}
                className="h-max w-[20px] lg:order-1 lg:w-[42px] xxl:w-[65px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={Var}
            className="relative flex w-max cursor-pointer flex-col items-center bg-[#f9ef02] lg:h-[150.5px] lg:bg-opacity-0"
            whileHover={'hover'}
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=gsKiwVeOg9I&list=PLyTTmzgmeHrk2WamZWF5IBCpHSK07dF3o&index=1',
                '_blank',
              )
            }
          >
            <motion.img
              src={BPlg ? Design2 : DesignMobile2}
              className=" relative  w-[80vw] p-1 lg:w-[270px]  lg:p-0 xl:w-[327px] xxl:w-[460px] "
              variants={BPlg && miniFrameVar}
            />
            <motion.p
              variants={BPlg && miniFrameVar}
              className="l pointer-events-none relative w-[80vw] text-center font-Oxanium text-[14px] font-light  sm:text-[16px] lg:bottom-[50px] lg:left-6 lg:w-[250px] lg:p-[2px] lg:text-start  lg:text-[10px] xl:bottom-[63px] xl:w-[327px] xl:text-[13px] xl:leading-5 xxl:bottom-[82px] xxl:w-[460px] xxl:text-[23px] xxl:leading-6"
            >
              Work and Clients <br /> Animations and Motion Graphic
              <br />
              2019 - 2020
            </motion.p>
            <motion.div
              variants={BPlg && miniFrameLinkVar}
              className="relative flex h-max w-max justify-start gap-2  pb-2 pt-1 text-base opacity-100 lg:bottom-[178px] lg:flex-col lg:items-center lg:gap-0 lg:p-0  lg:opacity-0 xl:bottom-[210px] xxl:bottom-[275px]"
            >
              <p className="font-Oxanium text-[14px]  font-extralight text-black sm:text-[16px] lg:order-2 lg:text-[14px] lg:font-normal lg:text-white xl:text-[16px] xxl:text-[22px]">
                Watch on Youtube
              </p>
              <img
                src={YoutubeIcon}
                className="h-max w-[20px] lg:order-1 lg:w-[42px] xxl:w-[65px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={Var}
            className="relative flex w-max cursor-pointer flex-col items-center bg-[#f9ef02] lg:h-[150.5px] lg:bg-opacity-0"
            whileHover={'hover'}
            animate={{}}
            onClick={() =>
              window.open(
                'https://www.youtube.com/channel/UCZOcWwzSXqlGfS2H4syDFWg',
                '_blank',
              )
            }
          >
            <motion.img
              src={BPlg ? Design1 : DesignMobile1}
              className=" relative  w-[80vw] p-1 lg:w-[270px]  lg:p-0 xl:w-[327px] xxl:w-[460px] "
              variants={BPlg && miniFrameVar}
            />
            <motion.p
              variants={BPlg && miniFrameVar}
              className="l pointer-events-none relative w-[80vw]  text-center font-Oxanium text-[14px] font-light  sm:text-[16px] lg:bottom-[50px] lg:left-6 lg:w-[250px] lg:p-[2px] lg:text-start  lg:text-[10px] xl:bottom-[63px] xl:w-[327px] xl:text-[13px] xl:leading-5 xxl:bottom-[82px] xxl:w-[460px] xxl:text-[23px] xxl:leading-6"
            >
              Youtube Battle Music <br /> Animations and Effects
              <br />
              2020 - 2022
            </motion.p>

            <motion.div
              variants={BPlg && miniFrameLinkVar}
              className="relative flex h-max w-max justify-start gap-2  pb-2  pt-1 text-base opacity-100 lg:bottom-[178px] lg:flex-col lg:items-center lg:gap-0 lg:p-0  lg:opacity-0 xl:bottom-[210px] xxl:bottom-[275px]"
            >
              <p className="font-Oxanium text-[14px]  font-extralight  text-black sm:text-[16px] lg:order-2 lg:text-[14px] lg:font-normal lg:text-white xl:text-[16px] xxl:text-[22px]">
                Watch on Youtube
              </p>
              <img
                src={YoutubeIcon}
                className="h-max w-[20px] lg:order-1 lg:w-[42px] xxl:w-[65px]"
              />
            </motion.div>
          </motion.div> */}

        <SkillsMiniFrameMap mainI={i} />
        {/* </motion.div> */}
      </motion.div>
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

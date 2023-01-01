import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Design1 from '../Images/SkillsImg/Design1.png';
import Design2 from '../Images/SkillsImg/Design2.png';
import Design3 from '../Images/SkillsImg/Design3.png';
import DesignMobile1 from '../Images/SkillsImg/DesignMobile1.jpg';
import DesignMobile2 from '../Images/SkillsImg/DesignMobile2.jpg';
import YoutubeIcon from '../Images/Youtube.png';
import ArtstationIcon from '../Images/Artstation.png';
import SMFA from './SkillsMiniFrameArray';
import { useNavigate } from 'react-router-dom';
export default function SkillsMiniFrame({ mainI, i }) {
  const BPlg = useMediaQuery({
    query: '(min-width: 976px)',
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
  const miniFrameVar = {
    hover: {
      filter: 'blur(3px) brightness(20%)',
      transition: {},
    },
  };
  const miniFrameLinkVar = {
    hover: {
      opacity: 1,
    },
  };

  const navigate = useNavigate();
  function scrollToGallery() {
    navigate('/gallery');
  }
  function scrollToMoon() {
    navigate('/moon');
  }
  function isLinkIntern() {
    if (SMFA[mainI][i].linkIntern === 1) {
      return scrollToGallery();
    } else if (SMFA[mainI][i].linkIntern === 2) {
      return scrollToMoon();
    } else {
      return window.open(SMFA[mainI][i].link, '_blank');
    }
  }
  return (
    <motion.div
      variants={Var}
      className="relative flex w-max cursor-pointer flex-col items-center bg-[#f9ef02] lg:h-[150.5px] lg:bg-opacity-0"
      whileHover={'hover'}
      onClick={() => isLinkIntern()}
    >
      <motion.img
        src={BPlg ? SMFA[mainI][i].backgroundImage : SMFA[mainI][i].backgroundMobileImage}
        className=" relative  w-[80vw] p-1 lg:w-[270px]  lg:p-0 xl:w-[327px] xxl:w-[460px] "
        variants={BPlg && miniFrameVar}
      />
      <motion.p
        variants={BPlg && miniFrameVar}
        className="l pointer-events-none relative w-[80vw] text-center font-Oxanium text-[14px] font-light  sm:text-[16px] lg:bottom-[50px] lg:left-6 lg:w-[250px] lg:p-[2px] lg:text-start  lg:text-[10px] xl:bottom-[63px] xl:w-[327px] xl:text-[13px] xl:leading-5 xxl:bottom-[82px] xxl:w-[460px] xxl:text-[23px] xxl:leading-6"
      >
        {SMFA[mainI][i].text1}
        <br />
        {SMFA[mainI][i].text2}
        <br />
        {SMFA[mainI][i].text3}
      </motion.p>
      <motion.div
        variants={BPlg && miniFrameLinkVar}
        className="relative flex h-max w-max justify-start gap-2  pb-2 pt-1 text-base opacity-100 lg:bottom-[178px] lg:flex-col lg:items-center lg:gap-0 lg:p-0  lg:opacity-0 xl:bottom-[210px] xxl:bottom-[275px]"
      >
        <p className="font-Oxanium text-[14px]  font-extralight text-black sm:text-[16px] lg:order-2 lg:text-[14px] lg:font-normal lg:text-white xl:text-[16px] xxl:text-[22px]">
          {SMFA[mainI][i].linkText}
        </p>
        <img
          src={SMFA[mainI][i].linkIcon}
          className="h-[20px] w-[20px] lg:order-1 lg:h-max lg:w-[42px] xxl:w-[65px]"
        />
      </motion.div>
    </motion.div>
  );
}

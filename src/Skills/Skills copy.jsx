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

export default function Skills(props) {
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

  function Title() {
    const lottieRef = useRef();
    const { scrollYProgress } = useScroll();
    useEffect(() => {
      scrollYProgress.onChange((latest) => {
        lottieRef.current && latest > 0.05 && lottieRef.current.play();
      });
    }, []);
    return (
      <div className="relative flex  h-[15vh] w-[70vw] justify-center lg:h-[15vw] lg:w-[60vw] ">
        <Player
          src={AboutMeTitle}
          speed={1.5}
          className="relative h-full w-full "
          ref={lottieRef}
          keepLastFrame
        />
      </div>
    );
  }

  function Healthy() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative left-[4vw] flex flex-col gap-[0vw]"
        variants={Var}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="absolute top-[2vw] right-[17vw] z-0">
          <p className="AboutMeTitles font-Raskhal">Healthy</p>
        </motion.div>
        <motion.div
          className="absolute  bottom-[20vw] top-[2vw] right-[13.5vw] z-10 flex h-[15vw] w-[15vw] items-start justify-start align-baseline"
          variants={Var}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={HealthySVG}
            speed={1}
            className="absolute h-[75%] w-[75%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div className="absolute top-[2vw] right-[-28vw] w-[40vw]" variants={Var}>
          <p className="AboutMeText">
            Working out, eating healthy and sleeping enough is a very important part of my
            life. The habit of taking good care of my body has definitely helped me in
            many situations. I could get a bit more sunlight tho...
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function Technology() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative top-[10vw] left-[4vw]"
        variants={Var}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="absolute right-[15vw] top-[3.5vw] z-10  flex h-[15vw] w-[15vw] items-start justify-start align-baseline"
          variants={Var}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={TechnologySVG}
            speed={1}
            className="relative h-[50%] w-[50%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div className="absolute right-[17vw] top-[2vw] z-0">
          <p className="AboutMeTitles font-Raskhal">Technology</p>
        </motion.div>
        <motion.div className="absolute right-[-28vw] top-[2vw] w-[40vw]" variants={Var}>
          <p className="AboutMeText">
            I've always been a big fan of technology. You keep getting to witness new
            stuff which amazes you. I want to keep my body and mind as healthy as
            possible, so that I'm still around to see the most mind- blowing technology.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function Creative() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative top-[20vw] left-[4vw]"
        variants={Var}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="absolute right-[15vw] top-[3.5vw] z-10  flex h-[15vw] w-[15vw] items-start justify-start align-baseline"
          variants={Var}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={CreativeSVG}
            speed={1}
            className="relative h-[50%] w-[50%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div className="absolute right-[17vw] top-[2.5vw] z-0">
          <p className="AboutMeTitles font-Raskhal">Creative</p>
        </motion.div>
        <motion.div className="absolute right-[-28vw] top-[2vw] w-[40vw]" variants={Var}>
          <p className="AboutMeText">
            I love being open about art. Every art usually has something unique to it.
            Getting to understand it and potentially mixing bits of it with your own
            unique kind of style is genuinely super fun.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function Nerd() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative top-[30vw] left-[4vw]"
        variants={Var}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          className="absolute right-[14.5vw] top-[2vw] z-10  flex h-[15vw] w-[15vw] items-start justify-start align-baseline"
          variants={Var}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={NerdSVG}
            speed={1}
            className="relative h-[75%] w-[75%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div className="absolute right-[17vw] top-[2vw] z-0">
          <p className="AboutMeTitles font-Raskhal">Nerd</p>
        </motion.div>
        <motion.div className="absolute right-[-28vw] top-[2vw] w-[40vw]" variants={Var}>
          <p className="AboutMeText">
            When it comes to my free time, I'm definitely more of a nerd. I spend a lot of
            time with myself, improving what I feel like is needed. Right now I'm spending
            almost all my time coding. The better I am getting at it, the more fun I'm
            having. I also like video games.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function HealthyMobile() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative flex flex-col  gap-[20vw]"
        variants={VarMobile}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="relative z-10 text-center">
          <p className="AboutMeTitlesMobile font-Raskhal">Healthy</p>
        </motion.div>
        <motion.div
          className="absolute  left-0 top-[12vw] z-0 h-full w-full "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={HealthyMobileSVG}
            speed={1}
            className="relative h-[50%] w-[50%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div
          className="relative "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="AboutMeTextMobile w-[80vw] ">
            Working out, eating healthy and sleeping enough is a very important part of my
            life. The habit of taking good care of my body has definitely helped me in
            many situations. I could get a bit more sunlight tho...
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function TechnologyMobile() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative top-[5vw] flex  flex-col gap-[20vw]"
        variants={VarMobile}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="relative text-center">
          <p className="AboutMeTitlesMobile font-Raskhal">Technology</p>
        </motion.div>
        <motion.div
          className="absolute  left-0 top-[15vw] h-full w-full "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={TechnologyMobileSVG}
            speed={1}
            className="relative h-[50%] w-[50%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div
          className="relative "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="AboutMeTextMobile w-[80vw]">
            I've always been a big fan of technology. You keep getting to witness new
            stuff which amazes you. I want to keep my body and mind as healthy as
            possible, so that I'm still around to see the most mind blowing technology.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function CreativeMobile() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative top-[10vw] flex  flex-col gap-[20vw]"
        variants={VarMobile}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="relative text-center">
          <p className="AboutMeTitlesMobile font-Raskhal">Creative</p>
        </motion.div>
        <motion.div
          className="absolute  left-0 top-[15vw] h-full w-full "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={CreativeMobileSVG}
            speed={1}
            className="relative h-[50%] w-[50%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div
          className="relative "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="AboutMeTextMobile w-[80vw] ">
            I love being open about art. Every art usually has something unique to it.
            Getting to understand it and potentially mixing bits of it with your own
            unique kind of style is genuinely super fun.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function NerdMobile() {
    const lottieRef = useRef();

    return (
      <motion.div
        className="relative top-[15vw] flex  flex-col gap-[20vw]"
        variants={VarMobile}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="relative text-center">
          <p className="AboutMeTitlesMobile font-Raskhal">Nerd</p>
        </motion.div>
        <motion.div
          className="absolute  left-0  h-full w-full "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <Player
            autoplay
            src={NerdSVG}
            speed={1}
            className="relative h-[75%] w-[75%]"
            ref={lottieRef}
            loop
          />
        </motion.div>
        <motion.div
          className="relative "
          variants={VarMobile}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="AboutMeTextMobile bottom-[2vw] w-[80vw] ">
            When it comes to my free time, I'm definitely more of a nerd. I spend a lot of
            time with myself, improving what I feel like is needed. Right now I'm spending
            almost all my time coding. The better I am getting at it, the more fun I'm
            having. I also like video games.
          </p>
        </motion.div>
      </motion.div>
    );
  }

  function MeImage() {
    const ImageVar = {
      offscreen: {
        y: -100,
        opacity: 0,
        width: '20%',
      },
      onscreen: {
        y: 0,
        opacity: 1,
        width: '80%',
        transition: {
          type: 'linear',
          duration: 2,
          staggerChildren: 0.5,
          delayChildren: 1,
        },
      },
    };

    const divRef = useRef();
    const { scrollYProgress } = useScroll({
      target: divRef,
      offset: ['end end', 'end center'],
    });
    useEffect(() => {
      scrollYProgress.onChange((latest) => {
        latest > 0;
      });
    }, []);
    return (
      <motion.div
        className="relative mt-[0vw] flex h-auto w-[20vw] items-center justify-center "
        ref={divRef}
        variants={ImageVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
      >
        <img src={AboutMeImg} width={200} height={200} className="  h-auto w-[80vw]  " />
      </motion.div>
    );
  }

  function DesignPlayer() {
    const lottieRef = useRef();
    const divRef = useRef();
    const { scrollYProgress } = useScroll({
      target: divRef,
      offset: ['start end', 'end end'],
    });
    useEffect(() => {
      scrollYProgress.onChange((latest) => {
        lottieRef.current && latest > 0.1 && lottieRef.current.play();
      });
    }, []);

    const [lastFrame, lastFrameSet] = useState(true);

    function lottieRepeat() {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      async function play() {
        lastFrameSet(false);

        lottieRef.current.play();
        await delay(100);
        lottieRef.current.play();
        await delay(100);
        lastFrameSet(true);
      }
      return play();
    }
    const navigate = useNavigate();

    return (
      <div
        className=" containerL border-gray-white absolute right-[80.9vw] top-[410px]  w-max  "
        ref={divRef}
      >
        <motion.div
          onClick={lottieRepeat}
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <Player
            src={SkillFrameDesign}
            speed={0.5}
            className="skillsPlayer relative  w-[18vw] "
            ref={lottieRef}
            keepLastFrame={lastFrame}
          />
        </motion.div>
      </div>
    );
  }

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
            DESIGN
          </p>
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative bottom-0 h-[1px] w-[70vw]  bg-black lg:left-[53px] lg:w-[30vw]"></div>
          </div>
          <p className="relative pl-[20px] pr-[20px] font-Oxanium text-[14px] font-extralight sm:text-[16px]  lg:left-[50px]  lg:w-[25vw] lg:p-0  xl:text-[22px] xxl:text-[30px] xxl:leading-8">
            Graphic & Motion Design Image & Video Editing / Web Design
          </p>
          <div className="relative flex flex-row justify-center gap-[5px] pb-[2.5vw] lg:bottom-[0px] lg:left-[50px] lg:justify-start  xl:bottom-[0px]  ">
            <a
              href="https://www.adobe.com/products/photoshop.html"
              target="_blank"
              rel="Ps"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={DesignIcon1}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href="https://www.adobe.com/products/aftereffects.html"
              target="_blank"
              rel="Ae"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={DesignIcon2}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href="https://www.adobe.com/products/indesign.html"
              target="_blank"
              rel="Id"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={DesignIcon3}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href="https://www.adobe.com/products/premiere.html"
              target="_blank"
              rel="Pr"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={DesignIcon4}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
            <a
              href="https://www.adobe.com/products/illustrator.html"
              target="_blank"
              rel="Ai"
            >
              <motion.img
                variants={iconVar}
                whileHover={'whilehover'}
                src={DesignIcon5}
                className="relative w-[30px] cursor-pointer "
              />
            </a>
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
            src={DesignMainImg}
            className="   relative w-[80vw] border-2 border-black lg:w-[800px] xl:w-[1036.8px] xxl:w-[60vw] "
          />
        </motion.div>
        <motion.div
          variants={Var}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: '50px' }}
          className="relative  flex  w-full flex-col  items-center gap-[5vw] lg:absolute lg:top-[58vh] lg:right-[7vw] lg:w-max lg:flex-row lg:items-start lg:gap-[2vw] xxl:top-[50vh] xxl:gap-[1vw]"
        >
          <motion.div
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
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="bg-black">
      <div className="relative z-0  h-max  w-full  bg-SkillsBG bg-cover bg-fixed bg-[center_top] bg-no-repeat pt-[250px] pb-[350px] ">
        <Design />
      </div>
      <div className="relative z-0  h-max  w-full  bg-SkillsBG bg-cover bg-fixed bg-[center_top] bg-no-repeat pb-[350px]">
        <Design />
      </div>
    </div>
  );
}

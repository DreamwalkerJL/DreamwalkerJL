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
import { useMediaQuery } from 'react-responsive';
export default function AboutMe() {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
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



  return (
    <div className="relative flex h-[600vw] w-full flex-col items-center gap-[3vw] bg-AboutMeBG bg-cover py-[3vw] lg:h-[72.1875vw] lg:w-full">
      {/* <Title /> */}
      {/* <MeImage /> */}
      {/* {isMort ? <HealthyMobile /> : <Healthy />}
      {isMort ? <TechnologyMobile /> : <Technology />}
      {isMort ? <CreativeMobile /> : <Creative />}
      {isMort ? <NerdMobile /> : <Nerd />} */}
      <Container/>
    </div>
  );
}

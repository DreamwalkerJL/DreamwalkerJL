import React, { useEffect, useRef, useState } from 'react';
import SkillFrame3D from '../Images/SkillFrame3D.json';
import SkillFrameDesign from '../Images/SkillFrameDesign.json';
import SkillFrameCoding from '../Images/SkillFrameCoding.json';
import SkillFrameCodingPic from '../Images/SkillFrameCoding.png';
import SkillFrame3DPic from '../Images/SkillFrame3D.png';
import SkillFrameDesignPic from '../Images/SkillFrameDesign.png';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import { motion, useScroll, useInView } from 'framer-motion';
import { NoToneMapping } from 'three';
import SkillsTitle from '../Images/SkillsTitle.json';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useMediaQuery } from 'react-responsive';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/material.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
export default function () {
  const WW = window.innerWidth;
  const size = {
    sm: 480,
    md: 768,
    lg: 976,
    xl: 1440,
  };
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
  const divRef = useRef();
  const motionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start end', 'end end'],
  });

  function Title() {
    const lottieRef = useRef();

    useEffect(() => {
      scrollYProgress.onChange((latest) => {
        lottieRef.current && latest > 0.1 && lottieRef.current.play();
      });
    }, []);

    return (
      <div className="relative flex h-[30vh] w-full justify-center  lg:bottom-[10vh] lg:h-[80vh] ">
        <Player
          src={SkillsTitle}
          speed={1.5}
          className="relative h-full w-full "
          ref={lottieRef}
          keepLastFrame
        />
      </div>
    );
  }

  function Frame() {
    const FrameVar = {
      offscreen: {
        y: 100,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'linear',
          duration: 1,
          staggerChildren: 0.5,
          delayChildren: 1,
        },
      },
    };

    function Design() {
      const lottieRef3 = useRef();
      const divRef = useRef();
      const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['start end', 'end end'],
      });

      useEffect(() => {
        scrollYProgress.onChange((latest) => {
          lottieRef3.current && latest > 0.1 && lottieRef3.current.play();
        });
      }, []);

      return (
        <div className="containerR relative h-[42vw] w-[100vw] bg-red-400  " ref={divRef}>
          <Player
            src={SkillFrameDesign}
            speed={0.5}
            className="skillsPlayer relative w-[40vw]"
            ref={lottieRef3}
            keepLastFrame
          />
          <motion.p className="skillsTitle  font-MandatoryPlaything " variants={FrameVar}>
            Design
          </motion.p>
          <motion.p className="skillsText " variants={FrameVar}>
            <div>
              <div className="break-words mr-[2vw] ">
                <p>
                  At around 2015 I've started setting foot in to Graphical Design with
                  Photoshop. Since then it has been by far my most used Software.
                </p>
                <br />
                <p>
                  During 2018 I've learned about Video editing with After Effects and
                  Premiere Pro. It was very enjoyable editing multiple Frames, instead the
                  usual one for a picture.
                </p>
                <br />
                <p>
                  In 2019 startet an Internship as a Graphic Designer in the TV Industry.
                </p>
              </div>
            </div>
          </motion.p>
        </div>
      );
    }

    function D3() {
      const lottieRef1 = useRef();
      const divRef = useRef();
      const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['start end', 'end end'],
      });
      useEffect(() => {
        scrollYProgress.onChange((latest) => {
          lottieRef1.current && latest > 0.1 && lottieRef1.current.play();
        });
      }, []);

      return (
        <div className=" containerL relative h-[42vw] w-[90vw] border-[.5vw] border-gray-white bg-D3BG bg-cover" ref={divRef}>
          <Player
            src={SkillFrame3D}
            speed={0.5}
            className="skillsPlayer relative w-[34vw] left-[2.5vw]"
            ref={lottieRef1}
            keepLastFrame
          />
          <motion.p className="skillsTitle font-MandatoryPlaything left-[2vw]" variants={FrameVar}>
            <div className="text-end ">3D</div>
          </motion.p>
          <motion.p className="skillsText text-end left-[2vw]" variants={FrameVar}>
            <div className="break-words text-end">
              <p>
                From 2020 till 2022, I've teached myself through videos and blogs, on how
                to work with various 3D Softwares.
              </p>
              <br />
              <p>
                My End goal was, to be able to create a fairly realistic Character, which
                is animatable through a propper Rig. In my latest project, I was able to
                create that Character.
              </p>
              <br />
              <a
                href="https://www.artstation.com/dreamwalkerworld"
                target="_blank"
                rel="noreferrer"
                className="text-sky-500"
              >
                Check out my 3D Collection on Artstation.com
              </a>
            </div>
          </motion.p>
        </div>
      );
    }

    function Coding() {
      const lottieRef2 = useRef();
      const divRef = useRef();
      const { scrollYProgress } = useScroll({
        target: divRef,
        offset: ['start end', 'end end'],
      });
      useEffect(() => {
        scrollYProgress.onChange((latest) => {
          console.log(latest)
          lottieRef2.current && latest > 0.1 && lottieRef2.current.play();
        });
      }, []);

      return (
        <div className="containerR relative h-[52vw] w-[90vw] bg-CodingBG bg-cover border-[.5vw] border-black" ref={divRef}>
          <Player
            src={SkillFrameCoding}
            speed={0.5}
            className="relative w-[40vw] pt-[6vh]"
            ref={lottieRef2}
            keepLastFrame
          />
          <motion.p
            className="skillsTitle  right-[.5vw] font-MandatoryPlaything"
            variants={FrameVar}
          >
            Coding
          </motion.p>
          <motion.p className="skillsText " variants={FrameVar}>
            <div className="break-words mr-[2vw]">
              <p>In 2020 I've tried a bit of HTML and CSS, to build my own website.</p>
              <br />
              <p>
                When 2022 started, I wanted to take Coding a bit more serious, to see
                where it could take me. I refreshed my HTML & CSS and teached myself JS. I
                was not really amazed by coding at that point. But my passion towards
                coding definitely changed, when I started using React.
              </p>
              <br />
              <p>
                React really made me starting to enjoy coding and simply learning new
                stuff on another gear. I also picked up ThreeJS, since I already have vast
                3D knowledge.
              </p>
            </div>
          </motion.p>
        </div>
      );
    }

    // function D3Pic() {
    //   const handle = useFullScreenHandle();
    //   console.log(handle)
    //   return <><img src={SkillFrame3DPic} onClick={handle.enter} />
    //         <FullScreen handle={handle}>
    //     <div onClick={handle.exit} className='w-full h-full'>{handle.active && <p className='text-white'>HELLOOOOOOOOOOOOOOO</p>}</div>
    //   </FullScreen></>
    // }
    function DesignPic() {
      const [interactiveState, interactiveStateSet] = useState(false);
      return (
        <>
          <Tippy
            placement="top"
            offset={[0, -300]}
            trigger="click"
            maxWidth="700"
            animation="scale"
            theme="material"
            onShow={() => interactiveStateSet(true)}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            interactive={interactiveState}
            content={
              <div className="bg-neutral-900 px-2 text-white ">
                <p className="text-center font-MandatoryPlaything text-4xl md:text-6xl">
                  Design
                </p>
                <br />
                <div className="break-words text-start text-lg md:text-4xl  ">
                  <p>
                    At around 2015 I've started setting foot in to Graphical Design with
                    Photoshop. Since then it has been by far my most used Software.
                  </p>
                  <br />
                  <p>
                    During 2018 I've learned about Video editing with After Effects and
                    Premiere Pro. It was a very enjoyable editing multiple Frames, instead
                    the usual one for a picture.
                  </p>
                  <br />
                  <p>
                    In 2019 startet an Internship as a Graphic Designer in the TV
                    Industry.
                  </p>

                  <p className="text-right text-base text-neutral-400 md:text-3xl">
                    Click outside of this box to exit
                  </p>
                </div>
              </div>
            }
          >
            <img src={SkillFrameDesignPic} className="w-[95vw]" />
          </Tippy>
        </>
      );
    }

    function D3Pic() {
      const [interactiveState, interactiveStateSet] = useState(false);
      return (
        <>
          <Tippy
            placement="top"
            offset={[0, -300]}
            trigger="click"
            maxWidth="700"
            animation="scale"
            theme="material"
            onShow={() => interactiveStateSet(true)}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            interactive={interactiveState}
            content={
              <div className="bg-neutral-900 px-2 text-white ">
                <p className="text-center font-MandatoryPlaything text-4xl md:text-6xl">
                  3D
                </p>
                <br />
                <div className="break-words text-start text-lg md:text-4xl  ">
                  <p>
                    From 2020 till 2022, I've teached myself through videos and blogs, on
                    how to work with various 3D Softwares.
                  </p>
                  <br />
                  <p>
                    My End goal was, to be able to create a fairly realistic Character,
                    which is animatable through a propper Rig. In my latest project, I was
                    able to create that Character.
                  </p>
                  <br />
                  <a
                    href="https://www.artstation.com/dreamwalkerworld"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-500"
                  >
                    Check out my 3D Collection on Artstation.com
                  </a>
                  <p className="text-right text-base text-neutral-400 md:text-3xl">
                    Click outside of this box to exit
                  </p>
                </div>
              </div>
            }
          >
            <img src={SkillFrame3DPic} className="w-[95vw]" />
          </Tippy>
        </>
      );
    }

    function CodingPic() {
      const [interactiveState, interactiveStateSet] = useState(false);
      return (
        <>
          <Tippy
            placement="top"
            offset={[0, -300]}
            trigger="click"
            maxWidth="700"
            animation="scale"
            theme="material"
            onShow={() => interactiveStateSet(true)}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            interactive={interactiveState}
            content={
              <div className="bg-neutral-900 px-2 text-white ">
                <p className="text-center font-MandatoryPlaything text-4xl md:text-6xl">
                  Coding
                </p>
                <br />
                <div className="break-words text-start text-lg md:text-4xl  ">
                  <p>
                    In 2020 I've tried a bit of HTML and CSS, to build my own website.
                  </p>
                  <br />
                  <p>
                    When 2022 started, I wanted to take Coding a bit more serious, to see
                    where it could take me. I refreshed my HTML & CSS and teached myself
                    JS. I was not really amazed by coding at that point. But my passion
                    towards coding definitely changed, when I started using React.
                  </p>
                  <br />
                  <p>
                    React really made me starting to enjoy coding and simply learning new
                    stuff on another gear. I also picked up ThreeJS, since I already have
                    vast 3D knowledge.
                  </p>
                  <p className="text-right text-base text-neutral-400 md:text-3xl">
                    Click outside of this box to exit
                  </p>
                </div>
              </div>
            }
          >
            <img src={SkillFrameCodingPic} className="w-[95vw]" />
          </Tippy>
        </>
      );
    }

    return (
      <div className="relative w-full flex-1 space-y-[8vh]   lg:bottom-[10vh] ">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={FrameVar}
          viewport={{ once: true, margin: '0px 0px 0px 0px' }}
          ref={motionRef}
          className="relative flex h-full w-auto justify-center"
        >
          {isMort && <DesignPic />}
          {BPlg && <Design />}
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={FrameVar}
          viewport={{ once: true, amount: .1 }}
          ref={motionRef}
          className="relative flex  w-auto justify-center"
        >
          {isMort && <D3Pic />}
          {BPlg && <D3 />}
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={FrameVar}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          ref={motionRef}
          className="relative flex h-full w-auto justify-center"
        >
          {isMort && <CodingPic />}
          {BPlg && <Coding />}
        </motion.div>
        {/* <img src={SkillFrameCodingPic} height={250} width={200}/>
          <img src={SkillFrameCodingPic} height={250} width={200}/> */}
        {/* <Lottie options={SFCoding} height={250} width={200} ref={lottieRef3} /> */}
      </div>
    );
  }

  return (
    <div className="relative w-full flex-1" ref={divRef}>
      <Title />

      <Frame />
    </div>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import SkillFrame3D from '../Images/SkillFrame3D.json';
import SkillFrameDesign from '../Images/SkillFrameDesign.json';
import SkillFrameCoding from '../Images/SkillFrameCoding.json';
import SkillFrameCodingPic from '../Images/SkillFrameCoding.png';
import SkillFrame3DPic from '../Images/SkillFrame3D.png';
import SkillFrameDesignPic from '../Images/SkillFrameDesign.png';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion, useScroll,} from 'framer-motion';
import SkillsTitle from '../Images/SkillsTitle.json';
import { useMediaQuery } from 'react-responsive';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/material.css';
import D3Prev1 from '../Images/GalleryPrev/1.jpg';
import D3Prev2 from '../Images/GalleryPrev/2.jpg';
import D3Prev3 from '../Images/GalleryPrev/3.jpg';
import D3Prev4 from '../Images/GalleryPrev/4.jpg';
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from 'react-router-dom';
export default function () {

  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });
  const BPlg = useMediaQuery({
    query: '(min-width: 976px)',
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
      <div className="relative flex h-auto  w-full justify-center  lg:bottom-[8vw] lg:mt-[5vw] lg:mb-[8vw] lg:h-[12.5vw] ">
        <Player
          src={SkillsTitle}
          speed={1.5}
          className="relative h-[20vw] w-[50vw]"
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

      return (
        <div
          className="containerR relative h-[30.5vw] w-[80vw] bg-red-400  "
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
              className="skillsPlayer relative w-[30vw]"
              ref={lottieRef}
              keepLastFrame={lastFrame}
            />
          </motion.div>
          <motion.p className="skillsTitle  font-Iceland " variants={FrameVar}>
            DESIGN
          </motion.p>
          <motion.div className="skillsText " variants={FrameVar}>
            <div>
              <div className="mr-[2vw] break-words ">
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
          </motion.div>
        </div>
      );
    }

    function D3() {
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
          className=" containerL border-gray-white relative h-[38vw] w-[80vw] border-[.5vw] bg-D3BG bg-cover"
          ref={divRef}
        >
          <motion.div
            onClick={lottieRepeat}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Player
              src={SkillFrame3D}
              speed={0.5}
              className="skillsPlayer relative left-[2vw] w-[30vw] pt-[.75vw]"
              ref={lottieRef}
              keepLastFrame={lastFrame}
            />
          </motion.div>
          <motion.div
            className="skillsTitle left-[2vw] font-Iceland font-bold"
            variants={FrameVar}
          >
            <p className="text-end ">3D</p>
          </motion.div>
          <motion.div className="skillsText left-[2vw] text-end" variants={FrameVar}>
            <div className="break-words text-end">
              <p>
                From 2020 till 2022, I've teached myself through videos and blogs, on how
                to work with various 3D Softwares.
              </p>

              <p className="relative top-[1vw]">
                My End goal was, to be able to create a fairly realistic Character, which
                is animatable through a propper Rig. In my latest project, I was able to
                create that Character.
              </p>
              <br />
              <Link to="/gallery" className="text-[2vw] text-sky-500">
                Check out my 3D Gallery
              </Link>
              <div className="relative top-[1vw] flex flex-row gap-[1vw]">
                <img className="relative h-[15vw] w-[15vw]" src={D3Prev1} />
                <img
                  className="relative h-[15vw] w-[15vw]"
                  src={D3Prev2}
                  height={200}
                  width={200}
                />
                <img
                  className="relative h-[15vw] w-[15vw]"
                  src={D3Prev3}
                  height={200}
                  width={200}
                />
                <motion.img
                  className="relative h-[15vw] w-[15vw] cursor-pointer"
                  src={D3Prev4}
                  height={200}
                  width={200}
                  onClick={() => navigate('/gallery')}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      );
    }

    function Coding() {
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

      return (
        <div
          className="containerR relative h-[34.5vw] w-[80vw] border-[.5vw] border-black bg-CodingBG bg-cover"
          ref={divRef}
        >
          <motion.div
            onClick={lottieRepeat}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Player
              src={SkillFrameCoding}
              speed={0.5}
              className="relative w-[30vw] pt-[1vw]"
              ref={lottieRef}
              keepLastFrame={lastFrame}
            />
          </motion.div>
          <motion.p
            className="skillsTitle  right-[.5vw] font-Iceland font-bold"
            variants={FrameVar}
          >
            CODING
          </motion.p>
          <motion.div className="skillsText " variants={FrameVar}>
            <div className="mr-[2vw] break-words">
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
          </motion.div>
        </div>
      );
    }

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
            onHide={() => interactiveStateSet(false)}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            interactive={interactiveState}
            content={
              <div className="bg-neutral-900 px-2 text-white ">
                <p className="text-center font-Iceland text-4xl font-bold md:text-6xl">
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
                </div>
              </div>
            }
          >
            <div className="relative flex flex-col content-center items-center justify-center">
              <img src={SkillFrameDesignPic} className="w-[95vw]" />

              <p className="pointer-events-none h-[15vw] w-[75vw] border-[1vw] border-pink-600 bg-zinc-800 text-center  font-Iceland text-[12vw] leading-[12vw]  text-white">
                {interactiveState && `CLOSE`} {interactiveState === false && `DETAILS`}
              </p>
            </div>
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
            offset={[0, -365]}
            trigger="click"
            maxWidth="700"
            animation="scale"
            theme="material"
            onShow={() => interactiveStateSet(true)}
            onHide={() => interactiveStateSet(false)}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            interactive={interactiveState}
            content={
              <div className="bg-neutral-900 px-2 text-white ">
                <p className="text-center font-Iceland text-4xl font-bold md:text-6xl">
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
                </div>
              </div>
            }
          >
            <div className="relative flex flex-col content-center items-center justify-center">
              <img src={SkillFrame3DPic} className="w-[95vw]" />

              <p className="pointer-events-none h-[15vw] w-[75vw] border-[1vw] border-purple-900 bg-zinc-800 text-center font-Iceland text-[12vw] leading-[12vw] text-white">
                {interactiveState && `CLOSE`} {interactiveState === false && `DETAILS`}
              </p>
            </div>
          </Tippy>
        </>
      );
    }

    function CodingPic() {
      const [interactiveState, interactiveStateSet] = useState(false);
      return (
        <div>
          <Tippy
            placement="top"
            offset={[0, -325]}
            trigger="click"
            maxWidth="700"
            animation="scale"
            theme="material"
            onShow={() => interactiveStateSet(true)}
            onHide={() => interactiveStateSet(false)}
            popperOptions={{ modifiers: [{ name: 'flip', enabled: false }] }}
            interactive={interactiveState}
            content={
              <div className="bg-neutral-900 px-2 text-white ">
                <p className="text-center font-Iceland text-4xl font-bold md:text-6xl">
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
                </div>
              </div>
            }
          >
            <div className="relative flex flex-col content-center items-center justify-center">
              <img src={SkillFrameCodingPic} className="w-[95vw]" />

              <p className="pointer-events-none h-[15vw] w-[75vw] border-[1vw] border-yellow-200 bg-zinc-800 text-center font-Iceland text-[12vw] leading-[12vw]  text-white">
                {interactiveState && `CLOSE`} {interactiveState === false && `DETAILS`}
              </p>
            </div>
          </Tippy>
        </div>
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
          viewport={{ once: true, amount: 0.1 }}
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

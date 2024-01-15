import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import Array from './SkillsArray';
import SkillsMiniFrameMap from './SkillsMiniFrameMap';

export default function Skills({ i, deRef, d3Ref, coRef }) {
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

  function Design() {
    const iconVar = {
      whilehover: {
        scale: 1.2,
      },
    };

    const divRef = useRef();
    const refs = [deRef, d3Ref, coRef];
    return (
      <div ref={divRef}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={refs[i]}
          className="  relative flex h-max w-full  flex-col gap-[10vw] lg:top-0 lg:h-[80vh]  "
        >
          <div className="relative left-[10vw]  z-10 flex h-max w-[80vw] flex-col gap-[2vw] overflow-hidden bg-[#f9ef02] bg-auto bg-left text-center lg:left-0 lg:top-[35px] lg:h-[240px] lg:w-[500px] lg:gap-[18px] lg:bg-opacity-0 lg:bg-SkillsTitleBG lg:text-start xl:h-[271px] xl:gap-[12px] xl:bg-cover  xxl:h-[300px] xxl:gap-[20px]">
            <p className="relative pt-[2vw] font-Oxanium text-[22px] font-semibold lg:left-[50px] lg:top-[12px] lg:p-0 lg:text-[40px] xl:text-[56px]">
              {Array[i].title}
            </p>
            <div className="relative flex justify-center lg:justify-start ">
              <div className="relative bottom-0 h-[1px] w-[70vw]  bg-black lg:left-[53px] lg:w-[30vw] "></div>
            </div>
            <p className="relative pl-[20px]  pr-[20px] font-Oxanium text-[14px] font-extralight sm:text-[16px]  lg:left-[50px] w-[400px]  lg:w-[400px] xl:w-[400px] lg:p-0  xl:text-[22px] xxl:text-[30px] xxl:leading-8">
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
              {Array[i].titleIcon8 ? (
                <a href={Array[i].titleIconLink8} target="_blank" rel="Ai">
                  <motion.img
                    variants={iconVar}
                    whileHover={'whilehover'}
                    src={Array[i].titleIcon8}
                    className="relative w-[30px] cursor-pointer "
                  />
                </a>
              ) : (
                false
              )}
              {Array[i].titleIcon9 ? (
                <a href={Array[i].titleIconLink9} target="_blank" rel="Ai">
                  <motion.img
                    variants={iconVar}
                    whileHover={'whilehover'}
                    src={Array[i].titleIcon9}
                    className="relative w-[30px] cursor-pointer "
                  />
                </a>
              ) : (
                false
              )}
              {Array[i].titleIcon10 ? (
                <a href={Array[i].titleIconLink10} target="_blank" rel="Ai">
                  <motion.img
                    variants={iconVar}
                    whileHover={'whilehover'}
                    src={Array[i].titleIcon10}
                    className="relative w-[30px] cursor-pointer "
                  />
                </a>
              ) : (
                false
              )}
              {Array[i].titleIcon11 ? (
                <a href={Array[i].titleIconLink11} target="_blank" rel="Ai">
                  <motion.img
                    variants={iconVar}
                    whileHover={'whilehover'}
                    src={Array[i].titleIcon11}
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
              className="   relative w-[80vw] border-2 border-[#f9ef02] lg:w-[950px] xl:w-[1000px] xxl:w-[1300px] "
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

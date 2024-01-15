import { motion } from 'framer-motion';
import AboutMeDesign from '../Images/AboutMe/AboutMeDesign.jpg';
import AboutMeD3 from '../Images/AboutMe/AboutMeD3.jpg';
import AboutMeCoding from '../Images/AboutMe/AboutMeCoding.jpg';
import AboutMeMobileDesign from '../Images/AboutMe/AboutMeMobileDesign.jpg';
import AboutMeMobileD3 from '../Images/AboutMe/AboutMeMobileD3.jpg';
import AboutMeMobileCoding from '../Images/AboutMe/AboutMeMobileCoding.jpg';
import { useMediaQuery } from 'react-responsive';
export default function AboutMe({ scrollToDesign, scrollTo3D, scrollToCoding }) {
  const BPsm = useMediaQuery({
    query: '(min-width: 540px)',
  });

  function Container() {
    return (
      <div>
        <div className=" relative left-[10vw] flex h-max w-[70vw]  flex-row flex-wrap gap-[10vw] pt-[70vw] pb-[20vw] opacity-100 lg:left-[0vw] lg:top-[300px] lg:gap-[4.4vw] lg:pt-[310px] lg:pb-[450px] ">
          <motion.div
            className="  relative  h-max   w-max border-[4px] border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:top-[8.9vw] lg:order-2  lg:border-[.3vw]"
            whileHover={{
              backgroundColor: '#ffffff',
              transition: { duration: 0.25 },
            }}
          >
            <p className="relative  h-max w-[78vw] pr-[20px] pt-[12px] pl-[20px] pb-[4px] text-[22px] font-semibold sm:text-[40px] lg:w-[31vw] ">
              ME MYSELF & I
            </p>
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] text-[22px] font-extralight leading-6 lg:w-[31vw] lg:pr-[2vw]">
              I'm a web developer based in Switzerland with full-stack capabilities. I'm
              dedicated to enhancing my skills and expanding my knowledge in the field. My
              goal is to use my expertise in web development to make a meaningful impact.
            </p>
          </motion.div>
          <motion.div
            className="  relative h-max  w-max cursor-pointer border-[4px] border-black  bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:order-1 lg:border-[.3vw]  "
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
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] text-[22px] font-extralight leading-6 lg:w-[31vw] lg:pr-[2vw]">
              Back in 2015, I began my journey in the world of graphical design, starting
              with Photoshop. Working in the TV industry as a graphic and motion designer,
              I had the privilege of crafting numerous flyers, posters, videos, and more.
              While my roots are in graphic design, my focus has since shifted towards web
              design.
            </p>
          </motion.div>

          <motion.div
            className="  relative h-max  w-max cursor-pointer border-[4px] border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:order-3 lg:border-[.3vw]"
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
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] text-[22px] font-extralight leading-6 lg:w-[31vw] lg:pr-[2vw]">
              In 2020, I delved into the exciting realm of Motion Design and 3D Art.
              Working with various 3D software has been an immensely rewarding experience.
              Notably, my exploration led me to Three.js, allowing me to seamlessly
              integrate my 3D expertise with front-end coding. Implementing 3D elements in
              React has been a transformative experience, opening up new possibilities and
              expanding my skillset.
            </p>
          </motion.div>
          <motion.div
            className=" relative h-max  w-max cursor-pointer  border-[4px] border-black bg-[#00ffd3] pb-[1vw] font-Oxanium opacity-100 lg:order-4 lg:border-[.3vw]"
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
            <p className="relative left-[20px] w-[78vw] pr-[50px] pb-[10px] text-[22px] font-extralight leading-6 lg:w-[31vw] lg:pr-[2vw]">
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

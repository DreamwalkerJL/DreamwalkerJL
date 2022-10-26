import './App.css';
import { useRef } from 'react';
import { Menu } from './Nav/Menu';
import Part1 from './Part1/Part1';
import { motion, useScroll } from 'framer-motion';
import Part2 from './Part2/Part2';
import ImgGalleryMobile from './Part3/ImgGalleryMobile';
import { useMediaQuery } from 'react-responsive';
import AboutMe from './AboutMe/AboutMe';
import { useNavigate } from 'react-router-dom';
import Skills from './Skills/Skills';
import SkillsMap from './Skills/SkillsMap';

function App() {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });

  const aboutMeRef = useRef();
  const skillsRef = useRef();
  const galleryRef = useRef();
  const navigate = useNavigate();

  function scrollToAboutMe() {
    aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToSkills() {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToGallery() {
    isMort
      ? galleryRef.current.scrollIntoView({ behavior: 'smooth' })
      : navigate('/gallery');
  }

  function sendMail() {
    window.location.href = 'mailto:joshua.lim@hotmail.ch';
  }

  function Footer() {
    return  (
 <div className='relative w-full h-[5vh] bg-[#f9ef02] '><div className="relative  z-10 flex h-[30px] w-full bg-[#f9ef02]  bg-BGFrameTop bg-left" /></div>
    )
  }

  return (
    <div>
      <div className="absolute h-full w-full">
        <div className="relative h-full w-full">
          <Part1 />
        </div>
        <div ref={aboutMeRef} className="">
          <AboutMe />
          {/* <Skills/> */}
          <div className="relative z-0  h-max  w-full  bg-SkillsBG  bg-cover bg-fixed bg-[center_top] bg-no-repeat pt-[250px]   ">
            <SkillsMap />
          </div>
          <div className="relative flex h-full w-full bg-white" />
        </div>
        {/* <div
          ref={skillsRef}
          className="part2BG relative flex h-auto w-[100] flex-row pb-40 lg:py-[5vw] lg:pb-2"
        >
          <Part2 />
        </div> */}
        {/* {isMort && (
          <div ref={galleryRef}>
            <ImgGalleryMobile />
          </div>
        )} */}
        <Footer />
      </div>
      <div>
        {/* <Menu
          scrollToAboutMe={scrollToAboutMe}
          scrollToSkills={scrollToSkills}
          scrollToGallery={scrollToGallery}
          sendMail={sendMail}
        /> */}
      </div>
    </div>
  );
}

export default App;

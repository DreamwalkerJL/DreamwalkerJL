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
  const skillsDesignRef = useRef();
  const skills3DRef = useRef();
  const skillsCodingRef = useRef();
  const skillsRef = useRef();
  const galleryRef = useRef();
  const navigate = useNavigate();

  function scrollToDesign() {
    skillsDesignRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollTo3D() {
    skills3DRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToCoding() {
    skillsCodingRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function sendMail() {
    window.location.href = 'mailto:joshua.lim@hotmail.ch';
  }

  function Footer() {
    return (
      <div className="relative h-[5vh] w-full bg-[#f9ef02] ">
        <div className="relative  z-10 flex h-[30px] w-full bg-[#f9ef02]  bg-BGFrameTop bg-left" />
      </div>
    );
  }

  return (
    <div>
      <div className="absolute h-full w-full">
        <div className="relative h-full w-full">
          <Part1 />
        </div>
        <div ref={aboutMeRef} className="">
          <AboutMe
            scrollToDesign={scrollToDesign}
            scrollTo3D={scrollTo3D}
            scrollToCoding={scrollToCoding}
          />

          <div className="relative z-0  h-max  w-full  bg-SkillsBG  bg-cover bg-fixed bg-[center_top] bg-no-repeat pt-[250px]   ">
            <SkillsMap
              deRef={skillsDesignRef}
              d3Ref={skills3DRef}
              coRef={skillsCodingRef}
            />
          </div>
          <div className="relative flex h-full w-full bg-white" />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

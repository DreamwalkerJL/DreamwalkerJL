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
    return isMort ? (
      <div
        onClick={sendMail}
        className="relative flex h-[125px]  w-full cursor-pointer items-center justify-center border-t-4 border-yellow-300 bg-black text-center text-[22px] text-white lg:h-[5vw]  lg:border-t-2 lg:text-[1.25vw]"
      >
        <p className="pointer-events-none">
          You can reach out to me via Mail - Joshua.lim@hotmail.ch
        </p>
      </div>
    ) : (
      <div className="relative   flex h-[5vw] w-full items-center justify-center border-t-2 border-yellow-300 bg-black text-center text-[1.25vw] text-white">
        <motion.p
          onClick={sendMail}
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer"
        >
          You can reach out to me via Mail - Joshua.lim@hotmail.ch
        </motion.p>
      </div>
    );
  }

  return (
    <div>
      <div className="absolute h-full w-full">
        <div className="relative h-full w-full">
          <Part1 />
        </div>
        <div ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div
          ref={skillsRef}
          className="part2BG relative flex h-auto w-[100] flex-row pb-40 lg:py-[5vw] lg:pb-2"
        >
          <Part2 />
        </div>
        {isMort && (
          <div ref={galleryRef}>
            <ImgGalleryMobile />
          </div>
        )}
        <Footer />
      </div>
      <div>
        <Menu
          scrollToAboutMe={scrollToAboutMe}
          scrollToSkills={scrollToSkills}
          scrollToGallery={scrollToGallery}
          sendMail={sendMail}
        />
      </div>
    </div>
  );
}

export default App;

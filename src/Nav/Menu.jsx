import { motion, useCycle } from 'framer-motion';
import * as React from 'react';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MenuItem } from './MenuItem';
import { MenuToggle } from './MenuToggle';
import { useDimensions } from './use-dimensions';



export const Menu = ({scrollToAboutMe, scrollToSkills, scrollToGallery, sendMail}) => {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });
  const variants = {
    open: (height = 300) => ({
      clipPath: `polygon(-50% 80%,-50% -10%,150% -10%, 100% 60%)`,
      transition: {
        type: 'linear',

        duration: .65,
      },
      
    }),
    closed: {
      clipPath: 'polygon(20% 10%,10% 2.5%,30% 2.5%, 20% 10%)',
      transition: {
        type: 'linear',
        duration: .5,
      },
    },
  };
  const variantsMobile = {
    open: (height = 300) => ({
      clipPath: `polygon(-50% 80%,-50% -10%,150% -10%, 100% 60%)`,
      transition: {
        type: 'linear',

        duration: 0,
      },
      
    }),
    closed: {
      clipPath: 'polygon(20% 10%,10% 2.5%,30% 2.5%, 20% 10%)',
      transition: {
        type: 'linear',
        duration: 0,
      },
    },
  };
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  function whichVarDevice() {
    return isMort ? variantsMobile : variants
   }
  return (
    <div className="fixed z-50">
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className="w-[0px]   top-0
          left-0
          bottom-0  "
      >
        <motion.div
          className="fixed bg-[#ad2aad]   w-[300px] h-[900px]  top-0
            
            bottom-0 outline-[12px] outline-offset-[6px] outline-[#fff45e] outline-double"
          variants={whichVarDevice()}
          onClick={()=> toggleOpen}
        />

        <MenuItem isOpen={isOpen} toggleOpen={toggleOpen} scrollToAboutMe={scrollToAboutMe} scrollToSkills={scrollToSkills} scrollToGallery={scrollToGallery} sendMail={sendMail}/>

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

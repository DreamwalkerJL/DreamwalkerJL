import { motion } from 'framer-motion';
import * as React from 'react';
import tw from 'twin.macro';

const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,

    transition: {
      y: { type: 'spring', stiffness: 1200, velocity: -1, delay: 2.5 },
      duration: 1,
    },
  },
  closed: {
    y: 0,
    x: -100,

    opacity: 0,
    transition: {
      y: { type: 'spring', stiffness: 200, delay: 1.5 },
    },
  },
};
const colors = ['#00c3ff', '#09d3e1', '#1affa0', '#00ff22', '#33ff00'];

export const MenuItem = ({
  isOpen,
  scrollToAboutMe,
  scrollToSkills,
  scrollToGallery,
  sendMail,
}) => {
  const Titles = ['Home', 'About Me', 'Skills', 'Gallery'];

  return (
    <motion.div
      variants={variants}
      className="relative top-28 left-6 flex w-12 flex-col gap-12"
      css={[
        tw``, // Add base styles first
        isOpen === false && tw`pointer-events-none`, // Then add conditional styles
      ]}
    >
      <motion.div
        className="text-placeholder relative border-2 border-[#09d3e1]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <div className="pointer-events-none items-center justify-center text-center align-middle font-MandatoryPlaything text-4xl">
          {Titles[0]}
        </div>
      </motion.div>
      <motion.div
        className="text-placeholder relative border-2 border-[#1affa0]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToAboutMe}
      >
        <div className="pointer-events-none items-center justify-center text-center align-middle font-MandatoryPlaything text-4xl">
          {Titles[1]}
        </div>
      </motion.div>
      <motion.div
        className="text-placeholder relative border-2 border-[#00ff22]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToSkills}
      >
        <div className="pointer-events-none items-center justify-center text-center align-middle font-MandatoryPlaything text-4xl">
          {Titles[2]}
        </div>
      </motion.div>
      <motion.div
        className="text-placeholder relative border-2 border-[#33ff00]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToGallery}
      >
        <div className="pointer-events-none items-center justify-center text-center align-middle font-MandatoryPlaything text-4xl">
          {Titles[3]}
        </div>
      </motion.div>
      <motion.div
        className="relative w-[150px] cursor-pointer border-2 border-[#33ff00] bg-black text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={sendMail}
      >
        <div className="pointer-events-none items-center justify-center text-center align-middle font-MandatoryPlaything text-2xl">
          <p>@ Mail Me</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

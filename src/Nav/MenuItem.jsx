import { motion } from 'framer-motion';
import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import tw from 'twin.macro';

export const MenuItem = ({
  isOpen,
  scrollToAboutMe,
  scrollToSkills,
  scrollToGallery,
  sendMail,
  toggleOpen,
}) => {
  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });

  const variants = {
    open: {
      y: 0,
      x: 0,
      opacity: 1,

      transition: {
        y: { type: 'linear', delay: 2.5 },
        duration: 1,
      },
    },
    closed: {
      y: 0,
      x: -100,

      opacity: 0,
      transition: {
        y: { type: 'linear', delay: 1.5 },
        duration: .3
      },
    },
  };

  const variantsMobile = {
    open: {
      y: 0,
      x: 0,
      opacity: 1,

      transition: {
        y: { type: 'linear', delay: 2.5 },
        duration: 0,
      },
    },
    closed: {
      y: 0,
      x: 0,

      opacity: 0,
      transition: {
        y: { type: 'linear', delay: 1.5 },
        duration: 0,
      },
    },
  };
  const colors = ['#00c3ff', '#09d3e1', '#1affa0', '#00ff22', '#33ff00'];

  const Titles = ['Home', 'About Me', 'Skills', 'Gallery'];

  function whichVarDevice() {
   return isMort ? variantsMobile : variants
  }
  return (
    <motion.div
      variants={whichVarDevice()}
      className="relative top-28 left-6 flex w-12 flex-col gap-12"
      css={[
        tw``, // Add base styles first
        isOpen === false && tw`pointer-events-none`, // Then add conditional styles
      ]}
    >
      <motion.div
        className="text-placeholder relative border-2 border-[#5681c0]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' }), toggleOpen();
        }}
      >
        <div className="font-MandatoryPlaything pointer-events-none items-center justify-center text-center align-middle text-4xl">
          {Titles[0]}
        </div>
      </motion.div>
      <motion.div
        className="text-placeholder relative border-2 border-[#4b7bc4]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          scrollToAboutMe(), toggleOpen();
        }}
      >
        <div className="font-MandatoryPlaything pointer-events-none items-center justify-center text-center align-middle text-4xl">
          {Titles[1]}
        </div>
      </motion.div>
      <motion.div
        className="text-placeholder relative border-2 border-[#3f74c2]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          scrollToSkills(), toggleOpen();
        }}
      >
        <div className="font-MandatoryPlaything pointer-events-none items-center justify-center text-center align-middle text-4xl">
          {Titles[2]}
        </div>
      </motion.div>
      <motion.div
        className="text-placeholder relative border-2 border-[#2c68c2]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          scrollToGallery(), toggleOpen();
        }}
      >
        <div className="font-MandatoryPlaything pointer-events-none items-center justify-center text-center align-middle text-4xl">
          {Titles[3]}
        </div>
      </motion.div>
      <motion.div
        className="relative w-[150px] cursor-pointer border-2 border-[#1c5fc4] bg-black text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          sendMail(), toggleOpen();
        }}
      >
        <div className="font-MandatoryPlaything pointer-events-none items-center justify-center text-center align-middle text-2xl">
          <p>@ Mail Me</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

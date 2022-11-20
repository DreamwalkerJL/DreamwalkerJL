import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Skills from './Skills';
import SkillsMiniFrame from './SkillsMiniFrame';
import { motion, useScroll } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
export default function SkillsMF({ mainI }) {

  const isMort = useMediaQuery({
    query: '(max-width: 976px)',
  });

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

  function frameAmounts() {
    if (mainI === 0) {
      return 3;
    } else if (mainI === 1) {
      return 1;
    } else if (mainI === 2 && isMort) {
      return 1;
    } else if (mainI === 2) {
      return 3;
    } else {
      return 0;
    }
  }
  const [mf, setmf] = useState(mfElArray());
  const mfEl = mf.map((skill) => (
    <SkillsMiniFrame key={skill.id} i={skill.i} mainI={mainI} />
  ));
  function mfElArray() {
    const Array = [];
    for (let i = 0; i < frameAmounts(); i++) {
      Array.push({
        i: i,
        id: nanoid(),
      });
    }
    return Array;
  }

  return (
    <motion.div
      variants={Var}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: '50px' }}
      className="relative  flex  w-full flex-col  items-center gap-[5vw] lg:absolute lg:top-[58vh] lg:right-[7vw] lg:w-max lg:flex-row lg:items-start lg:gap-[2vw] xxl:top-[50vh] xxl:gap-[1vw]"
    >
      {mfEl}
    </motion.div>
  );
}

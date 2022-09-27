import { motion, useCycle } from 'framer-motion';
import * as React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Pic from '../Images/checker.png';
import { MenuItem } from './MenuItem';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';
import { useDimensions } from './use-dimensions';

const sidebar = {
  open: (height = 300) => ({
    clipPath: `polygon(-50% 80%,-50% -10%,150% -10%, 100% 60%)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 0,
    },
  }),
  closed: {
    clipPath: 'polygon(20% 10%,10% 2.5%,30% 2.5%, 20% 10%)',
    transition: {
      type: 'spring',
      stiffness: 30,
      damping: 15,
      restDelta: 0,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="fixed ">
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
          className="fixed bg-[#2e2e2e]   w-[300px]   top-0
            left-0
            bottom-0 pointer-events-none outline-[12px] outline-offset-[6px] outline-[#2e2e2e] outline-double"
          variants={sidebar}
        />

        <Navigation isOpen={isOpen} />

        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};

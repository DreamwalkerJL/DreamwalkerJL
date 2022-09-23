import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { MenuItem } from './MenuItem';

export function Navigation({ isOpen }) {
  const [nav, navSet] = React.useState();

  const Nav = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div
      css={[
        tw``, // Add base styles first
        isOpen === false && tw`pointer-events-none`, // Then add conditional styles
      ]}
    >
      <motion.ul variants={Nav}>
        {itemIds.map((i) => (
          <MenuItem i={i} key={i} />
        ))}
      </motion.ul>
    </div>
  );
}

const itemIds = [0, 1, 2, 3, 4];

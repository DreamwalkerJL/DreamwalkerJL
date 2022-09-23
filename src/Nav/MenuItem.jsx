import { motion } from 'framer-motion';
import * as React from 'react';
import Lottie from 'react-lottie';

import NightSky from '../Images/NightSky.json';
const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,

    transition: {
      y: { type: 'spring', stiffness: 1200, velocity: -1, delay: 1.5 },
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

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };

  const lottieRef = React.useRef();
  console.log(lottieRef);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NightSky,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const Icons = [
    <Lottie options={defaultOptions} height={50} width={50} ref={lottieRef} />,
  ];

  const Titles = ['Home'];
  return (
    <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <div className="icon-placeholder" style={style}>
        {Icons[i]}
      </div>
      <div className="text-placeholder" style={style}>
        {Titles[i]}
      </div>
    </motion.li>
  );
};

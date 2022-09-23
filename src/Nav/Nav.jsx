import React from 'react';
import { useMediaQuery } from 'react-responsive';

import NavImg from '../Images/Nav.png';
export default function Nav() {
  function Test() {
    return <h1>HEEEEEEEEEEEELLLLLLLLLOOOOOOOOOOOOOOOO</h1>;
  }

  const Desktop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const BigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const MaxTablet = useMediaQuery({ query: '(max-width: 1224px)' });
  const NotPhone = useMediaQuery({ query: '(min-width: 800px)' });

  return (
    <div>
      <div className="absolute left-0 top-0 w-[1920px] h-full pointer-events-none">
        {NotPhone && (
          <img
            src={NavImg}
            alt="NavBG"
            className="relative left-0 top-0 w-[1920px] h-full"
          />
        )}
        <div className="h-20 w-full absolute bg-white"></div>
      </div>{' '}
      <div className="absolute left-[3vw] top-[1vh] flex gap-10 justify-center align-middle items-center">
        <p
          className="relative text-blue-300 text-[20px] sm:text-[2rem]  font-Namita"
          onClick={() => console.log('hello')}
        >
          Home
        </p>
        <p
          className="relative text-blue-300 text-[20px] sm:text-[2rem]  font-Namita"
          onClick={() => console.log('hello')}
        >
          Skills
        </p>
        <p
          className="relative text-blue-300 text-[20px] sm:text-[2rem]  font-Namita"
          onClick={() => console.log('hello')}
        >
          Art
        </p>
        <p
          className="relative text-blue-300 text-[20px] sm:text-[2rem]  font-Namita"
          onClick={() => console.log('hello')}
        >
          About Me
        </p>
      </div>
    </div>
  );
}

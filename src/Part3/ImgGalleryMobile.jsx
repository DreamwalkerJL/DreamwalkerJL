import React, { useEffect, useRef, useState } from 'react';
import { Gallery } from './Gallery';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Lazy,
  Autoplay,
  Zoom,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/zoom';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import { motion, useScroll, useInView } from 'framer-motion';
import GalleryTitle from '../Images/GalleryTitle.json';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import tw from 'twin.macro';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Exit from '../Images/Exit.jpg'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"
export default function ImgGalleryMobile() {
  function Title() {
    const lottieRef = useRef();
    const { scrollYProgress } = useScroll();
    useEffect(() => {
      scrollYProgress.onChange((latest) => {
        lottieRef.current && latest > 0.1 && lottieRef.current.play();
      });
    }, []);
    return (
      <div className="relative left-[9vw] flex  h-[50vw] w-[80vw] justify-center  lg:h-[80vh] ">
        <Player
          src={GalleryTitle}
          speed={1.5}
          className="relative h-full w-full "
          ref={lottieRef}
          keepLastFrame
        />
      </div>
    );
  }
  
    function GalleryMob() {
      const handle = useFullScreenHandle();


    console.log(Swiper);

    const [swiperState, swiperStateSet] = useState(1);

    return (
      <div >
        <FullScreen
          handle={handle}
          css={[handle.active ? tw`visible` : tw`invisible h-1 w-1`]}

        >

            <img className=' relative py-[2vh] max-h-[15vh]' src={Exit} onClick={handle.exit}/>
   
          <TransformWrapper centerOnInit>
            <TransformComponent wrapperClass='tester' contentClass='tester' contentStyle={{position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}} wrapperStyle={{position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>

              
                <div    css={[handle.active ? tw`visible` : tw`invisible h-1 w-1`]} className='relative w-[100vw] h-[100vh] bg-[#0f0f0f]'>
                  <img
                    className="relative max-h-full py-[4vh] "
                    src={Gallery[3][swiperState]}
                  
                  />
                </div>
           
            </TransformComponent>
          </TransformWrapper>
   
        </FullScreen>
        
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Lazy,
            Autoplay,
            Zoom,
            
          ]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) =>
            swiper.activeIndex < swiper.previousIndex
              ? swiperStateSet((prev) => prev - 1)
              : swiperStateSet((prev) => prev + 1)
          }
          lazy
       
    
        
       
          onClick={handle.enter}
        >
          
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][1]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][2]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][3]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][4]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][5]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][6]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][7]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][8]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][9]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][10]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][11]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][12]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][13]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][14]}
              width={200}
              height={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="relative h-full w-full"
              src={Gallery[2][15]}
              width={200}
              height={100}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }



            
  return (
    <div className="relative top-[2px] bg-[#1E1E1E]">
      <Title />

      <GalleryMob />




    </div>
  );
}

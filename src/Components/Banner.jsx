import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import laptop from '../assets/Laptop.jpg'
import klaviatura from '../assets/Klaviatura.png'
import klaviatura2 from '../assets/Klavoatura2.png'
import mouse from '../assets/Mouse.png'
import chair from '../assets/Chair.png'
import car from '../assets/Car.png'
import virtual from '../assets/Virtual.png'
import football from '../assets/Football.jpg'
import klaviatura3 from '../assets/Klaviatura3.png'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Grid2x2, PlayCircle } from "lucide-react";
import { Settings } from "lucide-react";
import { MonitorSpeaker } from "lucide-react";


export default function App() {
  return (
    <div>
      <div>
        <header>
          <div className='container'>
            <div>
             
              <div>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="w-full h-full object-cover" src={laptop} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={klaviatura} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={klaviatura2} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={mouse} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={chair} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={car} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={virtual} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={football} alt="" /></SwiperSlide>
        <SwiperSlide><img className="w-full h-full object-cover" src={klaviatura3} alt="" /></SwiperSlide>
      </Swiper>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}


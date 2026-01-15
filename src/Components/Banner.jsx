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
              <div className='flex gap-[25px] items-center mt-[50px] mb-[10px]'>
                <div className='flex bg-pink-500 py-[10px] px-[20px]'>
                  <Grid2x2 className='w-[30px] h-[30px] text-[#fff]' />
                  <p className=' pl-[10px] text-[#fff]'>Каталог</p>
                </div>
                <div className='flex items-center'>
                  <Settings className='w-[35px] h-[35px] text-pink-500' />
                  <p className='pl-[10px]'>Конфигуратор</p>
                </div>
                <div className='flex items-center'>
                  <MonitorSpeaker className='w-[35px] h-[35px] text-pink-500' />
                  <p className='pl-[10px]'>Купить компьютер</p>
                </div>
                <p>Новинки</p>
                <p>Скидки на ноутбуки</p>
                <p className='font-[700] underline underline-offset-4 decoration-pink-500'>НуpеrХ</p>
                <p className=' underline underline-offset-4 decoration-pink-500'>Все вренды</p>
              </div>
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



      import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import burger from '../assets/burger.jpg'


// import required modules
import { Scrollbar } from 'swiper/modules';
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

        scrollbar={{
          hide: true,
        }}
        
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
        <SwiperSlide><img src={burger} alt="" /></SwiperSlide>
      </Swiper>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}


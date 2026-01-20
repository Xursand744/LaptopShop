import React from "react";
import imgnav from "../assets/navimg.png";
import { MessageSquare } from "lucide-react";
import { MapPin } from "lucide-react";
import insagram from '../assets/insagram.avif'
import telegram from '../assets/telegram.png'
import tiktok from '../assets/tiktok.jpg'
import youtube from '../assets/youtube.jpg'
export default function Footer() {
  return (
    <div className=" mt-20 bg-[#f1f1f1]">
      <footer className="  ">
        <div className="container flex items-start justify-between gap-10 px-10 py-10">
        <img
          src={imgnav}
          alt="logo"
          className="w-[150px] h-auto flex-shrink-0"
        />

        <div className="flex w-full justify-between gap-10 flex-wrap">
          <div className="text-black">
            <p className="mb-2 text-[20px] font-semibold">Компания</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">Контакты</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">О нас</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">
              Почему мы?
            </p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">
              Публичная оферта
            </p>
          </div>

          <div>
            <p className="mb-2 text-[20px] font-semibold">Услуги</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">Апгрейд</p>
          </div>

          <div>
            <p className="mb-2 text-[20px] font-semibold">Поддержка</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">Доставка</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">
              Способ оплаты
            </p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">FAQ</p>
          </div>

          <div>
            <p className="mb-2 text-[20px] font-semibold">Проекты</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">Блогеры</p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">
              Игровые клубы
            </p>
            <p className="mb-1 hover:text-gray-500 cursor-pointer">
              Киберспорт
            </p>
          </div>

          <div className="max-w-[400px]">
            <h1 className="flex items-center gap-2 text-[20px] font-semibold mb-2">
              <MessageSquare />
              Телефоны
            </h1>
            <p>+998 (93) 709-02-25</p>
            <p className="mb-4">+998 (91) 275-06-76</p>

            <p className="flex items-center gap-2 mb-2 font-semibold">
              <MapPin />
              Адреса
            </p>
            <p className="mb-4 text-sm">
              г. Ташкент, ул. Навои 37 г. Ташкент, ТРЦ Малика, Магазин 24
            </p>

            <p className="flex items-center gap-2 mb-2 font-semibold">
              <MapPin />
              Режим работы
            </p>
            <p className="text-sm">Ежедневно с 10:00 до 20:00</p>
          </div>
        </div >
        </div>
         <div className="container border-[1px] border-[red] mb-[20px]">
            
         </div>

        <div className="container flex justify-between pb-[50px] ">
          <div className="flex gap-[10px]">
            <img className="w-[50px]" src={insagram} alt="" />
            <div className="text-[14px] text-[#ff0096]">
            <p>Instagram</p>
            <p>187 тыс. подписчиков</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img className="w-[50px]" src={youtube} alt="" />
            <div className="text-[14px] text-[#ff0096]">
            <p>YouTube</p>
            <p>187 тыс. подписчиков</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img className="w-[50px]" src={telegram} alt="" />
            <div className="text-[14px] text-[#ff0096]">
            <p>Telegram</p>
            <p>187 тыс. подписчиков</p>
            </div>
          </div>
          <div className="flex gap-[10px]">
            <img className="w-[50px]" src={tiktok} alt="" />
            <div className="text-[14px] text-[#ff0096]">
            <p>TikTok</p>
            <p>187 тыс. подписчиков</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

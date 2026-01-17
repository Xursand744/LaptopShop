import React from "react";
import imgnav from "../assets/navimg.png";
import { Wallet } from "lucide-react";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { SlidersVertical } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Sun } from "lucide-react";
import { CircleUser } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="mt-5">
      <div className=" container  flex justify-between items-center ">
        <a href="#!" className="flex items-center  ">
          <img className="w-[157px]" src={imgnav} na alt="" />
        </a>
        <li className="relative w-[400px] list-none">
          <input
            type="text"
            placeholder="Поиск товаров..."
            className="w-full h-[36px] px-3 pr-10 py-2 border border-black outline-none rounded "
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 " />
        </li>
        <ul className="flex gap-[20px]">
          <li className="w-[72px] flex flex-col items-center justify-center ">
            <Wallet className="mb-1" />
            <a href="#!" className="text-sm font-medium ">
              UZS/USD
            </a>
          </li>
          <li className="w-[72px] flex flex-col items-center justify-center">
            <SlidersVertical className="mb-1" />
            <a href="#!" className="text-sm font-medium ">
              Сравненение
            </a>
          </li>
          <li className="w-[72px] flex flex-col items-center justify-center">
            <Heart className="mb-1 text-gray-500 hover:bg-red-500" />
            <a href="#!" className="text-sm font-medium">
              Избранное
            </a>
          </li>
          <li className="w-[72px] flex flex-col items-center justify-center">
            <ShoppingCart className="mb-1" />
            <a href="#!" className="text-sm font-medium">
              Корзина
            </a>
          </li>
          <li className="w-[72px] flex flex-col items-center justify-center">
            <MessageSquare className="mb-1" />
            <a href="#!" className="text-sm font-medium">
              Контакты
            </a>
          </li>
          <li className="w-[72px] flex flex-col items-center justify-center">
            <Sun className="mb-1" />
            <a href="#!" className="text-sm font-medium">
              Тема
            </a>
          </li>
          <li
            className="w-[72px] h-[62px] flex flex-col items-center justify-center bg-[#fdfdfd] 
          border-2 "
          >
            <a href="#!" className="text-sm font-medium ">
              <CircleUser className="mb-1 " />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

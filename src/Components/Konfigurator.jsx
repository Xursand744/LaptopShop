import React from 'react'
import Block from "../assets/block.png"

export default function Konfigurator() {
  return (
    <div className='container'>
      <section className="w-full bg-white mt-[-170px] mb-14">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className='mt-[384px]'>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            КОНФИГУРАТОР
          </h1>

          <p className="text-gray-600 max-w-xl mb-8">
            Конфигуратор системного блока UPGrade поможет подобрать
            комплектацию ПК и проверить комплектующие на совместимость.
            Выбирайте, сравнивайте характеристики, заказывайте дополнительные
            опции для создания конфигурации своей мечты!
          </p>

          <button className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-md transition">
            Подобрать ПК
            <span className="text-lg">→</span>
          </button>
        </div>

        <div className=" flex justify-center mt-[300px] w-[650px] h-[650px] " >
       
          <img
            src={Block}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>

      </div>
    </section>
    </div>
  )
}

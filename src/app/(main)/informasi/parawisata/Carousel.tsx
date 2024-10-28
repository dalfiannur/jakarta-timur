"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const settings = {
  className: "center",
  centerMode: true,
  slidesToShow: 3,
  speed: 500,
  infinite: true,
};

export const Carousel = ({ items }: { items: any[] }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="relative px-4">
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-2xl"
              />
              <div className="bg-gradient-to-b from-transparent to-black/30 absolute inset-0 rounded-2xl" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-10 py-6">
              <div className="bg-white rounded-2xl flex justify-between items-center p-4">
                <div className="text-pink-500 font-semibold">{item.title}</div>
                <button className="text-white bg-pink-500 px-2 py-1 text-sm rounded-lg font-medium">
                  Lihat Rute
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

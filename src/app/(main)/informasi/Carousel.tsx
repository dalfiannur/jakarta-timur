"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactNode } from "react";

const settings = {
  className: "center",
  centerMode: true,
  centerPadding: "420px",
  slidesToShow: 1,
  speed: 500,
  infinite: true,
};

export const Carousel = <T,>({
  items,
  renderItem,
}: {
  items: T[];
  renderItem: (item: T) => ReactNode;
}) => {
  return (
    <div className="slider-container">
      {/* @ts-expect-error Invalid type */}
      <Slider {...settings}>{items.map((item) => renderItem(item))}</Slider>
    </div>
  );
};

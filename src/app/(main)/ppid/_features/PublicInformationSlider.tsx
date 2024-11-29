"use client";

import Slider from "react-slick";
import { PublicInformationItem } from "../_components/PublicInformationItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const rows = [1, 2, 3, 4, 5];

export const PublicInformationSlider = () => {
  return (
    <Slider
      arrows={false}
      dots
      slidesToShow={5}
      centerPadding="60px"
      responsive={[
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
          },
        },
      ]}
    >
      {rows.map((_, index) => (
        <div key={index} className="px-2">
          <PublicInformationItem />
        </div>
      ))}
    </Slider>
  );
};

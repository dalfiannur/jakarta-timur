"use client";
import _ from "lodash";
import { GalleryItem } from "./GalleryItem";
import { NewsPhoto } from "@/types/news-photo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GallerySlider = ({ data }: { data: NewsPhoto[] }) => {
  const chunk = _.chunk(data, 5);

  return (
    <div>
      <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        {chunk.map((c, cIndex) => (
          <div key={cIndex}>
            <div className="grid grid-cols-4 gap-6">
              {c.map((item, index) => (
                <GalleryItem
                  key={index}
                  id={item.id}
                  isPrimary={index === 0}
                  title={item.title}
                  image={item.img_url}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

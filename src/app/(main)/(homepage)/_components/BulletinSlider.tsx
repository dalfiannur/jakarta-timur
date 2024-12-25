"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import _ from "lodash";
import { Bulletin } from "@/services/api/bulletin";

export const BulletinSlider = ({ data }: { data: Bulletin[] }) => {
  const chunks = _.chunk(data, 4);

  return (
    <div className="pb-8">
      <Slider slidesToShow={1} slidesToScroll={1} dots infinite>
        {chunks.map((items, cIndex) => (
          <div key={cIndex}>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
              {items.map((item, index) => (
                <div key={index}>
                  <Link href={`/publikasi/buletin/${item.id}`}>
                    <div className="relative aspect-[7/9]">
                      <Image
                        src={item.img_url}
                        alt={item.title}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>
                    <h6 className="mt-2 font-plus-jakarta-sans text-base font-semibold lg:mt-6 lg:text-xl">
                      {item.title}
                    </h6>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

"use client";
import Image from "next/image";
import Link from "next/link";
import { Bulletin } from "@/types/bulletin";
import Slider from "react-slick";
import _ from "lodash";

export const BulletinSlider = ({ data }: { data: Bulletin[] }) => {
  const chunks = _.chunk(data, 4);

  return (
    <div className="pb-8">
      {/* @ts-expect-error invalid */}
      <Slider slidesToShow={1} slidesToScroll={1} dots infinite>
        {chunks.map((items, cIndex) => (
          <div key={cIndex}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {items.map((item, index) => (
                <div key={index}>
                  <Link href={`/publikasi/buletin/${item.id}`}>
                    <div className="aspect-[7/9] relative">
                      <Image
                        src={item.img_url}
                        alt={item.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <h6 className="mt-2 lg:mt-6 font-semibold font-plus-jakarta-sans text-base lg:text-xl">
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

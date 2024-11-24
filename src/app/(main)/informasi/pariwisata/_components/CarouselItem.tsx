"use client";
import { Icon } from "@/app/icons";
import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useState } from "react";

export const CarouselItem = ({
  image,
  title,
  address,
  routes,
}: {
  image: string;
  title: string;
  address: string;
  routes: {
    type: string;
    label: string;
  }[];
}) => {
  const [opened, setOpened] = useState(false);

  const toggle = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  return (
    <div className="relative px-2 md:px-6">
      <div className="relative aspect-square h-72 md:h-96 lg:h-[676px]">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-2xl object-cover"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/30" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-6 md:px-10">
        <motion.div animate={{ height: opened ? "auto" : 60 }}>
          <div className="flex h-fit flex-col items-center justify-between gap-2 rounded-2xl bg-white p-2 md:flex-row md:gap-4 md:p-4">
            <div className="flex-1">
              <div
                data-opened={opened}
                className="line-clamp-1 text-sm font-semibold text-pink-500 data-[opened=true]:line-clamp-4 md:text-base"
              >
                {title}
              </div>
              <motion.div
                animate={{
                  height: opened ? "auto" : 0,
                  opacity: opened ? 1 : 0,
                }}
                style={{
                  overflow: "hidden",
                }}
              >
                <div className="mt-1 flex gap-2 border-b">
                  <div className="mt-1">
                    <Icon name="GoogleMapColored" className="h-2 w-2" />
                  </div>
                  <div className="pb-2 text-xs text-gray-500">{address}</div>
                </div>
                <div className="mt-2">
                  <div className="text-xs">Rute Perjalanan</div>
                  <ul className="mt-2 flex flex-col gap-1 lg:gap-2 ">
                    {routes.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 text-xs lg:text-base"
                      >
                        <div className="mt-1 text-pink-500">
                          <Icon name="MapMarkerAlt" className="w-[14px]" />
                        </div>
                        <div>
                          {item.type}: {item.label}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
            <button
              className="w-full whitespace-nowrap rounded-lg bg-pink-500 px-2 py-2 text-xs font-medium text-white md:w-auto md:text-sm lg:w-[150px]"
              onClick={toggle}
            >
              {opened ? "Tutup" : "Lihat Rute"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

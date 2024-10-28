"use client";
import { Icon } from "@/app/icons";
import { motion } from "framer-motion";
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
    <div className="relative px-4">
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
        />
        <div className="bg-gradient-to-b from-transparent to-black/30 absolute inset-0 rounded-2xl" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-10 py-6">
        <motion.div
          className="bg-white rounded-2xl flex justify-between gap-4 items-center p-4 h-fit"
          animate={{ height: opened ? "auto" : 60 }}
        >
          <div className="flex-1">
            <div className="text-pink-500 font-semibold">{title}</div>
            <motion.div
              animate={{ height: opened ? "auto" : 0, opacity: opened ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="mt-1 flex gap-2 border-b">
                <div className="mt-1">
                  <Icon name="GoogleMapColored" size={8} />
                </div>
                <div className="pb-2 text-xs text-gray-500">{address}</div>
              </div>
              <div className="mt-2">
                <div className="text-xs">Rute Perjalanan</div>
                <ul className="mt-1 flex flex-col gap-2">
                  {routes.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 text-pink-500">
                        <Icon name="MapMarkerAlt" size={14} />
                      </div>
                      <div>
                        {item.type}: {item.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          <button
            className="text-white bg-pink-500 px-2 py-2 w-[150px] text-sm rounded-lg font-medium whitespace-nowrap"
            onClick={toggle}
          >
            {opened ? "Tutup" : "Lihat Rute"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

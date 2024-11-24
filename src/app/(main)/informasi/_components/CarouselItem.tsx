"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { ReactNode, useCallback, useState } from "react";

type DataItem = {
  image: string;
  title: string;
  address: string;
  description: string;
  routes: {
    type: string;
    label: string;
  }[];
};

type CarouselItemProps<T> = {
  data: T;
  buttonLabel: string;
  detailRender: (data: T) => ReactNode;
};

export const CarouselItem = <T extends Partial<DataItem>>({
  data,
  buttonLabel,
  detailRender,
}: CarouselItemProps<T>) => {
  const [opened, setOpened] = useState(false);

  const toggle = useCallback(() => {
    setOpened((prev) => !prev);
  }, []);

  return (
    <div className="relative px-2 md:px-6">
      <div className="relative aspect-square h-72 md:h-96 lg:h-[676px]">
        {data.image && (
          <Image
            src={data.image}
            alt={data.title ?? ""}
            fill
            className="rounded-2xl object-cover"
          />
        )}
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
                {data.title}
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
                {detailRender(data)}
              </motion.div>
            </div>
            <button
              className="w-full whitespace-nowrap rounded-lg bg-pink-500 px-2 py-2 text-xs font-medium text-white md:w-auto md:text-sm lg:w-[150px]"
              onClick={toggle}
            >
              {opened ? "Tutup" : buttonLabel}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

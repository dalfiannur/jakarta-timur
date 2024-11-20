"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useState } from "react";

export const CarouselItem = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
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
        <motion.div animate={{ height: opened ? "auto" : 60 }}>
          <div className="bg-white rounded-2xl flex justify-between gap-4 items-center p-4 h-fit">
            <div className="flex-1">
              <div className="text-pink-500 font-semibold flex items-center">
                {title}
              </div>
              <AnimatePresence>
                {opened && (
                  <motion.div
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={{
                      show: { height: "auto", opacity: 1 },
                      hide: { height: 0, opacity: 0 },
                    }}
                    style={{
                      overflow: "hidden",
                      backgroundColor: "rgb(0 0 0 / 0.8)",
                      marginTop: 8,
                    }}
                  >
                    {description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              className="text-white bg-pink-500 px-2 py-2 w-[150px] text-sm rounded-lg font-medium whitespace-nowrap"
              onClick={toggle}
            >
              {opened ? "Tutup" : "Lihat Detail"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

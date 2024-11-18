"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  Computed,
  useObservable,
  useObserveEffect,
} from "@legendapp/state/react";

const images = ["/img/hero-1.png", "/img/hero-2.png", "/img/hero-3.png"];

export const Hero = () => {
  const active$ = useObservable(0);

  useObserveEffect(() => {
    const interval = setInterval(() => {
      active$.set((prev) => (prev < 2 ? prev + 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full aspect-[5/2] overflow-hidden">
      <Computed>
        {() =>
          images.map((image, key) => (
            <SlideItem show={key === active$.get()} key={image}>
              <Image src={image} alt="Hero" fill={true} />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="container mx-auto flex flex-col justify-center items-center gap-8 pt-14">
                  <h4 className="text-white font-bold text-6xl px-8 text-center">
                    JELAJAHI LAYANAN PEMERINTAH DENGAN MUDAH DAN AKURAT
                  </h4>
                  <h6 className="text-white text-2xl px-8 font-semibold">
                    Temukan Apa yang Kamu Butuhkan dengan Cepat dan Mudah dengan
                    Portal Kami yang Ramah Pengguna
                  </h6>
                </div>
              </div>
            </SlideItem>
          ))
        }
      </Computed>
    </div>
  );
};

const SlideItem = ({
  show,
  children,
}: {
  show: boolean;
  children?: ReactNode;
}) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 1 },
            show: { opacity: 1, scale: 1.001, transition: { duration: 1 } },
          }}
          initial="hidden"
          animate="show"
          className="w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

"use client";

import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

const images = ["/img/hero-1.png", "/img/hero-2.png", "/img/hero-3.png"];

export const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev < 2 ? prev + 1 : 0));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden md:aspect-[5/2] md:h-auto">
      {images.map((image, key) => (
        <SlideItem show={key === active} key={image}>
          <Image src={image} alt="Hero" fill={true} className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 pt-14 text-center">
              <h4 className="px-4 text-3xl font-bold text-white md:px-8 md:text-6xl">
                JELAJAHI LAYANAN PEMERINTAH DENGAN MUDAH DAN AKURAT
              </h4>
              <h6 className="px-4 text-lg font-semibold text-white md:px-8 md:text-2xl">
                Temukan Apa yang Kamu Butuhkan dengan Cepat dan Mudah dengan
                Portal Kami yang Ramah Pengguna
              </h6>
            </div>
          </div>
        </SlideItem>
      ))}
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
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SliderItem } from "./SliderItem";
import { useEffect, useMemo, useRef, useState } from "react";

const items = [1, 2, 3];

export const NewsSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [step, setStep] = useState(0);
  const x = useMemo(() => {
    const to = step * (containerRef.current?.clientWidth ?? 0);
    return -to;
  }, [containerRef, step]);

  useEffect(() => {
    if (containerRef.current && itemRef.current.length > 0) {
      itemRef.current.map((item) => {
        item.setAttribute(
          "style",
          `width: ${containerRef.current?.clientWidth ?? 0}px`
        );
      });
    }

    const autoplay = setInterval(() => {
      setStep((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(autoplay);
  }, [containerRef, itemRef]);

  return (
    <div>
      <div ref={containerRef} className="flex overflow-hidden">
        {items.map((_, index) => (
          <motion.div
            ref={(ref) => {
              if (ref) {
                itemRef.current?.push(ref);
              }
            }}
            key={index}
            className="shrink-0 grid grid-cols-4 grid-rows-2 gap-4"
            animate={{
              x,
              opacity: step === index ? 1 : 0,

              transition: {
                type: "spring",
                duration: 1,
                bounce: 0.3,
              },
            }}
          >
            <SliderItem
              primary
              image="/img/event-1.png"
              title="Walikota Buka FORST 2024, Diikuti 714 Tim Senam Tradisional di Jakarta Timur"
              category="Kesejahteraan"
              date="18 Agustus 2024"
            />
            <SliderItem
              image="/img/event-1.png"
              title="Walikota Buka FORST 2024, Diikuti 714 Tim Senam Tradisional di Jakarta Timur"
              category="Kesejahteraan"
              date="18 Agustus 2024"
            />
            <SliderItem
              image="/img/event-1.png"
              title="Walikota Buka FORST 2024, Diikuti 714 Tim Senam Tradisional di Jakarta Timur"
              category="Kesejahteraan"
              date="18 Agustus 2024"
            />
            <SliderItem
              image="/img/event-1.png"
              title="Walikota Buka FORST 2024, Diikuti 714 Tim Senam Tradisional di Jakarta Timur"
              category="Kesejahteraan"
              date="18 Agustus 2024"
            />
            <SliderItem
              image="/img/event-1.png"
              title="Walikota Buka FORST 2024, Diikuti 714 Tim Senam Tradisional di Jakarta Timur"
              category="Kesejahteraan"
              date="18 Agustus 2024"
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setStep(index)}
            data-selected={index === step ? true : undefined}
            className="bg-gray-300 rounded-full w-2 h-2 data-[selected]:bg-pink-500"
          />
        ))}
      </div>
    </div>
  );
};

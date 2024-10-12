"use client";
import { motion } from "framer-motion";
import { SliderItem } from "./SliderItem";
import { useEffect, useMemo, useRef, useState } from "react";
import { News } from "@/app/(main)/actions";
import _ from "lodash";

interface NewsSliderProps {
  data: News[];
}

export const NewsSlider = ({ data }: NewsSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement[]>([]);
  const [step, setStep] = useState(0);
  const x = useMemo(() => {
    const to = step * (containerRef.current?.clientWidth ?? 0);
    return -to;
  }, [containerRef, step]);

  const sections = _.chunk(data, 5);

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
      setStep((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(autoplay);
  }, [containerRef, itemRef, sections]);

  return (
    <div>
      <div ref={containerRef} className="flex overflow-hidden">
        {sections.map((items, index) => (
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
            {items.map((item, index) => (
              <SliderItem
                key={item.id}
                primary={index === 0}
                image={`https://timur.jakarta.go.id/storage/news/${item.img}`}
                title={item.title}
                category="Kesejahteraan"
                date={item.time}
                author={item.writer}
              />
            ))}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setStep(index)}
            data-selected={index === step ? true : undefined}
            className="bg-gray-300 rounded-full w-2 h-2 data-[selected]:w-6 data-[selected]:bg-pink-500 transition-all"
          />
        ))}
      </div>
    </div>
  );
};

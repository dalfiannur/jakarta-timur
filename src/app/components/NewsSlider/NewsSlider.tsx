"use client";
import { motion } from "framer-motion";
import { SliderItem } from "./SliderItem";
import { News } from "@/app/(main)/actions";
import _ from "lodash";
import { useSlider } from "./useSlider";
import { use } from "react";

interface NewsSliderProps {
  getData: Promise<News[]>;
}

export const NewsSlider = ({ getData }: NewsSliderProps) => {
  const data = use(getData);
  const sections = _.chunk(data, 5);

  const { containerRef, itemRef, x, step, setStep } = useSlider({
    total: sections.length,
  });

  return (
    <div>
      <div ref={containerRef} className="flex overflow-hidden">
        {sections.map((items, index) => (
          <motion.div
            ref={(ref: HTMLDivElement) => {
              if (ref) {
                itemRef.current?.push(ref);
              }
            }}
            key={index}
            animate={{
              x,
              opacity: step === index ? 1 : 0,
              flexShrink: 0,
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gridTemplateRows: "repeat(2, minmax(2, 1fr))",
              gap: "1rem",
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
                id={item.id}
                primary={index === 0}
                image={item.img}
                title={item.title}
                category={item.catID.name}
                date={item.time}
                author={item.writer}
                reporter={item.reporter}
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

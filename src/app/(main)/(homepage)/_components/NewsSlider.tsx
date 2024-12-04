"use client";
import _ from "lodash";
import { motion } from "motion/react";
import { NewsSliderItem } from "./NewsSliderItem";
import { News } from "@/types/news";
import { useEffect, useState } from "react";

export const NewsSlider = ({ data }: { data: News[] }) => {
  const sections = _.chunk(data, 5);

  const [containerWidth, setContainerWidth] = useState(0);
  const [step, setStep] = useState(0);
  const x = -(step * containerWidth);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        ref={(ref) => {
          setContainerWidth(ref?.clientWidth ?? 0);
        }}
        className="flex overflow-hidden"
      >
        {sections.map((items, index) => (
          <motion.div
            key={index}
            style={{
              width: containerWidth,
            }}
            animate={{
              x: x,
              opacity: step === index ? 1 : 0,
              flexShrink: 0,
              transition: {
                type: "spring",
                duration: 1,
                bounce: 0.3,
              },
            }}
          >
            <div className="grid grid-cols-2 grid-rows-4 gap-4 md:grid-cols-4 md:grid-rows-2">
              {items.map((item, index) => (
                <NewsSliderItem
                  key={item.id}
                  id={item.id}
                  primary={index === 0}
                  image={item.img_url}
                  title={item.title}
                  category={item.kategori.cat}
                  date={item.time}
                  author={item.writer}
                  imageName={item.img_name}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setStep(index)}
            data-selected={index === step ? true : undefined}
            className="h-2 w-2 rounded-full bg-gray-300 transition-all data-[selected]:w-6 data-[selected]:bg-pink-500"
          />
        ))}
      </div>
    </div>
  );
};

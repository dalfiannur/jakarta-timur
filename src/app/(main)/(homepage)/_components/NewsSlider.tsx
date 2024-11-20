"use client";
import _ from "lodash";
import { motion } from "motion/react";
import { NewsSliderItem } from "./NewsSliderItem";
import {
  Computed,
  useComputed,
  useObservable,
  useObserveEffect,
} from "@legendapp/state/react";
import { News } from "@/types/news";

export const NewsSlider = ({ data }: { data: News[] }) => {
  const sections = _.chunk(data, 5);

  const containerWidth$ = useObservable(0);
  const step$ = useObservable(0);

  const x$ = useComputed(() => {
    const to = step$.get() * containerWidth$.get();
    return -to;
  });

  useObserveEffect(() => {
    const interval = setInterval(() => {
      step$.set((prev) => (prev < 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div
        ref={(ref) => {
          containerWidth$.set(ref?.clientWidth ?? 0);
        }}
        className="flex overflow-hidden"
      >
        <Computed>
          {() =>
            sections.map((items, index) => (
              <motion.div
                key={index}
                style={{
                  width: containerWidth$.get(),
                }}
                animate={{
                  x: x$.get(),
                  opacity: step$.get() === index ? 1 : 0,
                  flexShrink: 0,
                  transition: {
                    type: "spring",
                    duration: 1,
                    bounce: 0.3,
                  },
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4">
                  {items.map((item, index) => (
                    <NewsSliderItem
                      key={item.id}
                      id={item.id}
                      primary={index === 0}
                      image={item.img_url}
                      title={item.title}
                      category={item.kategori.name}
                      date={item.time}
                      author={item.writer}
                      imageName={item.img_name}
                    />
                  ))}
                </div>
              </motion.div>
            ))
          }
        </Computed>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <Computed>
          {() =>
            sections.map((_, index) => (
              <button
                key={index}
                onClick={() => step$.set(index)}
                data-selected={index === step$.get() ? true : undefined}
                className="bg-gray-300 rounded-full w-2 h-2 data-[selected]:w-6 data-[selected]:bg-pink-500 transition-all"
              />
            ))
          }
        </Computed>
      </div>
    </div>
  );
};

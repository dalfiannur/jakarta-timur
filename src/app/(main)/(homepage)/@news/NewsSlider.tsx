"use client";
import _ from "lodash";
import { motion } from "motion/react";
import { SliderItem } from "./SliderItem";
import { trpc } from "@/utils/trpc";
import {
  Computed,
  useComputed,
  useObservable,
  useObserveEffect,
} from "@legendapp/state/react";

export const NewsSlider = () => {
  const { data } = trpc.externalApi.news.useQuery({
    limit: 10,
    page: 1,
  });

  const sections = _.chunk(data?.data ?? [], 5);

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
                    image={item.img_url}
                    title={item.title}
                    category={item.catID.name}
                    date={item.time}
                    author={item.writer}
                    imageName={item.img_name}
                  />
                ))}
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

"use client";
import _ from "lodash";
import { Item } from "./Item";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NewsPhoto } from "@/app/(main)/actions";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

interface NewsStoryProps {
  data: NewsPhoto[];
}
export const NewsStory = ({ data }: NewsStoryProps) => {
  const [[active, direction], setActive] = useState([0, 0]);
  const refItem = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const sections = _.chunk(data, 5);
  const [height, setHeight] = useState<string | "auto">("auto");

  useEffect(() => {
    if (refItem.current && refContainer.current) {
      const height = refItem.current.clientHeight;
      setHeight(height + "px");
    }
  }, [refItem, refContainer]);

  return (
    <div>
      <div
        ref={refContainer}
        className="relative w-full transition-all duration-500"
        style={{ height, opacity: height === "auto" ? 0 : 1 }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            ref={refItem}
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            className="absolute grid grid-cols-4 gap-4"
          >
            {sections[active]?.map((item, index) => (
              <Item
                key={index}
                isPrimary={index === 0}
                title={item.title}
                image={item.img}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex gap-2 justify-center">
        {sections.map((_, index) => (
          <button
            key={index}
            data-active={index === active}
            onClick={() => {
              setActive([index, active < index ? -1 : 1]);
            }}
            className="rounded-full bg-gray-300 w-2 h-2 data-[active=true]:w-8 data-[active=true]:bg-orange-500 transition-all duration-500"
          />
        ))}
      </div>
    </div>
  );
};

"use client";
import { Icon } from "@/app/icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode, useCallback, useState } from "react";
import { tv } from "tailwind-variants";

const pos = [
  [2, 0, 1],
  [1, 2, 0],
  [0, 1, 2],
];

interface VideoSliderProps {
  items: any[];
}

export const VideoSlider = ({ items }: VideoSliderProps) => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  }, [setActive, items]);

  const prev = useCallback(() => {
    setActive((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  }, [setActive, items]);

  const getSlide = useCallback(
    (index: number) =>
      pos[active][index] === 0
        ? "left"
        : pos[active][index] === 2
        ? "center"
        : "right",
    [active]
  );

  return (
    <div className="h-[500px] relative flex justify-center">
      {items.map((item, index) => (
        <SlideItem key={index} position={getSlide(index)}>
          <Image src="/img/event-1.png" alt="#" fill />
          {index}
        </SlideItem>
      ))}

      <Button position="left" onClick={prev}>
        <Icon name="ChevronLeft" size={24} />
      </Button>
      <Button position="right" onClick={next}>
        <Icon name="ChevronRight" size={24} />
      </Button>
    </div>
  );
};

const SlideItem = ({
  position,
  children,
  onClick,
}: {
  position: "left" | "right" | "center";
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      variants={{
        left: {
          x: -300,
          scale: 0.8,
          zIndex: -1,
          transition: {
            duration: 0.4,
          },
        },
        center: {
          x: 0,
          scale: 1,
          zIndex: 0,
          transition: {
            duration: 0.4,
          },
        },
        right: {
          x: 300,
          scale: 0.8,
          zIndex: -1,
          transition: {
            duration: 0.4,
          },
        },
      }}
      initial={position}
      animate={position}
      className="absolute h-[500px] aspect-video rounded-2xl overflow-hidden"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const createStyles = tv({
  slots: {
    root: "absolute flex items-center bottom-0 top-0",
    button: "border border-black hover:border-white rounded-full p-2 hover:bg-pink-500 hover:text-white transition-all",
  },
  variants: {
    position: {
      left: {
        root: "left-0",
      },
      right: {
        root: "right-0",
      },
    },
  },
});

const Button = ({
  children,
  position,
  onClick,
}: {
  children: ReactNode;
  position: "left" | "right";
  onClick: () => void;
}) => {
  const x = createStyles({ position });
  return (
    <div className={x.root()}>
      <button className={x.button()} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

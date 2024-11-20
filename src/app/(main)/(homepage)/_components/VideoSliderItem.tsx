import { motion } from "motion/react";
import { ReactNode } from "react";

export const VideoSlideItem = ({
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
      onTapStart={onClick}
      style={{
        position: 'absolute'
      }}
    >
      <div className="aspect-video md:h-[calc(50vw)] max-h-[500px] w-full lg:w-auto overflow-hidden rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};

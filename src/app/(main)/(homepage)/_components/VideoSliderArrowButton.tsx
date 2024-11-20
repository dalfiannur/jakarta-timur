"use client";
import { ReactNode } from "react";

export const VideoSliderArrowButton = ({
  children,
  position,
  onClick,
}: {
  children: ReactNode;
  position: "left" | "right";
  onClick: () => void;
}) => {
  return (
    <div
      data-position={position}
      className="absolute flex items-center bottom-0 top-0 data-[position=left]:left-0 data-[position=right]:right-0"
    >
      <button
        className="border border-black bg-white hover:border-white rounded-full p-2 hover:bg-pink-500 hover:text-white transition-all"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

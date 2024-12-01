"use client";
import { Icon } from "@/app/icons";
import { Video } from "@/types/video";
import { useCallback, useState } from "react";
import { VideoSlideItem } from "./VideoSliderItem";
import { VideoSliderArrowButton } from "./VideoSliderArrowButton";

const pos = [
  [2, 0, 1],
  [1, 2, 0],
  [0, 1, 2],
];

export const VideoSlider = ({ data }: { data: Video[] }) => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  }, [data]);

  const prev = useCallback(() => {
    setActive((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  }, [data]);

  const getSlide = useCallback(
    (index: number) =>
      pos[active][index] === 0
        ? "left"
        : pos[active][index] === 2
          ? "center"
          : "right",
    [active],
  );

  return (
    <div className="relative flex max-h-[500px] min-h-[180px] justify-center md:h-[calc(50vw)]">
      {data.map((item, index) => (
        <VideoSlideItem key={index} position={getSlide(index)}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${item.source}`}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </VideoSlideItem>
      ))}

      <VideoSliderArrowButton position="left" onClick={prev}>
        <Icon name="ChevronLeft" className="h-6 w-6" />
      </VideoSliderArrowButton>
      <VideoSliderArrowButton position="right" onClick={next}>
        <Icon name="ChevronRight" className="h-6 w-6" />
      </VideoSliderArrowButton>
    </div>
  );
};

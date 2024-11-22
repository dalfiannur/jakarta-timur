"use client";
import { Icon } from "@/app/icons";
import { Video } from "@/types/video";
import { Computed, useObservable } from "@legendapp/state/react";
import { useCallback } from "react";
import { VideoSlideItem } from "./VideoSliderItem";
import { VideoSliderArrowButton } from "./VideoSliderArrowButton";

const pos = [
  [2, 0, 1],
  [1, 2, 0],
  [0, 1, 2],
];

export const VideoSlider = ({ data }: { data: Video[] }) => {
  const active$ = useObservable(0);

  const next = useCallback(() => {
    active$.set((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  }, [active$, data]);

  const prev = useCallback(() => {
    active$.set((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  }, [active$, data]);

  const getSlide = useCallback(
    (index: number) =>
      pos[active$.get()][index] === 0
        ? "left"
        : pos[active$.get()][index] === 2
        ? "center"
        : "right",
    [active$]
  );

  return (
    <div className="min-h-[180px] md:h-[calc(50vw)] max-h-[500px] relative flex justify-center">
      <Computed>
        {() =>
          data.map((item, index) => (
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
          ))
        }
      </Computed>

      <VideoSliderArrowButton position="left" onClick={prev}>
        <Icon name="ChevronLeft" className="w-6 h-6" />
      </VideoSliderArrowButton>
      <VideoSliderArrowButton position="right" onClick={next}>
        <Icon name="ChevronRight" className="w-6 h-6" />
      </VideoSliderArrowButton>
    </div>
  );
};

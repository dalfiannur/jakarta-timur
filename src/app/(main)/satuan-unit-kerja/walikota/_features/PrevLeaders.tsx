"use client";
import { Icon } from "@/app/icons";
import { trpc } from "@/utils/trpc";
import { Timeline } from "../_components/Timeline";
import { useRef } from "react";

export const PrevLeaders = () => {
  const timelineRef = useRef<any>(null);
  const res = trpc.externalApi.getExProvost.useQuery();
  const data = res.data?.data ?? [];

  return (
    <div className="px-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-plus-jakarta-sans text-2xl font-bold text-gray-950">
            Jejak Kepemimpinan Walikota Sebelumnya
          </h4>
          <p className="font-roboto text-xl text-gray-950/80">
            Telusuri para Walikota yang pernah memimpin Jakarta Timur
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => timelineRef.current?.prev()}
            className="flex aspect-square w-7 items-center justify-center rounded-full bg-pink-500"
          >
            <Icon name="ChevronLeft" className="aspect-square w-5 text-white" />
          </button>
          <button
            onClick={() => timelineRef.current?.next()}
            className="flex aspect-square w-7 items-center justify-center rounded-full bg-pink-500"
          >
            <Icon
              name="ChevronRight"
              className="aspect-square w-5 text-white"
            />
          </button>
        </div>
      </div>
      <div className="slick-container">
        {data.length > 0 && <Timeline ref={timelineRef} data={data} />}
      </div>
    </div>
  );
};

"use client";
import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { VideoSlider } from "../_components/VideoSlider";
import { trpc } from "@/utils/trpc";

export const VideoSection = () => {
  const { data } = trpc.externalApi.videos.useQuery({ limit: 3 });

  return (
    <SectionBox
      title="Video Informasi dan Edukasi"
      subtitle="Temukan informasi penting melalui video untuk tetap terinformasi dan teredukasi"
      rightSection={
        <Link
          href="/publikasi/video"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-base lg:text-xl font-plus-jakarta-sans"
        >
          Lihat Video Lainnya <Icon name="ChevronRight" className="w-6 h-6" />
        </Link>
      }
    >
      <VideoSlider data={data?.data ?? []} />
    </SectionBox>
  );
};

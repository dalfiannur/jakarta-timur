"use client";
import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { VideoSlider } from "../_components/VideoSlider";
import { trpc } from "@/utils/trpc";

export const VideoSection = () => {
  const { data } = trpc.externalApi.videos.useQuery(
    { limit: 3 },
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <SectionBox
      title="Video Informasi dan Edukasi"
      subtitle="Temukan informasi penting melalui video untuk tetap ter-informasi dan ter-edukasi"
      rightSection={
        <Link
          href="/publikasi/video"
          className="inline-flex items-center gap-2 font-plus-jakarta-sans text-base font-semibold text-pink-500 lg:text-xl"
        >
          Lihat Video Lainnya <Icon name="ChevronRight" className="h-6 w-6" />
        </Link>
      }
    >
      <VideoSlider data={data?.data ?? []} />
    </SectionBox>
  );
};

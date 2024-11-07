import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { VideoSlider } from "./VideoSlider";
import { getVideos } from "@/app/actions/get-videos";

export default async function Page() {
  const videos = getVideos({ limit: "3" });
  return (
    <SectionBox
      title="Video Informasi dan Edukasi"
      subtitle="Temukan informasi penting melalui video untuk tetap terinformasi dan teredukasi"
      rightSection={
        <Link
          href="/publikasi/video"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl font-plus-jakarta-sans"
        >
          Lihat Video Lainnya <Icon name="ChevronRight" size={24} />
        </Link>
      }
    >
      <VideoSlider getData={videos} />
    </SectionBox>
  );
}

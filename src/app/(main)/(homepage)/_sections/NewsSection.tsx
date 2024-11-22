"use client";
import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import { NewsSlider } from "../_components/NewsSlider";
import Link from "next/link";
import { trpc } from "@/utils/trpc";

export const NewsSection = () => {
  const { data } = trpc.externalApi.news.useQuery({
    limit: 10,
    page: 1,
  });
  
  return (
    <SectionBox
      title="Berita Pemerintah Terkini"
      subtitle="Baca Berita Terkini Program dan Kegiatan Pemerintah"
      rightSection={
        <Link
          href="/publikasi/berita"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-base lg:text-xl font-plus-jakarta-sans"
        >
          Lihat Berita Lainnya <Icon name="ChevronRight" className="w-6 h-6" />
        </Link>
      }
    >
      <NewsSlider data={data?.data ?? []} />
    </SectionBox>
  );
};

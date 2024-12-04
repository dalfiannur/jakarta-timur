"use client";
import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { GallerySlider } from "../_components/GallerySlider";
import { trpc } from "@/utils/trpc";

export const GallerySection = () => {
  const { data } = trpc.externalApi.galleries.useQuery(
    {
      limit: 10,
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <SectionBox
      title="Cerita Melalui Citra"
      subtitle="Menampilkan Wajah Jakarta Timur dalam Citra: Transparansi, Progres, dan Aspirasi Bersama Pemerintah untuk Kemajuan Kota"
      rightSection={
        <Link
          href="/publikasi/galeri"
          className="inline-flex items-center gap-2 font-plus-jakarta-sans text-base font-semibold text-pink-500 lg:text-xl"
        >
          Lihat Foto Lainnya <Icon name="ChevronRight" className="h-6 w-6" />
        </Link>
      }
    >
      <GallerySlider data={data?.data ?? []} />
    </SectionBox>
  );
};

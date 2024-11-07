import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import Link from "next/link";
import { NewsPhoto } from "./NewsPhoto";
import { getNewsPhotos } from "@/app/actions/get-news-photo";

export default async function Page() {
  const newsPhotos = getNewsPhotos({ limit: "10" });
  return (
    <SectionBox
      title="Cerita Melalui Citra"
      subtitle="Menampilkan Wajah Jakarta Timur dalam Citra: Transparansi, Progres, dan Aspirasi Bersama Pemerintah untuk Kemajuan Kota"
      rightSection={
        <Link
          href="/publikasi/galeri"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl font-plus-jakarta-sans"
        >
          Lihat Foto Lainnya <Icon name="ChevronRight" size={24} />
        </Link>
      }
    >
      <NewsPhoto getData={newsPhotos} />
    </SectionBox>
  );
}

import { SectionBox } from "@/app/components/SectionBox";
import { Icon } from "@/app/icons";
import { NewsSlider } from "./NewsSlider";
import { getNews } from "@/app/actions/get-news";
import Link from "next/link";

export default async function Page() {
  const news = getNews({ limit: "10" });

  return (
    <SectionBox
      title="Berita Pemerintah Terkini"
      subtitle="Baca Berita Terkini Program dan Kegiatan Pemerintah"
      rightSection={
        <Link
          href="/publikasi/berita"
          className="inline-flex items-center gap-2 text-pink-500 font-semibold text-xl font-plus-jakarta-sans"
        >
          Lihat Berita Lainnya <Icon name="ChevronRight" size={24} />
        </Link>
      }
    >
      <NewsSlider getData={news} />
    </SectionBox>
  );
}

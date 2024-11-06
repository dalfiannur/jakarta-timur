import { Pagination } from "@/app/components/Pagination";
import { BulletinWidget } from "../BulletinWidget";
import { LatestNewsWidget } from "../LatestNewsWidget";
import { VideoItem } from "./VideoItem";
import { getVideos } from "@/app/actions/get-videos";
import { getNews } from "@/app/actions/get-news";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const { data } = await getVideos({ limit: "4", page: searchParams.page });
  const { data: news } = await getNews({ limit: "3" });
  const pages = Math.ceil(data.total / 4);

  return (
    <div>
      <div className="grid gap-2 text-center font-plus-jakarta-sans">
        <h2 className="font-bold text-3xl">Video Informasi dan Edukasi</h2>
        <p className="text-xl text-gray-500">
          Temukan Informasi Penting Melalui Video untuk Tetap Terinformasi dan
          Teredukasi
        </p>
      </div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-12">
            {data.data.map((item, index) => (
              <VideoItem
                key={index}
                category={item.kategori.cat}
                source={item.source}
                title={item.title}
                date={item.tanggal}
                slug={item.slug}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Pagination total={pages} />
          </div>
        </div>
        <div className="w-[437px] flex flex-col gap-12">
          <LatestNewsWidget data={news.data} />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

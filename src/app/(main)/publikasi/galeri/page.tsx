import { Pagination } from "@/app/components/Pagination";
import { BulletinWidget } from "../BulletinWidget";
import { VideoWidget } from "../VideoWidget";
import { PhotoItem } from "./PhotoItem";
import { getNewsPhotos } from "@/app/actions/get-news-photo";
import { getVideos } from "@/app/actions/get-videos";
import { getBulletins } from "@/app/actions/get-bulletin";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function Page(props: PageProps) {
  const { page = "1", limit = "8" } = await props.searchParams;
  const { data } = await getNewsPhotos({ limit, page });
  const { data: videos } = await getVideos({ limit: "3" });
  const { data: bulletin } = await getBulletins({ limit: "3" });

  const pages = Math.ceil(data.total / 8);

  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl font-plus-jakarta-sans">
          Cerita Melalui Citra
        </h2>
        <p className="text-xl text-gray-500 font-plus-jakarta-sans">
          Menampilkan Wajah Jakarta Timur dalam Citra: Transparansi, Progres,
          dan Aspirasi Bersama Pemerintah untuk Kemajuan Kota.
        </p>
      </div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-12">
            {data.data.map((item, index) => (
              <PhotoItem
                key={index}
                title={item.title}
                date={item.time}
                id={item.id}
                location={item.lokasi}
                image={item.img_url}
              />
            ))}
          </div>
          <div className="flex justify-center mt-14">
            <Pagination total={pages} />
          </div>
        </div>

        <div className="w-[437px] flex flex-col gap-12">
          <VideoWidget data={videos.data} />
          <BulletinWidget data={bulletin.data} />
        </div>
      </div>
    </div>
  );
}

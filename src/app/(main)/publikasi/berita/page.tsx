import { BulletinWidget } from "../BulletinWidget";
import { NewsItem } from "./NewsItem";
import { VideoWidget } from "../VideoWidget";

export default function Page() {
  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl">Berita Pemerintah Terkini</h2>
        <p className="text-xl text-gray-500">
          Baca Berita Terkini Program dan Kegiatan Pemerintah
        </p>
      </div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1 grid grid-cols-2 gap-12">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
        <div className="w-[437px] flex flex-col gap-12">
          <VideoWidget />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

import { BulletinWidget } from "../BulletinWidget";
import { VideoWidget } from "../VideoWidget";
import { PhotoItem } from "./PhotoItem";

export default function Page() {
  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl">Cerita Melalui Citra</h2>
        <p className="text-xl text-gray-500">
          Menampilkan Wajah Jakarta Timur dalam Citra: Transparansi, Progres,
          dan Aspirasi Bersama Pemerintah untuk Kemajuan Kota.
        </p>
      </div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1 grid grid-cols-2 gap-12">
          <PhotoItem />
          <PhotoItem />
          <PhotoItem />
        </div>
        <div className="w-[437px] flex flex-col gap-12">
          <VideoWidget />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

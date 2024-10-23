import { Pagination } from "@/app/components/Pagination";
import { BulletinWidget } from "../BulletinWidget";
import { LatestNewsWidget } from "../LatestNewsWidget";
import { VideoItem } from "./VideoItem";

export default function Page() {
  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl">Video Informasi dan Edukasi</h2>
        <p className="text-xl text-gray-500">
          Temukan Informasi Penting Melalui Video untuk Tetap Terinformasi dan
          Teredukasi
        </p>
      </div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-12">
            <VideoItem />
            <VideoItem />
            <VideoItem />
          </div>
          <div className="flex justify-center">
            <Pagination total={100} />
          </div>
        </div>
        <div className="w-[437px] flex flex-col gap-12">
          <LatestNewsWidget />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

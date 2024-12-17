import { ReactNode } from "react";
import { VideoList } from "../../_features/VideoList";
import { BulletinWidget } from "@/app/widgets/BulletinWidget";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4">
      <div className="grid gap-2 text-center">
        <h2 className="font-plus-jakarta-sans text-lg font-bold lg:text-3xl">
          Cerita Melalui Citra
        </h2>
        <p className="font-plus-jakarta-sans text-base text-gray-500 lg:text-xl">
          Menampilkan Wajah Jakarta Timur dalam Citra: Transparansi, Progres,
          dan Aspirasi Bersama Pemerintah untuk Kemajuan Kota.
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-16 lg:mt-12 lg:flex-row">
        <div className="flex-1">{children}</div>
        <div className="flex w-full flex-col gap-12 lg:w-[437px]">
          <VideoList />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

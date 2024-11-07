import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  video: ReactNode;
  bulletin: ReactNode;
};

export default function Layout({ children, video, bulletin }: LayoutProps) {
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
        <div className="flex-1">{children}</div>
        <div className="w-[437px] flex flex-col gap-12">
          {video}
          {bulletin}
        </div>
      </div>
    </div>
  );
}

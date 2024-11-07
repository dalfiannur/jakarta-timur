import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  news: ReactNode;
  bulletin: ReactNode;
};

export default async function Layout({
  children,
  news,
  bulletin,
}: LayoutProps) {
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
        <div className="flex-1">{children}</div>
        <div className="w-[437px] flex flex-col gap-12">
          {news}
          {bulletin}
        </div>
      </div>
    </div>
  );
}

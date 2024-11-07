import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  bulletin: ReactNode;
  video: ReactNode;
};

export default async function Layout({
  children,
  bulletin,
  video,
}: LayoutProps) {
  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl font-plus-jakarta-sans">
          Berita Pemerintah Terkini
        </h2>
        <p className="text-xl text-gray-500 font-plus-jakarta-sans">
          Baca Berita Terkini Program dan Kegiatan Pemerintah
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

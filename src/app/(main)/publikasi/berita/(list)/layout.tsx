"use client";
import { ReactNode } from "react";
import { VideoList } from "./_features/VideoList";
import { BulletinList } from "./_features/BulletinList";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4">
      <div className="flex flex-col gap-1 text-center lg:gap-2">
        <h2 className="font-plus-jakarta-sans text-xl font-bold lg:text-3xl">
          Berita Pemerintah Terkini
        </h2>
        <p className="font-plus-jakarta-sans text-base text-gray-500 lg:text-xl">
          Baca Berita Terkini Program dan Kegiatan Pemerintah
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-12 lg:mt-12 lg:flex-row lg:gap-16">
        <div className="flex-1">{children}</div>
        <div className="flex w-auto flex-col gap-12 lg:w-[437px]">
          <VideoList />
          <BulletinList />
        </div>
      </div>
    </div>
  );
}

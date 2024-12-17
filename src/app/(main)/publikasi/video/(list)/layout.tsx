import { ReactNode } from "react";
import { NewsList } from "../../_features/NewsList";
import { BulletinWidget } from "@/app/widgets/BulletinWidget";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4">
      <div className="grid gap-2 text-center font-plus-jakarta-sans">
        <h2 className="text-xl font-bold lg:text-3xl">
          Video Informasi dan Edukasi
        </h2>
        <p className="text-base text-gray-500 lg:text-xl">
          Temukan Informasi Penting Melalui Video untuk Tetap Terinformasi dan
          Teredukasi
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-16 lg:mt-12 lg:flex-row">
        <div className="flex-1">{children}</div>
        <div className="flex w-auto flex-col gap-12 lg:w-[437px]">
          <NewsList />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

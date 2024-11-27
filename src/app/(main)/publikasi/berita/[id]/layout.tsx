"use client";
import { ReactNode } from "react";
import { NewsList } from "../../_features/NewsList";
import { BulletinList } from "../../_features/BulletinList";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4">
      <div className="mt-6 flex flex-col gap-16 lg:mt-12 lg:flex-row">
        <div className="flex-1">{children}</div>
        <div className="flex w-auto flex-col gap-8 lg:w-[437px]">
          <NewsList />
          <BulletinList />
        </div>
      </div>
    </div>
  );
}

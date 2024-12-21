"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { PageBreadcrumbs } from "./_components/PageBreadcrumbs";
import { Sidebar } from "./_components/Sidebar";
import { ReactNode, Suspense } from "react";
import { sidebarItems } from "./constants";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return [
    "/satuan-unit-kerja/wilayah/kecamatan/",
    "/satuan-unit-kerja/wilayah/kelurahan/",
    "/satuan-unit-kerja/walikota/1",
    "/satuan-unit-kerja/walikota/2",
  ].includes(pathname) ? (
    children
  ) : (
    <div className="pb-16">
      <PageTitle
        image="/img/kantor-walikota-jaktim.png"
        title="Satuan dan Unit Kerja"
        subtitle="Menghadirkan Inovasi dan Solusi untuk Kemajuan Kota yang Berkelanjutan"
      />

      <div className="container relative z-10 mx-auto mt-0 rounded-4xl bg-soft-white p-0 shadow-none lg:-mt-28 lg:p-8 lg:shadow-light">
        <Suspense fallback={"Loading..."}>
          <PageBreadcrumbs />
        </Suspense>
        <div className="lg-px-0 mt-8 flex flex-col gap-8 px-4 lg:flex-row">
          <Sidebar items={sidebarItems} />
          {children}
        </div>
      </div>
    </div>
  );
}

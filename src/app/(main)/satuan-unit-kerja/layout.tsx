"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { PageBreadcrumbs } from "./PageBreadcrumbs";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";
import { sidebarItems } from "./constants";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  return pathname.includes("/satuan-unit-kerja/wilayah/kecamatan/") ||
    pathname.includes("/satuan-unit-kerja/wilayah/kelurahan/") ? (
    children
  ) : (
    <div className="pb-16">
      <PageTitle
        image="/img/kantor-walikota-jaktim.png"
        title="Satuan dan Unit Kerja"
        subtitle="Menghadirkan Inovasi dan Solusi untuk Kemajuan Kota yang Berkelanjutan"
      />

      <div className="relative z-10 -mt-28 container mx-auto bg-soft-white rounded-4xl p-8 shadow-light">
        <PageBreadcrumbs />
        <div className="mt-8 flex gap-8">
          <Sidebar items={sidebarItems} />
          {children}
        </div>
      </div>
    </div>
  );
}

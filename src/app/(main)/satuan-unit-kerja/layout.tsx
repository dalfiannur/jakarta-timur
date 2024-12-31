"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { PageBreadcrumbs } from "./_components/PageBreadcrumbs";
import { Sidebar } from "./_components/Sidebar";
import { ReactNode } from "react";
import { sidebarItems } from "./constants";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const walikotaRegex = /^\/satuan-unit-kerja\/walikota\/\d+$/;
const wilayahRegex = /^\/satuan-unit-kerja\/wilayah\/[a-zA-Z0-9_-]+$/;
const wilayahDetailRegex =
  /^\/satuan-unit-kerja\/wilayah\/[a-zA-Z0-9_-]+$\/[a-zA-Z0-9_-]+$/;

const checkRoute = (pathname: string) => {
  return (
    /^\/satuan-unit-kerja\/(ukpd|bagian-kota|sekretariat-kota|walikota|struktur-organisasi)/.test(
      pathname,
    ) ||
    walikotaRegex.test(pathname) ||
    wilayahRegex.test(pathname) ||
    wilayahDetailRegex.test(pathname)
  );
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const routeMatch = checkRoute(pathname);
  return !routeMatch ? (
    children
  ) : (
    <div className="pb-16">
      <PageTitle
        image="/img/kantor-walikota-jaktim.png"
        title="Satuan dan Unit Kerja"
        subtitle="Menghadirkan Inovasi dan Solusi untuk Kemajuan Kota yang Berkelanjutan"
      />

      <div className="container relative z-10 mx-auto mt-0 rounded-4xl bg-soft-white p-0 shadow-none lg:-mt-28 lg:p-8 lg:shadow-light">
        <PageBreadcrumbs />

        <div className="lg-px-0 mt-8 flex flex-col gap-8 px-4 lg:flex-row">
          <Sidebar items={sidebarItems} />
          {children}
        </div>
      </div>
    </div>
  );
}

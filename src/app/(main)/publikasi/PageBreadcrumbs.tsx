"use client";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { usePathname } from "next/navigation";
import { SELECTABLE_BREADCRUMBS } from "./contants";

export const PageBreadcrumbs = () => {
  const pathname = usePathname();
  const splited = pathname.split("/");
  const path = splited.length > 2 ? splited[2] : splited[3];

  return (
    <Breadcrumbs
      data={[
        { label: "Beranda", link: "/" },
        { label: SELECTABLE_BREADCRUMBS[path!] },
      ]}
    />
  );
};

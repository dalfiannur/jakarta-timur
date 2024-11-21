"use client";

import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "../constants";

const ITEMS = [
  {
    label: "Beranda",
    link: "/",
  },
  {
    label: "Tentang Jakarta Timur",
  },
];

export const PageBreadcrumbs = () => {
  const pathname = usePathname();
  const item = { label: SIDEBAR_ITEMS[pathname] };
  return <Breadcrumbs data={[...ITEMS, item]} />;
};

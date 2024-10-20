"use client";

import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { useSearchParams } from "next/navigation";
import { SIDEBAR_ITEMS } from "./constants";

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
  const params = useSearchParams();
  const selected = params.get("s") as string;
  const item = { label: SIDEBAR_ITEMS[selected] };
  return <Breadcrumbs data={[...ITEMS, item]} />;
};

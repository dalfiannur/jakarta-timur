"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { OrganizationStructureSection } from "./OrganizationStructureSection";
import { WalikotaSection } from "./WalikotaSection";
import { SekretariatKotaSection } from "./SekretariatKotaSection";

const section: { [key: string]: ReactNode } = {
  "struktur-organisasi": <OrganizationStructureSection />,
  walikota: <WalikotaSection />,
  "sekretariat-kota": <SekretariatKotaSection />,
};

export const Content = () => {
  const params = useSearchParams();

  return (
    <div className="flex-1">
      <AnimatePresence>{section[params.get("s") as string]!}</AnimatePresence>
    </div>
  );
};

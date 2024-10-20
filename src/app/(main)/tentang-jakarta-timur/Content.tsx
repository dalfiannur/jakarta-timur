"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { PrestasiSection } from "./PrestasiSection";
import { DemografiSection } from "./DemografiSection";
import { MapSection } from "./MapSection";
import { VisiMisiSection } from "./VisiMisiSection";
import { useSearchParams } from "next/navigation";

const section: { [key: string]: ReactNode } = {
  "visi-misi-kegiatan-strategis": <VisiMisiSection />,
  "peta-batas-wilayah": <MapSection />,
  demografi: <DemografiSection />,
  prestasi: <PrestasiSection />,
};

export const Content = () => {
  const params = useSearchParams();

  return (
    <div className="flex-1">
      <AnimatePresence>{section[params.get("s") as string]!}</AnimatePresence>
    </div>
  );
};

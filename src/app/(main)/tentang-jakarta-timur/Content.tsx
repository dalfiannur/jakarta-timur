"use client";

import { ReactNode, useContext, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { PrestasiSection } from "./PrestasiSection";
import { DemografiSection } from "./DemografiSection";
import { MapSection } from "./MapSection";
import { VisiMisiSection } from "./VisiMisiSection";
import { SidebarContext } from "@/app/contexts/SidebarContext";

export const Content = () => {
  const { selectedTab } = useContext(SidebarContext);

  const content = useMemo(() => {
    const section: { [key: string]: ReactNode } = {
      "visi-misi": <VisiMisiSection />,
      peta: <MapSection />,
      demografi: <DemografiSection />,
      prestasi: <PrestasiSection />,
    };

    return section[selectedTab];
  }, [selectedTab]);

  return (
    <div className="flex-1">
      <AnimatePresence>{content}</AnimatePresence>
    </div>
  );
};

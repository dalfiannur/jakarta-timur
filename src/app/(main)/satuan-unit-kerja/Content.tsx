"use client";

import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { OrganizationStructure } from "./OrganizationStructure";

const section: { [key: string]: ReactNode } = {
  "struktur-organisasi": <OrganizationStructure />,
};

export const Content = () => {
  const params = useSearchParams();

  return (
    <div className="flex-1">
      <AnimatePresence>{section[params.get("s") as string]!}</AnimatePresence>
    </div>
  );
};

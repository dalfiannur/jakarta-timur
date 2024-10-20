"use client";
import { ReactNode, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

interface ProviderProps {
  children?: ReactNode;
}

export const SidebarProvider = ({ children }: ProviderProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("visi-misi");

  return (
    <SidebarContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </SidebarContext.Provider>
  );
};

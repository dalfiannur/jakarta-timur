"use client";
import { ReactNode, useState } from "react";
import { Context } from "./context";

interface ProviderProps {
  children?: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("visi-misi");

  return (
    <Context.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </Context.Provider>
  );
};

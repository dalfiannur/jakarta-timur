"use client";
import { useContext } from "react";
import { SidebarItem } from "./SidebarItem";
import { SidebarContext } from "../contexts/SidebarContext";

export const Sidebar = ({
  items,
}: {
  items: { label: string; key: string }[];
}) => {
  const { selectedTab, setSelectedTab } = useContext(SidebarContext);
  return (
    <div className="border rounded-xl max-w-72 h-fit">
      <h5 className="text-lg font-semibold px-6 pt-6">Tentang Jakarta Timur</h5>
      <ul className="py-6 flex flex-col gap-1">
        {items.map((item) => (
          <SidebarItem
            key={item.key}
            active={selectedTab === item.key}
            onClick={() => setSelectedTab(item.key)}
          >
            {item.label}
          </SidebarItem>
        ))}
      </ul>
    </div>
  );
};

"use client";
import { useContext } from "react";
import { SidebarItem } from "./SidebarItem";
import { Context } from "./context";

const items = [
  {
    label: "Visi Misi dan Kegiatan Strategis",
    key: "visi-misi",
  },
  {
    label: "Peta dan Batas Wilayah",
    key: "peta",
  },
  {
    label: "Demografi",
    key: "demografi",
  },
  {
    label: "Prestasi",
    key: "prestasi",
  },
];

export const Sidebar = () => {
  const { selectedTab, setSelectedTab } = useContext(Context);
  return (
    <div className="border rounded-xl max-w-72 h-fit">
      <h5 className="text-lg font-semibold px-6 pt-6">Tentang Jakarta Timur</h5>
      <ul className="py-6 flex flex-col gap-6">
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

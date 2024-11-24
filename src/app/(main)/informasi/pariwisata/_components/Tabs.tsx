import { useState } from "react";
import { TabItem } from "./TabItem";

type Tab = {
  label: string;
  value: string;
};

const TABS: Tab[] = [
  {
    value: "museum",
    label: "Museum",
  },
  {
    value: "sanggar-seni",
    label: "Sanggar Seni",
  },
  {
    value: "destinasi-budaya",
    label: "Destinasi Budaya",
  },
  {
    value: "cagar-budaya",
    label: "Cagar Budaya",
  },
];

export const Tabs = ({ onChange }: { onChange?: (tab: Tab) => void }) => {
  const [active, setActive] = useState(TABS[0]);

  return (
    <div className="overflow-x-scroll scrollbar-hidden">
      <div className="flex justify-start gap-4 md:justify-center">
        {TABS.map((tab) => (
          <TabItem
            key={tab.value}
            active={active.value === tab.value}
            label={tab.label}
            onClick={() => {
              setActive(tab);
              onChange?.(tab);
            }}
          />
        ))}
      </div>
    </div>
  );
};

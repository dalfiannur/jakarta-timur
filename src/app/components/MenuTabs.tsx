import { ReactNode, useMemo, useState } from "react";
import { ListItem } from "./ListItem";
import _ from "lodash";

interface Item {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

interface Tab {
  key: string;
  label: string;
  items: Item[];
}

interface MenuTabsProps {
  tabs: Tab[];
  defaultTab: string;
}

export const MenuTabs = ({ tabs, defaultTab }: MenuTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const panel = useMemo(() => {
    const current = tabs.find((tab) => tab.key === activeTab);
    if (!current) return null;

    return _.chunk(current.items, 2).map((section, index) => (
      <div key={index} className="flex flex-col gap-4">
        {section.map((item) => (
          <ListItem key={item.title} {...item} />
        ))}
      </div>
    ));
  }, [activeTab, tabs]);

  return (
    <div className="flex bg-white border-4 border-gray-300/30 rounded-xl transition-all duration-500 overflow-hidden">
      <ul className="p-4 flex flex-col gap-4 bg-gray-100 border-r-4 border-gray-200">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              data-selected={activeTab === tab.key ? true : undefined}
              onClick={() => setActiveTab(tab.key)}
              className="text-left font-semibold text-lg text-gray-500 data-[selected]:text-black data-[selected]:outline-none"
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="px-8 py-4 flex gap-4">{panel}</div>
    </div>
  );
};

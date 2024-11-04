import _ from "lodash";
import { ListItem } from "./ListItem";
import { IconKeys } from "../icons";

interface Item {
  icon?: IconKeys;
  title: string;
  link: string;
  description?: string;
}

interface MenuListProps {
  items: Item[];
}

export const MenuList = ({ items }: MenuListProps) => {
  const sections = _.chunk(items, 2).map((section, index) => (
    <div key={index} className="flex flex-col gap-4">
      {section.map((item, i) => (
        <ListItem key={i} {...item} />
      ))}
    </div>
  ));
  return (
    <div className="p-4 flex gap-4 bg-white border-4 border-gray-300/30 rounded-xl transition-all duration-500 overflow-hidden">
      {sections}
    </div>
  );
};

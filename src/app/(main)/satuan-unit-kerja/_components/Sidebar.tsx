import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({
  items,
}: {
  items: { label: string; key: string }[];
}) => {
  return (
    <div className="max-w-full border-none lg:border rounded-xl lg:max-w-72 h-fit">
      <h5 className="hidden px-6 pt-6 text-lg font-semibold lg:block font-plus-jakarta-sans">
        Tentang Jakarta Timur
      </h5>
      <ul className="flex flex-row gap-6 py-0 overflow-x-scroll scrollbar-hidden lg:py-6 lg:flex-col lg:gap-1 lg:overflow-auto">
        {items.map((item) => (
          <SidebarItem key={item.key} value={item.key}>
            {item.label}
          </SidebarItem>
        ))}
      </ul>
    </div>
  );
};

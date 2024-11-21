import { SidebarItem } from "./SidebarItem";

export const Sidebar = ({
  items,
}: {
  items: { label: string; key: string }[];
}) => {
  return (
    <div className="lg:border rounded-xl lg:max-w-72 h-fit px-6 lg:px-0">
      <h5 className="hidden lg:block text-lg font-semibold px-6 pt-6 font-plus-jakarta-sans">
        Tentang Jakarta Timur
      </h5>
      <ul className="py-0 lg:py-6 flex flex-row lg:flex-col gap-0 lg:gap-1 overflow-x-scroll scrollbar-hidden">
        {items.map((item) => (
          <SidebarItem key={item.key} value={item.key}>
            {item.label}
          </SidebarItem>
        ))}
      </ul>
    </div>
  );
};

import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="flex-1 max-w-72">
      <SidebarItem label="Dashboard Overview" href="/dashboard" />
      <SidebarItem label="Kependudukan" href="/dashboard/kependudukan" />
      <SidebarItem label="Pendidikan" href="/dashboard/pendidikan" />
      <SidebarItem label="Kesehatan" href="/dashboard/kesehatan" />
      <SidebarItem label="Industri" href="/dashboard/industri" />
      <SidebarItem label="Ekonomi" href="/dashboard/ekonomi" />
      <SidebarItem
        label="Lingkungan Hidup"
        href="/dashboard/lingkungan-hidup"
      />
      <SidebarItem label="Demokrasi" href="/dashboard/demokrasi" />
      <SidebarItem label="Kesejahteraan" href="/dashboard/kesejahteraan" />
    </div>
  );
};

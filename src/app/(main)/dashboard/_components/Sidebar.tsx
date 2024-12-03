import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="max-w-72 flex-1">
      <SidebarItem
        label="Dashboard Overview"
        href="/dashboard"
        icon="Grid2Line"
      />
      <SidebarItem
        label="Kependudukan"
        href="/dashboard/kependudukan"
        icon="Kependudukan"
      />
      <SidebarItem
        label="Pendidikan"
        href="/dashboard/pendidikan"
        icon="Pendidikan"
      />
      <SidebarItem
        label="Kesehatan"
        href="/dashboard/kesehatan"
        icon="Kesehatan"
      />
      <SidebarItem
        label="Industri"
        href="/dashboard/industri"
        icon="Industri"
      />
      <SidebarItem label="Ekonomi" href="/dashboard/ekonomi" icon="Ekonomi" />
      <SidebarItem
        label="Lingkungan Hidup"
        href="/dashboard/lingkungan-hidup"
        icon="LingkunganHidup"
      />
      <SidebarItem
        label="Demokrasi"
        href="/dashboard/demokrasi"
        icon="Demokrasi"
      />
      <SidebarItem
        label="Kesejahteraan"
        href="/dashboard/kesejahteraan"
        icon="Kesejahteraan"
      />
    </div>
  );
};

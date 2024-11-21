import { PageTitle } from "@/app/components/PageTitle";
import { PageBreadcrumbs } from "./_components/PageBreadcrumbs";
import { Sidebar } from "./_components/Sidebar";
import { sidebarItems } from "./constants";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pb-16">
      <PageTitle
        image="/img/kantor-walikota-jaktim.png"
        title="Tentang Jakarta Timur"
        subtitle="Temukan penjelasan lengkap tentang visi dan misi kami dalam menyediakan pelayanan"
      />
      <div className="relative z-10 lg:-mt-28 lg:container lg:mx-auto bg-soft-white rounded-4xl lg:p-8 lg:shadow-light">
        <PageBreadcrumbs />
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <Sidebar items={sidebarItems} />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

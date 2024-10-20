"use client";
import { PageTitle } from "@/app/components/PageTitle";
import { Content } from "./Content";
import { Sidebar } from "@/app/components/Sidebar";
import { PageBreadcrumbs } from "./PageBreadcrumbs";
import { sidebarItems } from "./constants";

export default function Page() {
  return (
    <div className="pb-16">
      <PageTitle
        image="/img/event-1.png"
        title="Tentang Jakarta Timur"
        subtitle="Temukan penjelasan lengkap tentang visi dan misi kami dalam menyediakan pelayanan"
      />
      <div className="relative z-10 -mt-28 container mx-auto bg-soft-white rounded-4xl p-8 shadow-light">
        <PageBreadcrumbs />
        <div className="mt-8 flex gap-8">
          <Sidebar items={sidebarItems} />
          <Content />
        </div>
      </div>
    </div>
  );
}

"use client";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { PageTitle } from "@/app/components/PageTitle";
import { Content } from "./Content";
import { SidebarProvider } from "@/app/providers/SidebarProvider";
import { Sidebar } from "@/app/components/Sidebar";
import { SidebarContext } from "@/app/contexts/SidebarContext";

const breadcrumbs = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Tentang Jakarta Timur",
  },
];

const selectableBreadcrumbs: {
  [key: string]: string;
} = {
  "visi-misi": "Visi Misi & Kegiatan Strategis",
  peta: "Peta dan Batas Wilayah",
  demografi: "Demografi",
  prestasi: "Prestasi",
};

const sidebarItems = [
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

export default function Page() {

  return (
    <div className="pb-16">
      <PageTitle
        image="/img/event-1.png"
        title="Tentang Jakarta Timur"
        subtitle="Temukan penjelasan lengkap tentang visi dan misi kami dalam menyediakan pelayanan"
      />
      <SidebarProvider>
        <div className="relative z-10 -mt-28 container mx-auto bg-soft-white rounded-4xl p-8 shadow-light">
          <SidebarContext.Consumer>
            {({ selectedTab }) => (
              <Breadcrumbs
                data={[...breadcrumbs, selectableBreadcrumbs[selectedTab]]}
                selectedTab={}
              />
            )}
          </SidebarContext.Consumer>
          <div className="mt-8 flex gap-8">
            <Sidebar items={sidebarItems} />
            <Content />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

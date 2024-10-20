"use client";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { PageTitle } from "@/app/components/PageTitle";
import { Sidebar } from "@/app/components/Sidebar";
import { SidebarContext } from "@/app/contexts/SidebarContext";
import { SidebarProvider } from "@/app/providers/SidebarProvider";

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
  "struktur-organisasi": "Struktur Organisasi",
  walikota: "Walikota",
  "sekretariat-kota": "Sekretariat Kota",
  "bagian-kota": "Bagian Kota",
  ukpd: "Unit Kerja Perangkat Daerah",
  kecamatan: "Kecamatan",
  kelurahan: "Kelurahan",
};

const sidebarItems = [
  {
    label: "Struktur Organisasi",
    key: "struktur-organisasi",
  },
  {
    label: "Walikota",
    key: "walikota",
  },
  {
    label: "Sekretariat Kota",
    key: "sekretariat-kota",
  },
  {
    label: "Bagian Kota",
    key: "bagian-kota",
  },
  {
    label: "UKPD",
    key: "ukpd",
  },
  {
    label: "Kecamatan",
    key: "kecamatan",
  },
  {
    label: "Kelurahan",
    key: "kelurahan",
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
                data={breadcrumbs}
                selectedTab={selectableBreadcrumbs[selectedTab]}
              />
            )}
          </SidebarContext.Consumer>
          <div className="mt-8 flex gap-8">
            <Sidebar items={sidebarItems} />
            {/* <Content /> */}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

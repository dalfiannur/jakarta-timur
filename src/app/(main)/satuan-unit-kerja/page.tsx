import { PageTitle } from "@/app/components/PageTitle";
import { Sidebar } from "@/app/components/Sidebar";

import { PageBreadcrumbs } from "./PageBreadcrumbs";
import { sidebarItems } from "./constants";
import { Content } from "./Content";

export default function Page() {
  return (
    <div className="pb-16">
      <PageTitle
        image="/img/kantor-walikota-jaktim.png"
        title="Satuan dan Unit Kerja"
        subtitle="Menghadirkan Inovasi dan Solusi untuk Kemajuan Kota yang Berkelanjutan"
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

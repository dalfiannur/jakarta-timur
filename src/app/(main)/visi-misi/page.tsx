"use client";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { PageTitle } from "@/app/components/PageTitle";
import { Sidebar } from "./Sidebar";
import { Provider } from "./Provider";
import { Content } from "./Content";

const breadcrumbs = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Tentang Jakarta Timur",
  },
  {
    label: "Visi Misi dan Kegiatan Strategis",
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
      <div className="relative z-10 -mt-28 container mx-auto bg-soft-white rounded-4xl p-8 shadow-light">
        <Breadcrumbs data={breadcrumbs} />
        <div className="mt-8 flex gap-8">
          <Provider>
            <Sidebar />
            <Content />
          </Provider>
        </div>
      </div>
    </div>
  );
}

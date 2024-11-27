import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { FilterSection } from "./_features/FilterSection";
import { SchoolList } from "./_features/SchoolList";
import { MapAreaNoSSR } from "./_features/MapAreaNoSSR";

export default function Page() {
  return (
    <div className="mt-20 lg:mt-32">
      <div className="container mx-auto">
        <div className="p-4">
          <Breadcrumbs
            data={[
              {
                label: "Beranda",
                link: "/",
              },
              {
                label: "Layanan",
                link: "#",
              },
              {
                label: "Pendidikan",
                link: "/layanan/pendidikan",
              },
              {
                label: "Profil Data Sekolah",
                link: "/layanan/pendidikan/profil",
              },
            ]}
          />

          <div className="mt-0 lg:mt-10">
            <h1 className="text-center font-plus-jakarta-sans text-2xl font-bold text-gray-950">
              Profil &amp; Data Sekolah Kota Jakarta Timur, D.K.I. Jakarta
            </h1>
            <p className="mt-2 text-center font-roboto text-lg text-gray-500">
              Sumber : Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi
            </p>
          </div>

          <div className="mt-10">
            <FilterSection />
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapAreaNoSSR />
              <SchoolList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

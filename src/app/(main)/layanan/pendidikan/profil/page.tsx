"use clint"
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { FilterSection } from "./_sections/FilterSection";
import { MapArea } from "@/app/components/Map";
import { SchoolList } from "./_features/SchoolList";

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
            <h1 className="text-2xl font-bold text-center font-plus-jakarta-sans text-gray-950">
              Profil &amp; Data Sekolah Kota Jakarta Timur, D.K.I. Jakarta
            </h1>
            <p className="mt-2 text-lg text-center text-gray-500 font-roboto">
              Sumber : Kementerian Pendidikan, Kebudayaan, Riset dan Teknologi
            </p>
          </div>

          <div className="mt-10">
            <FilterSection />
            <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
              <MapArea
                options={{
                  aspectRatio: 1,
                  latitude: -6.225014,
                  longitude: 106.900447,
                }}
              />
              <SchoolList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { FilterSection } from "./_features/FilterSection";
import { SchoolList } from "./_features/SchoolList";
import MapArea from "./_features/MapArea";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
import { trpc } from "@/utils/trpc";

const LIMIT = 4;

export default function Page() {
  const [district, setDistrict] = useState<string | undefined>();

  const [grade, setGrade] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>();
  const [page, setPage] = useState(1);
  const [map, setMap] = useState<LatLngExpression | undefined>();
  const res = trpc.externalApi.getSchools.useQuery({
    page,
    limit: LIMIT,
    search,
    district,
    grade,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / LIMIT);

  const marks: LatLngExpression[] = data
    .filter((d) => d.latitude !== null || d.longitude !== null)
    .map((item) => ({
      lat: parseFloat(item.latitude!),
      lng: parseFloat(item.longitude!),
    }));

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
            <FilterSection
              onDistrictChange={setDistrict}
              onSearch={setSearch}
              onGradeChange={setGrade}
            />
            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapArea data={marks} />
              <SchoolList
                isLoading={res.isLoading}
                data={data}
                page={page}
                pages={pages}
                setPage={setPage}
                setMap={setMap}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

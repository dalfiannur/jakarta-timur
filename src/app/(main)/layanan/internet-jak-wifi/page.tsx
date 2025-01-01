"use client";
import { FilterSection } from "./_features/FilterSection";
import { JakWifiList } from "./_features/JakWifiList";
import { useState } from "react";
import { Map } from "leaflet";

import { useGetJakWifiQuery } from "@/services/api/jakwifi";
import dynamic from "next/dynamic";

const MapArea = dynamic(() => import("./_features/MapArea"), {
  ssr: false,
});

const LIMIT = 4;

export default function Page() {
  const [map, setMap] = useState<Map>();
  const [kecamatan, setKecamatan] = useState<string | undefined>();
  const [kelurahan, setKelurahan] = useState<string | undefined>();
  const [rw, setRw] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetJakWifiQuery({
    page,
    limit: LIMIT,
    search,
    kecamatan,
    kelurahan,
    rw,
  });

  const total = data?.total ?? 0;
  const pages = Math.ceil(total / LIMIT);

  return (
    <div className="mt-20 lg:mt-32">
      <div className="container mx-auto">
        <div className="p-4">
          <div className="mt-10">
            <FilterSection
              onSearch={setSearch}
              onDistrictChange={setKecamatan}
              onSubDistrictChange={setKelurahan}
              onRwChange={setRw}
            />

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapArea data={data?.data ?? []} setMap={setMap} />
              {map && (
                <JakWifiList
                  map={map}
                  isLoading={isLoading}
                  data={data?.data ?? []}
                  page={page}
                  pages={pages}
                  setPage={setPage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

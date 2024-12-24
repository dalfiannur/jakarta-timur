"use client";
import { trpc } from "@/utils/trpc";
import { FilterSection } from "./_features/FilterSection";
import { JakWifiList } from "./_features/JakWifiList";
import { useState } from "react";
import { LatLngExpression } from "leaflet";
// import MapArea from "./_features/MapArea";
import dynamic from "next/dynamic";

const LIMIT = 4;

const MapArea = dynamic(() => import('./_features/MapArea'), { ssr: false })

export default function Page() {
  const [district, setDistrict] = useState<string | undefined>();
  const [subDistrict, setSubDistrict] = useState<string | undefined>();
  const [rw, setRw] = useState<string | undefined>();
  const [search, setSearch] = useState<string | undefined>();
  const [page, setPage] = useState(1);
  const [, setMap] = useState<LatLngExpression | undefined>();
  const res = trpc.externalApi.getJakWifi.useQuery({
    page,
    limit: LIMIT,
    search,
    district,
    subDistrict,
    rw,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / LIMIT);

  const marks: LatLngExpression[] = data.map((item) => ({
    lat: parseFloat(item.Latitude),
    lng: parseFloat(item.Longitude),
  }));

  return (
    <div className="mt-20 lg:mt-32">
      <div className="container mx-auto">
        <div className="p-4">
          <div className="mt-10">
            <FilterSection
              onSearch={setSearch}
              onDistrictChange={setDistrict}
              onSubDistrictChange={setSubDistrict}
              onRwChange={setRw}
            />

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapArea data={marks} />
              <JakWifiList
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

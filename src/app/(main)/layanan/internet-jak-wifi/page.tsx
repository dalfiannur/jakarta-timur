"use client";
import { trpc } from "@/utils/trpc";
import { FilterSection } from "./_features/FilterSection";
import { JakWifiList } from "./_features/JakWifiList";
import { MapAreaNoSSR } from "./_features/MapAreaNoSSR";
import { useState } from "react";
import { LatLngExpression } from "leaflet";

const LIMIT = 4;

export default function Page() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [map, setMap] = useState<LatLngExpression | undefined>();
  const res = trpc.externalApi.getJakWifi.useQuery({
    page,
    limit: LIMIT,
    search,
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
            <FilterSection />

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <MapAreaNoSSR data={marks} />
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

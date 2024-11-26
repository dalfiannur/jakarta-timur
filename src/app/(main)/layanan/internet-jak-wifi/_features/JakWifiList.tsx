"use client";
import { trpc } from "@/utils/trpc";
import {
  JakWifiListItem,
  JakWifiListItemSkeleton,
} from "../_components/JakWifiListItem";
import { Pagination } from "@/app/components/Pagination";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { store$ } from "../store";

const LIMIT = 4;

export const JakWifiList = ({
  onItemClicked,
}: {
  onItemClicked?: (date: JakWifi) => void;
}) => {
  const store = useStore(store$);
  const [page, setPage] = useState(1);
  const res = trpc.externalApi.getJakWifi.useQuery({
    page,
    limit: LIMIT,
    search: store.search,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / LIMIT);

  return (
    <div className="flex flex-col gap-4">
      {res.isLoading
        ? [1, 2, 3, 4].map((_, index) => (
            <JakWifiListItemSkeleton key={index} />
          ))
        : data.map((item, index) => (
            <JakWifiListItem
              key={index}
              district={item.kecamatan}
              subDistrict={item.kelurahan}
              rw={item.RW}
              address={item.Alamat}
              onClick={() => onItemClicked?.(item)}
            />
          ))}

      <div className="mt-4 flex justify-center">
        {pages > 1 && (
          <Pagination total={pages} page={page} onPageChange={setPage} />
        )}
      </div>
    </div>
  );
};

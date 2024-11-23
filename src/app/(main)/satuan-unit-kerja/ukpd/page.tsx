"use client";
import { Icon } from "@/app/icons";
import { SectionTitle } from "../_components/SectionTitle";
import { Pagination } from "@/app/components/Pagination";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

export default function Page() {
  const res = trpc.externalApi.getGovSubDistrictEmployers.useQuery({});
  const { pages, total, data } = useMemo(
    () => ({
      data: res.data?.data ?? [],
      total: res.data?.total ?? 0,
      pages: Math.ceil(res.data?.total ?? 0 / 9),
    }),
    [res]
  );

  return (
    <div className="flex-1">
      <SectionTitle>Unit Kerja Perangkat Daerah</SectionTitle>
      <p className="mt-6 text-xs font-semibold lg:text-base">
        Menampilkan 1-9 dari {total} Data
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 lg:gap-6 lg:grid-cols-3 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#F4F9FC] rounded py-4 px-6 flex flex-col justify-between gap-4"
          >
            <h5 className="text-sm font-semibold lg:text-xl">{item.jabatan}</h5>
            <div className="flex items-center gap-4">
              <Icon name="UserRoundedBoldDuotone" className="w-6 h-6" />
              <h6 className="flex-1 text-xs text-gray-500 lg:text-base">
                {item.nama}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Pagination total={pages} color="blue" />
      </div>
    </div>
  );
}

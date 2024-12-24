"use client";

import { ListNumberAccordion } from "@/app/components/ListNumberAccordion";
import { Icon } from "@/app/icons";
import { Rptra } from "@/types/rptra";
import { trpc } from "@/utils/trpc";
import Link from "next/link";
import { useMemo } from "react";

type DataItem = { [key: string]: Rptra[] };
export const Content = () => {
  const res = trpc.externalApi.getRptra.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  const data = useMemo(() => {
    if (!res.data) return {} as DataItem;
    const result: DataItem = {};
    res.data.data.forEach((d) => {
      result[d.kecamatan.nama] = [...(result[d.kecamatan.nama] ?? []), d];
    });
    return result;
  }, [res]);

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(data).map((key, xIndex) => (
        <ListNumberAccordion key={xIndex} numberLabel={xIndex + 1} label={key}>
          <div className="grid grid-cols-1 gap-0 p-0 lg:grid-cols-3 lg:gap-8 lg:p-8">
            {data[key].map((row, index) => (
              <div
                key={index}
                className="rounded-none border p-4 lg:rounded-xl lg:p-8"
              >
                <div className="flex aspect-square h-12 items-center justify-center rounded-xl bg-blue-100 lg:h-16">
                  <Icon
                    name="ParkMultiColored"
                    className="aspect-square h-6 lg:h-8"
                  />
                </div>
                <div className="mt-4 grid gap-2">
                  <h4 className="text-base font-bold lg:text-lg">{row.nama}</h4>
                  <p className="text-sm text-gray-600 lg:text-base">
                    {row.alamat}
                  </p>
                  <Link
                    href={"#"}
                    className="mt-2 inline-flex w-fit gap-2 rounded-lg border border-pink-500 px-2 py-[6px] text-[10px] text-pink-500"
                  >
                    <Icon
                      name="GoogleMapColored"
                      className="h-[10px] w-[10px]"
                    />
                    Lihat di Google Maps
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ListNumberAccordion>
      ))}
    </div>
  );
};

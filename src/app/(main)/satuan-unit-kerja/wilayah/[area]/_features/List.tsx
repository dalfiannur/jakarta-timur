"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/icons";
import { DetailModal } from "./DetailModal";
import { trpc } from "@/utils/trpc";
import { GovEmployer } from "@/types/gov-employer";
import { useStore } from "@nanostores/react";
import { store$ } from "../store";

type ListProps = {
  area: string;
};

export const List = ({ area }: ListProps) => {
  const store = useStore(store$);

  const options: {
    search: string;
    area: string;
    filters: { by: string; value: string }[];
  } = {
    search: store.search,
    area,
    filters: [],
  };

  if (store.kecamatan_slug) {
    options.filters.push({
      by: "kecamatan_slug",
      value: store.kecamatan_slug,
    });
  }

  const [selected, setSelected] = useState<null | GovEmployer>(null);
  const res = trpc.externalApi.getGovAreaEmployers.useQuery(options);
  const data = res.data?.data ?? [];

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 p-4 text-left border lg:px-6 lg:py-5 rounded-xl"
          >
            {item.image && (
              <button
                onClick={() => setSelected(item)}
                className="relative w-16 lg:w-20 aspect-square"
              >
                <Image
                  src={item.image}
                  alt={item.nama}
                  fill
                  className="object-cover rounded-xl"
                />
              </button>
            )}
            <button
              onClick={() => setSelected(item)}
              className="flex-1 text-left"
            >
              <h5 className="text-sm font-bold lg:text-lg">{item.nama}</h5>
              <div className="grid gap-1 mt-0 lg:mt-2">
                <p className="text-xs text-gray-500 lg:text-sm">
                  {item.jabatan}
                </p>
                <p className="text-sm lg:text-gray-500">{item.pejabat}</p>
              </div>
            </button>
            <Link
              href={`/satuan-unit-kerja/wilayah/${area}/${item.slug}`}
              className="z-30 text-pink-500"
            >
              <Icon name="OutlineShare" className="w-4 lg:w-8 aspect-square" />
            </Link>
          </div>
        ))}
      </div>

      {selected && (
        <DetailModal data={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

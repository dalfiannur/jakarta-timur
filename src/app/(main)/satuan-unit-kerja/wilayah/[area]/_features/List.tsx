"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/icons";
import { DetailModal } from "./DetailModal";
import { trpc } from "@/utils/trpc";
import { GovEmployer } from "@/types/gov-employer";
import { store } from "../store";
import { Pagination } from "@/app/components/Pagination";

type ListProps = {
  area: string;
};

const PAGE_LIMIT = 10;

export const List = ({ area }: ListProps) => {
  const { search, kecamatan_id, page } = store.value;
  const options: {
    search: string;
    area: string;
    limit: number;
    filters: { by: string; value: string }[];
  } = {
    search: search.value,
    area,
    limit: PAGE_LIMIT,
    filters: [],
  };

  if (kecamatan_id.value) {
    options.filters.push({
      by: "kecamatan_id",
      value: kecamatan_id.value,
    });
  }

  const [selected, setSelected] = useState<null | GovEmployer>(null);
  const res = trpc.externalApi.getGovAreaEmployers.useQuery(options);
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / PAGE_LIMIT);

  const skeletons = useMemo(
    () =>
      Array.from(new Array(4).keys()).map((_, index) => (
        <Skeleton key={index} />
      )),
    [],
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {res.isLoading
          ? skeletons
          : data.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 rounded-xl border p-4 text-left lg:px-6 lg:py-5"
              >
                {item.image && (
                  <button
                    onClick={() => setSelected(item)}
                    className="relative aspect-square w-16 lg:w-20"
                  >
                    <Image
                      src={item.image}
                      alt={item.nama}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </button>
                )}
                <button
                  onClick={() => setSelected(item)}
                  className="flex-1 text-left"
                >
                  <h5 className="text-sm font-bold lg:text-lg">{item.nama}</h5>
                  <div className="mt-0 grid gap-1 lg:mt-2">
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
                  <Icon
                    name="OutlineShare"
                    className="aspect-square w-4 lg:w-8"
                  />
                </Link>
              </div>
            ))}
      </div>

      {pages > 1 && (
        <div className="flex justify-center">
          <Pagination
            page={page.value}
            total={pages}
            onPageChange={(v) => (page.value = v)}
          />
        </div>
      )}

      {selected && (
        <DetailModal data={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

const Skeleton = () => {
  return (
    <div className="flex w-full animate-pulse gap-4 rounded-xl bg-gray-100 p-4">
      <div className="aspect-square w-16 rounded-xl bg-gray-200" />
      <div className="flex flex-1 flex-col gap-4">
        <div className="h-2 w-1/2 rounded-full bg-gray-200" />
        <div className="h-2 w-full rounded-full bg-gray-200" />
        <div className="h-2 w-full rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

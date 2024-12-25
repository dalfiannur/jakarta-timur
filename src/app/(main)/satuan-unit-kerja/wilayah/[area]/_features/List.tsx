"use client";

import { useContext, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/app/icons";
import { DetailModal } from "./DetailModal";
import { GovEmployer } from "@/types/gov-employer";
import { Pagination } from "@/app/components/Pagination";
import { Context } from "../context";
import { useGetAreaQuery } from "@/services/api/area";

type ListProps = {
  area: string;
};

type Option = {
  nama: string;
  area: string;
  page: number;
  limit: number;
  filters: { by: string; value: string }[];
};

const PAGE_LIMIT = 10;

export const List = ({ area }: ListProps) => {
  const { nama, kecamatanId } = useContext(Context);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<null | GovEmployer>(null);

  const options = useMemo<Option>(() => {
    const filters: { by: string; value: string }[] = [];

    if (kecamatanId) {
      filters.push({
        by: "kecamatan_id",
        value: kecamatanId,
      });
    }
    return {
      nama,
      area,
      page,
      limit: area === "kecamatan" ? 1000 : PAGE_LIMIT,
      filters,
    };
  }, [nama, area, page, kecamatanId]);

  const res = useGetAreaQuery(options);
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / PAGE_LIMIT);

  const skeletons = useMemo(
    () =>
      Array.from(new Array(10).keys()).map((_, index) => (
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

      {area === "kelurahan" && (
        <div className="flex justify-center">
          <Pagination
            page={page}
            total={pages}
            onPageChange={(v) => setPage(v)}
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

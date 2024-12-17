"use client";
import { Pagination } from "@/app/components/Pagination";
import { trpc } from "@/utils/trpc";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

export const BulletinList = () => {
  const [page, setPage] = useState(1);
  const res = trpc.externalApi.buletin.useQuery({
    limit: 8,
    page,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / 8);

  const skeleton = useMemo(
    () =>
      Array.from(new Array(8).keys()).map((key) => (
        <div key={key} className="flex animate-pulse flex-col gap-2 lg:gap-4">
          <div className="relative aspect-[3/4] w-full rounded-lg bg-gray-200" />
          <h4 className="h-6 rounded-full bg-gray-200 font-plus-jakarta-sans text-xs font-semibold lg:text-sm" />
        </div>
      )),
    [],
  );

  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 lg:mt-10 lg:grid-cols-4">
        {res.isLoading
          ? skeleton
          : data.map((item, index) => (
              <Link key={index} href={`/publikasi/buletin/${item.id}`}>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={item.img_url}
                      alt={item.title}
                      fill
                      className="rounded-xl object-cover"
                    />
                  </div>
                  <h4 className="font-plus-jakarta-sans text-xs font-semibold lg:text-sm">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
      </div>
      <div className="mt-20 flex justify-center">
        <Pagination total={pages} page={page} onPageChange={setPage} />
      </div>
    </>
  );
};

"use client";
import { Pagination } from "@/app/components/Pagination";
import { PhotoItem } from "./_components/PhotoItem";
import { trpc } from "@/utils/trpc";
import { useMemo, useState } from "react";
import { PhotoItemSkeleton } from "./_components/PhotoItemSkeleton";

export default function Page() {
  const [page, setPage] = useState(1);
  const res = trpc.externalApi.galleries.useQuery({
    page,
    limit: 8,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / 8);

  const skeleton = useMemo(
    () =>
      Array.from(new Array(8).keys()).map((key) => (
        <PhotoItemSkeleton key={key} />
      )),
    [],
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-8 md:gap-4 lg:gap-12">
        {res.isLoading
          ? skeleton
          : data.map((item, index) => (
              <PhotoItem
                key={index}
                title={item.title}
                date={item.time}
                id={item.id}
                location={item.lokasi}
                image={item.img_url}
              />
            ))}
      </div>
      <div className="mt-14 flex justify-center">
        <Pagination total={pages} page={page} onPageChange={setPage} />
      </div>
    </>
  );
}

"use client";
import { Pagination } from "@/app/components/Pagination";
import { VideoItem } from "./_components/VideoItem";
import { useMemo, useState } from "react";
import { trpc } from "@/utils/trpc";
import { VideoItemSkeleton } from "./_components/VideoItemSkeleton";

export default function Page() {
  const [page, setPage] = useState(1);
  const res = trpc.externalApi.videos.useQuery({
    page,
    limit: 4,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / 4);

  const skeleton = useMemo(
    () =>
      Array.from(new Array(4).keys()).map((key) => (
        <VideoItemSkeleton key={key} />
      )),
    [],
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-12">
        {res.isLoading
          ? skeleton
          : data.map((item, index) => (
              <VideoItem
                key={index}
                category={item.kategori.cat}
                source={item.source}
                title={item.title}
                date={item.tanggal}
                slug={item.slug}
              />
            ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Pagination total={pages} page={page} onPageChange={setPage} />
      </div>
    </>
  );
}

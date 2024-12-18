"use client";
import { NewsItem } from "./_components/NewsItem";
import { Pagination } from "@/app/components/Pagination";
import { trpc } from "@/utils/trpc";
import { useEffect, useMemo, useState } from "react";
import { NewsItemSkeleton } from "./_components/NewsItemSkeleton";

const LIMIT = 10;

export default function Page() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const res = trpc.externalApi.news.useQuery({
    page,
    limit: LIMIT,
  });
  const data = res.data?.data ?? [];
  const pages = Math.ceil(total / LIMIT);

  useEffect(() => {
    if (res.isSuccess) {
      setTotal(res.data.total);
    }
  }, [res]);

  const skeleton = useMemo(
    () =>
      Array.from(new Array(LIMIT).keys()).map((key) => (
        <NewsItemSkeleton key={key} />
      )),
    [],
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-12">
        {res.isLoading
          ? skeleton
          : data.map((item, index) => (
              <NewsItem
                key={index}
                id={item.id}
                category={item.kategori.cat}
                image={item.img_url}
                imageName={item.img_name}
                title={item.title}
                content={item.content}
                author={item.writer}
                date={item.time}
              />
            ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Pagination page={page} total={pages} onPageChange={setPage} />
      </div>
    </>
  );
}

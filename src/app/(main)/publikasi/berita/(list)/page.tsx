"use client";
import { NewsItem } from "./_components/NewsItem";
import { Pagination } from "@/app/components/Pagination";
import { trpc } from "@/utils/trpc";

const LIMIT = 10;

export default function Page() {
  const res = trpc.externalApi.news.useQuery({
    limit: LIMIT,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / LIMIT);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:gap-12">
        {data.map((item, index) => (
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
        <Pagination total={pages} />
      </div>
    </>
  );
}

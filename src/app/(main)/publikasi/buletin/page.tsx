"use client";
import { Pagination } from "@/app/components/Pagination";
import { PhotoItem } from "./_components/PhotoItem";
import { useSearchParams } from "next/navigation";
import { trpc } from "@/utils/trpc";

const LIMIT = 8;

export default function Page() {
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit");
  const page = searchParams.get("page");
  const res = trpc.externalApi.buletin.useQuery({
    limit: limit ? parseInt(limit) : LIMIT,
    page: page ? parseInt(page) : 1,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / LIMIT);

  return (
    <div className="px-4">
      <div className="grid gap-2 text-center">
        <h2 className="font-plus-jakarta-sans text-lg font-bold lg:text-3xl">
          Buletin Info Jaktim
        </h2>
        <p className="font-plus-jakarta-sans text-base text-gray-500 lg:text-xl">
          Informasi terkini dan pembaruan penting bagi warga Jakarta Timur
        </p>
      </div>

      <div className="mt-12">
        <div className="lf:grid-cols-4 grid grid-cols-2 gap-x-4 gap-y-6 lg:gap-12">
          {data.map((item, index) => (
            <PhotoItem
              key={index}
              id={item.id}
              image={item.img_url}
              title={item.title}
            />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Pagination total={pages} />
        </div>
      </div>
    </div>
  );
}

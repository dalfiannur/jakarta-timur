"use client";
import { Pagination } from "@/app/components/Pagination";
import { PhotoItem } from "../_components/PhotoItem";
import { useState } from "react";
import { useGetBulletinsQuery } from "@/services/api/bulletin";

export const BulletinList = () => {
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const res = useGetBulletinsQuery({
    limit,
    page,
  });
  const data = res.data?.data ?? [];
  const total = res.data?.total ?? 0;
  const pages = Math.ceil(total / limit);

  return (
    <>
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
        <Pagination total={pages} page={page} onPageChange={setPage} />
      </div>
    </>
  );
};

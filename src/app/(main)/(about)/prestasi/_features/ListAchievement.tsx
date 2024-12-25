"use client";
import { PrestasiItem } from "../_components/PrestasiItem";
import { useContext, useState } from "react";
import { Context } from "../context";
import { useGetAchievementsQuery } from "@/services/api/achievement";
import { Pagination } from "@/app/components/Pagination";
import { Icon } from "@/app/icons";

export const ListAchievement = () => {
  const [page, setPage] = useState(1);
  const { search, sort, tahun, view } = useContext(Context);

  const { data } = useGetAchievementsQuery({
    search,
    sort,
    tahun,
    limit: 9,
    page,
  });

  const total = data?.total ?? 0;
  const pages = Math.ceil(total / 9);

  return (
    <div>
      {total > 0 ? (
        <div
          data-view={view}
          className="mt-4 grid gap-4 data-[view=grid]:grid-cols-2 data-[view=list]:grid-cols-1 lg:mt-8 lg:gap-8 lg:data-[view=grid]:grid-cols-3"
        >
          {data?.data.map((row, index) => (
            <PrestasiItem key={index} view={view} item={row} />
          ))}
        </div>
      ) : (
        <div className="mt-20 flex min-h-80 flex-col items-center justify-center gap-4">
          <Icon name="Empty" />
          <p>Data tidak ditemukan.</p>
        </div>
      )}
      {pages > 0 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            color="blue"
            total={pages}
            page={page}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
};

"use client";
import { Icon } from "@/app/icons";
import { SectionTitle } from "../_components/SectionTitle";
import { Pagination } from "@/app/components/Pagination";
import { trpc } from "@/utils/trpc";
import { useMemo, useState } from "react";
import { CardSkeleton } from "./_components/CardSkeleton";
import { AnimatePresence, motion } from "motion/react";

export default function Page() {
  const [page, setPage] = useState(1);
  const res = trpc.externalApi.getGovSubDistrictEmployers.useQuery({
    page,
    limit: 9,
  });
  const { pages, total, data } = useMemo(
    () => ({
      data: res.data?.data ?? [],
      total: res.data?.total ?? 0,
      pages: Math.ceil((res.data?.total ?? 0) / 9),
    }),
    [res],
  );

  const skeleton = useMemo(
    () => Array.from(new Array(9).keys()).map((i) => <CardSkeleton key={i} />),
    [],
  );

  return (
    <div className="flex-1">
      <SectionTitle>Unit Kerja Perangkat Daerah</SectionTitle>
      <p className="mt-6 text-xs font-semibold lg:text-base">
        Menampilkan 1-9 dari {total} Data
      </p>
      <AnimatePresence>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6 ">
          {res.isLoading
            ? skeleton
            : data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.6 } }}
                >
                  <div className="flex flex-col justify-between gap-4 rounded bg-[#F4F9FC] px-6 py-4">
                    <h5 className="text-sm font-semibold lg:text-xl">
                      {item.nama}
                    </h5>
                    <div className="flex items-center gap-4">
                      <Icon name="UserRoundedBoldDuotone" className="h-6 w-6" />
                      <h6 className="flex-1 text-xs text-gray-500 lg:text-base">
                        {item.pejabat}
                      </h6>
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
      </AnimatePresence>
      <div className="mt-16 flex justify-center">
        <Pagination
          page={page}
          total={pages}
          color="blue"
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

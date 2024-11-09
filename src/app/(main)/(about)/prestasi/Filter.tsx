"use client";
import { Select } from "@/app/components/Select";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const sort = [
  {
    label: "Terbaru",
    value: "latest",
  },
];

const years = [
  {
    label: "2020",
    value: "2020",
  },
];

export const Filter = () => {
  const router = useRouter();
  const sp = useSearchParams();

  const onChange = useCallback((key: string, value: string) => {
    const searchParams = new URLSearchParams(sp);
    searchParams.set(key, value);
    router.push("?" + searchParams.toString(), {
      scroll: false,
    });
  }, []);

  return (
    <div className="flex gap-6 items-center">
      <div className="font-plus-jakarta-sans font-bold">Urutkan :</div>
      <div className="flex gap-4">
        <Select
          data={sort}
          defaultSelected={sort[0]}
          onChange={({ value }) => onChange("sort", value)}
        />
        <Select
          placeholder="Tahun"
          data={years}
          onChange={({ value }) => onChange("years", value)}
        />
      </div>
    </div>
  );
};

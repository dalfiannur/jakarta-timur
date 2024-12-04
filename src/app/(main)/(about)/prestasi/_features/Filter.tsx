"use client";
import { SelectCSR } from "@/app/components/SelectCSR";
import * as store from "../store";
import { useSetAtom } from "jotai";

const sort = [
  {
    label: "Terbaru",
    value: "desc",
  },
];

const years = [
  {
    label: "2020",
    value: "2020",
  },
];

export const Filter = () => {
  const setSort = useSetAtom(store.sort);
  const setYear = useSetAtom(store.year);
  return (
    <div className="flex items-center gap-2 lg:gap-6">
      <div className="whitespace-nowrap font-plus-jakarta-sans text-xs font-bold lg:text-base">
        Urutkan :
      </div>
      <div className="flex gap-2 lg:gap-4">
        <SelectCSR
          placeholder="Pilih"
          data={sort}
          defaultSelected={sort[0]}
          onChange={(option) => setSort(option?.value ?? undefined)}
        />
        <SelectCSR
          placeholder="Pilih Tahun"
          data={years}
          onChange={(option) => setYear(option?.value ?? undefined)}
        />
      </div>
    </div>
  );
};

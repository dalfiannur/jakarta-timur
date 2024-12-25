"use client";
import { SelectCSR } from "@/app/components/SelectCSR";
import { useContext, useMemo } from "react";
import { Context } from "../context";

const sort = [
  {
    label: "Terbaru",
    value: "desc",
  },
  {
    label: "Terlama",
    value: "asc",
  },
];

export const Filter = () => {
  const { setSort, setTahun: setYear } = useContext(Context);

  const years = useMemo(
    () =>
      Array.from(new Array(new Date().getFullYear() + 1 - 2022).keys()).map(
        (key) => ({ value: String(2022 + key), label: String(2022 + key) }),
      ),
    [],
  );

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
          onChange={(option) => option && setSort(option.value)}
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

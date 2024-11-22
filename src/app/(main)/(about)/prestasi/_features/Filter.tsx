"use client";
import { SelectCSR } from "@/app/components/SelectCSR";
import { store$ } from "../store";

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
  return (
    <div className="flex gap-2 lg:gap-6 items-center">
      <div className="text-xs lg:text-base whitespace-nowrap font-plus-jakarta-sans font-bold">
        Urutkan :
      </div>
      <div className="flex gap-2 lg:gap-4">
        <SelectCSR
          placeholder="Pilih"
          data={sort}
          defaultSelected={sort[0]}
          onChange={(option) =>
            store$.setKey("filter.sort", option?.value ?? undefined)
          }
        />
        <SelectCSR
          placeholder="Pilih Tahun"
          data={years}
          onChange={(option) =>
            store$.setKey("filter.year", option?.value ?? undefined)
          }
        />
      </div>
    </div>
  );
};

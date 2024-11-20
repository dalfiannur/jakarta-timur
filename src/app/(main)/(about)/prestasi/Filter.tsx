"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";

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

export const Filter = ({
  onSortChange,
  onYearChange,
}: {
  onSortChange?: (item: SelectOption | null) => void;
  onYearChange?: (item: SelectOption | null) => void;
}) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="font-plus-jakarta-sans font-bold">Urutkan :</div>
      <div className="flex gap-4">
        <SelectCSR
          data={sort}
          defaultSelected={sort[0]}
          onChange={onSortChange}
        />
        <SelectCSR placeholder="Tahun" data={years} onChange={onYearChange} />
      </div>
    </div>
  );
};

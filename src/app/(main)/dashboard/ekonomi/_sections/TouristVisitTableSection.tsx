"use client";
import { Pagination } from "@/app/components/Pagination";
import { SearchInput } from "@/app/components/SearchInput";
import { useTable } from "@/app/hooks/useTable";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SelectSubDistrict } from "@/app/sections/SelectSubDistrict";
import { formattedNumber } from "@/utils/format-number";

type DataItem = {
  id: number;
  name: string;
  district: string;
  subDistrict: string;
  domestic: number;
  foreigner: number;
};

const data: DataItem[] = [
  {
    id: 1,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    domestic: 20000,
    foreigner: 5000,
  },
  {
    id: 2,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    domestic: 20000,
    foreigner: 5000,
  },
  {
    id: 3,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    domestic: 20000,
    foreigner: 5000,
  },
  {
    id: 4,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    domestic: 20000,
    foreigner: 5000,
  },
  {
    id: 5,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    domestic: 20000,
    foreigner: 5000,
  },
];

export const TouristVisitTableSection = () => {
  const { table } = useTable({
    columns: [
      {
        keyIndex: "name",
        header: () => "Nama",
        classNames: {
          cell: "whitespace-nowrap",
        },
      },
      {
        keyIndex: "district",
        header: () => "Kecamatan",
      },
      {
        keyIndex: "subDistrict",
        header: () => "Kelurahan",
      },
      {
        keyIndex: "domestic",
        header: () => "Wisnus",
        cell: (row) => formattedNumber(row.domestic),
      },
      {
        keyIndex: "foreigner",
        header: () => "Wisman",
        cell: (row) => formattedNumber(row.foreigner),
      },
      {
        keyIndex: "total",
        header: () => "Jumlah",
        cell: (row) => formattedNumber(row.domestic + row.foreigner),
      },
    ],
    data,
    classNames: {
      body: {
        row: "text-center",
      },
    },
  });

  return (
    <div className="flex flex-col gap-6 py-4">
      <h4 className="font-plus-jakarta-sans text-lg font-semibold">
        Data Kunjungan Wisatawan
      </h4>
      <div className="flex flex-wrap gap-4">
        <SearchInput placeholder="Cari nama lokasi" color="orange" />
        <SelectDistrict color="orange" />
        <SelectSubDistrict color="orange" />
      </div>
      <div className="overflow-x-scroll scrollbar-hidden">{table}</div>
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-2 font-plus-jakarta-sans text-xs font-semibold text-gray-400 lg:col-span-1 lg:text-base">
          Menampilkan 1-5 dari 10 Data
        </div>
        <div className="flex justify-center">
          <Pagination total={2} color="orange" />
        </div>
      </div>
    </div>
  );
};

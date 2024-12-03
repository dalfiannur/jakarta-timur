"use client";
import { Pagination } from "@/app/components/Pagination";
import { SearchInput } from "@/app/components/SearchInput";
import { useTable } from "@/app/hooks/useTable";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SelectSubDistrict } from "@/app/sections/SelectSubDistrict";

type DataItem = {
  id: number;
  name: string;
  district: string;
  subDistrict: string;
  longitude: number;
  latitude: number;
  address: string;
  category: string;
  description: string;
};

const data: DataItem[] = [
  {
    id: 1,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    longitude: 106895157,
    latitude: -6302446,
    address:
      "Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta Timur",
    category: "Hiburan, Edukasi",
    description: "-",
  },
  {
    id: 2,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    longitude: 106895157,
    latitude: -6302446,
    address:
      "Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta Timur",
    category: "Hiburan, Edukasi",
    description: "-",
  },
  {
    id: 3,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    longitude: 106895157,
    latitude: -6302446,
    address:
      "Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta Timur",
    category: "Hiburan, Edukasi",
    description: "-",
  },
  {
    id: 4,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    longitude: 106895157,
    latitude: -6302446,
    address:
      "Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta Timur",
    category: "Hiburan, Edukasi",
    description: "-",
  },
  {
    id: 5,
    name: "Taman Burung",
    district: "Cipayung",
    subDistrict: "Cager",
    longitude: 106895157,
    latitude: -6302446,
    address:
      "Jl. Taman Mini Indonesia Indah, Ceger, Kec. Cipayung, Kota Jakarta Timur",
    category: "Hiburan, Edukasi",
    description: "-",
  },
];

export const TouristDestinationTableSection = () => {
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
        keyIndex: "longitude",
        header: () => "Longitude",
      },
      {
        keyIndex: "latitude",
        header: () => "Latitude",
      },
      {
        keyIndex: "address",
        header: () => "Alamat",
        cell: (row) => <div className="min-w-72">{row.address}</div>
      },
      {
        keyIndex: "category",
        header: () => "Kategori",
        cell: (row) => <div className="min-w-32">{row.category}</div>
      },
      {
        keyIndex: "description",
        header: () => "Deskripsi",
      },
      {
        keyIndex: "id",
        header: () => "",
        cell: () => <a href="#" className="whitespace-nowrap">Lihat Detail</a>,
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
        Destinasi Wisata di Jakarta Timur
      </h4>
      <div className="flex flex-wrap gap-4">
        <SearchInput placeholder="Cari nama hotel" color="orange" />
        <SelectDistrict color="orange" />
        <SelectSubDistrict color="orange" />
      </div>
      <div className="overflow-x-scroll scrollbar-hidden">{table}</div>
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-2 lg:col-span-1 font-plus-jakarta-sans font-semibold text-gray-400 text-xs lg:text-base">
          Menampilkan 1-5 dari 10 Data
        </div>
        <div className="flex justify-center">
          <Pagination total={1} color="orange" />
        </div>
      </div>
    </div>
  );
};

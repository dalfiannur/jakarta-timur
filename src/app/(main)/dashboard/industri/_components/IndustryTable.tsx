"use client";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SearchInput } from "./SearchInput";
import { ReactNode, useState } from "react";
import { SelectOption } from "@/app/components/SelectCSR";
import { SelectSubDistrict } from "@/app/sections/SelectSubDistrict";
import __ from "lodash";
import { Icon } from "@/app/icons";

export type Column<T> = {
  key: keyof T;
  title: string;
  render?: (row: T) => ReactNode;
};

export const IndustryTable = <T,>({
  title,
  columns = [],
  data = [],
}: {
  title: string;
  columns?: Column<T>[];
  data: T[];
}) => {
  const [district, setDistrict] = useState<SelectOption | null>(null);
  const [, setSubDistrict] = useState<SelectOption | null>(null);

  return (
    <div className="flex flex-col gap-6 p-4">
      <h6 className="text-lg font-semibold font-plus-jakarta-sans text-gray-800">
        {title}
      </h6>
      <div className="flex gap-6">
        <SearchInput placeholder="Cari Nama Kelurahan" />
        <SelectDistrict onChange={setDistrict} />
        <SelectSubDistrict district={district?.value} onChange={setSubDistrict} />
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="bg-[#FFF3EF] p-4 font-inter font-medium text-gray-800 text-sm"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, cIndex) => (
                <td
                  key={cIndex}
                  className="p-4 text-center border-b text-xs font-medium font-plus-jakarta-sans"
                >
                  {column.render ? column.render(row) : __.get(row, column.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="text-gray-400/80 font-plus-jakarta-sans font-semibold">
          Menampilkan 1-5 dari 10 Data
        </div>
        <div className="flex gap-4">
          <button disabled className="text-gray-400">
            <Icon name="ChevronLeft" size={24} />
          </button>
          <button className="bg-orange-500 rounded-full text-white w-8 h-8 font-semibold flex items-center justify-center">
            1
          </button>
          <button className="rounded-full text-orange-500 w-8 h-8 font-semibold flex items-center justify-center">
            2
          </button>
          <button className="rounded-full text-orange-500 w-8 h-8 font-semibold flex items-center justify-center">
            3
          </button>
          <button className="rounded-full text-orange-500 w-8 h-8 font-semibold flex items-center justify-center">
            4
          </button>
          <button className="text-orange-500">
            <Icon name="ChevronRight" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

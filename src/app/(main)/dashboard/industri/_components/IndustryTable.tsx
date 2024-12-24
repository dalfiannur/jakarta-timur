"use client";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SearchInput } from "./SearchInput";
import { ReactNode, useState } from "react";
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
  const [district, setDistrict] = useState<{ id: number; slug: string } | null>(
    null,
  );
  const [, setSubDistrict] = useState<{ id: number; slug: string } | null>(
    null,
  );

  return (
    <div className="flex flex-col gap-6 p-4">
      <h6 className="font-plus-jakarta-sans text-lg font-semibold text-gray-800">
        {title}
      </h6>
      <div className="flex gap-6">
        <SearchInput placeholder="Cari Nama Kelurahan" />
        <SelectDistrict onChange={setDistrict} />
        <SelectSubDistrict
          districtId={district?.id}
          onChange={setSubDistrict}
        />
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="bg-[#FFF3EF] p-4 font-inter text-sm font-medium text-gray-800"
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
                  className="border-b p-4 text-center font-plus-jakarta-sans text-xs font-medium"
                >
                  {column.render ? column.render(row) : __.get(row, column.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-3 items-center gap-4">
        <div className="font-plus-jakarta-sans font-semibold text-gray-400/80">
          Menampilkan 1-5 dari 10 Data
        </div>
        <div className="flex gap-4">
          <button disabled className="text-gray-400">
            <Icon name="ChevronLeft" className="h-6 w-6" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
            1
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full font-semibold text-orange-500">
            2
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full font-semibold text-orange-500">
            3
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full font-semibold text-orange-500">
            4
          </button>
          <button className="text-orange-500">
            <Icon name="ChevronRight" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

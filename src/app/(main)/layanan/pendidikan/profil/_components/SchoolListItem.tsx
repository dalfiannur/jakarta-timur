"use client";
import { useMemo } from "react";

type SchoolListItemProps = {
  name: string;
  address: string;
  npsn: number;
  totalTeacher: number;
  totalTendik: number;
  totalClass: number;
  totalLibrary: number;
  totalLab: number;
};

export const SchoolListItem = ({
  name,
  address,
  npsn,
  totalClass,
  totalLab,
  totalLibrary,
  totalTeacher,
  totalTendik,
}: SchoolListItemProps) => {
  const details = useMemo(
    () => [
      {
        label: "NPSN",
        value: npsn,
      },
      {
        label: "Guru",
        value: totalTeacher,
      },
      {
        label: "Tendik",
        value: totalTendik,
      },
      {
        label: "Kelas",
        value: totalClass,
      },
      {
        label: "Perpustakaan",
        value: totalLibrary,
      },
      {
        label: "Lab",
        value: totalLab,
      },
    ],
    [npsn, totalClass, totalLab, totalLibrary, totalTeacher, totalTendik]
  );

  return (
    <div className="flex gap-4 p-2 border rounded-xl lg:p-4 lg:gap-10">
      <div className="w-8 h-8 bg-blue-100 rounded-full lg:w-16 lg:h-16" />
      <div className="flex-1">
        <div className="flex justify-between gap-6">
          <div className="flex-1 font-plus-jakarta-sans">
            <h2 className="text-base font-bold lg:text-xl">{name}</h2>
            <p className="mt-0 lg:mt-[2px] font-medium text-sm lg:text-lg text-gray-500/80">
              {address}
            </p>
          </div>
          <div className="flex items-center justify-center w-6 h-6 text-xs text-white bg-blue-500 rounded-full lg:w-8 lg:h-8 lg:text-base">
            A
          </div>
        </div>
        <div className="flex gap-6 pt-4 mt-4 border-t">
          {details.map(({ label, value }, index) => (
            <div key={index} className="font-medium font-plus-jakarta-sans">
              <div className="text-[8px] lg:text-sm text-gray-500/80">
                {label}
              </div>
              <div className="text-xs lg:text-base mt-[2px] text-gray-950">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

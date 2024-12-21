"use client";
import { Icon } from "@/app/icons";
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
  onClick?: () => void;
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
  onClick,
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
    [npsn, totalClass, totalLab, totalLibrary, totalTeacher, totalTendik],
  );

  return (
    <button
      onClick={onClick}
      className="flex gap-4 rounded-xl border p-2 text-left lg:gap-10 lg:p-4"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 lg:h-16 lg:w-16">
        <Icon name="SchoolColored" className="h-8 w-8" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between gap-6">
          <div className="flex-1 font-plus-jakarta-sans">
            <h2 className="text-base font-bold lg:text-xl">{name}</h2>
            <p className="mt-0 text-sm font-medium text-gray-500/80 lg:mt-[2px] lg:text-lg">
              {address}
            </p>
          </div>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs text-white lg:h-8 lg:w-8 lg:text-base">
            A
          </div>
        </div>
        <div className="mt-4 flex gap-6 border-t pt-4">
          {details.map(({ label, value }, index) => (
            <div key={index} className="font-plus-jakarta-sans font-medium">
              <div className="text-[8px] text-gray-500/80 lg:text-sm">
                {label}
              </div>
              <div className="mt-[2px] text-xs text-gray-950 lg:text-base">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
};

export const SchoolItemSkeleton = () => (
  <button className="flex animate-pulse gap-4 rounded-xl bg-gray-100 p-2 lg:gap-10 lg:p-4">
    <div className="h-8 w-8 rounded-full bg-gray-200 lg:h-16 lg:w-16" />
    <div className="flex-1">
      <div className="flex justify-between gap-6">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex-1 font-plus-jakarta-sans">
            <h2 className="h-3 w-24 rounded-full bg-gray-200" />
            <p className="mt-1 h-4 w-32 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
      <div className="mt-2 border-t pt-2">
        <div>
          <div className="h-3 w-24 rounded-full bg-gray-200" />
          <div className="mt-1 h-4 w-full rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  </button>
);

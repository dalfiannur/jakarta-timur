"use client";
import { SearchInput } from "@/app/components/SearchInput";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SelectSchoolLevel } from "./SelectSchoolLevel";

export const FilterSection = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SearchInput classNames={{ root: "w-full" }} />
      <div className="flex gap-4">
        <SelectDistrict classNames={{ root: "flex-1", button: "w-full" }} />
        <SelectSchoolLevel classNames={{ root: "flex-1", button: "w-full" }} />
      </div>
    </div>
  );
};

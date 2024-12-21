"use client";
import { SearchInput } from "@/app/components/SearchInput";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SelectSchoolLevel } from "./SelectSchoolLevel";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";

export const FilterSection = ({
  onSearch,
  onGradeChange,
  onDistrictChange,
}: {
  onSearch?: (value: string | undefined) => void;
  onGradeChange?: (value: string | undefined) => void;
  onDistrictChange?: (value: string | undefined) => void;
}) => {
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      onSearch?.(value);
    },
  });

  const handleDistrict = (val: { id: number; slug: string } | null) => {
    onDistrictChange?.(val?.slug || undefined);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SearchInput classNames={{ root: "w-full" }} onChange={set} />
      <div className="flex gap-4">
        <SelectDistrict
          classNames={{ root: "flex-1", button: "w-full" }}
          onChange={handleDistrict}
        />
        <SelectSchoolLevel
          classNames={{ root: "flex-1", button: "w-full" }}
          onChange={onGradeChange}
        />
      </div>
    </div>
  );
};

"use client";
import { SearchInput } from "@/app/components/SearchInput";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SelectRW } from "@/app/sections/SelectRW";
import { SelectSubDistrict } from "@/app/sections/SelectSubDistrict";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { useState } from "react";

export const FilterSection = ({
  onDistrictChange,
  onSubDistrictChange,
  onRwChange,
  onSearch,
}: {
  onSearch?: (value: string | undefined) => void;
  onDistrictChange?: (value: string | undefined) => void;
  onSubDistrictChange?: (value: string | undefined) => void;
  onRwChange?: (value: string | undefined) => void;
}) => {
  const [districtId, setDistrictId] = useState<number | undefined>();
  const [subDistrict, setSubDistrict] = useState<string | undefined>();

  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      onSearch?.(value);
    },
  });

  const handleDistrict = (val: { id: number; slug: string } | null) => {
    onDistrictChange?.(val?.slug || undefined);
    setDistrictId(val?.id || undefined);
  };

  const handleSubDistrict = (val: { id: number; slug: string } | null) => {
    onSubDistrictChange?.(val?.slug || undefined);
    setSubDistrict(val?.slug || undefined);
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SearchInput classNames={{ root: "w-full" }} onChange={set} />
      <div className="flex flex-wrap gap-4">
        <SelectDistrict
          classNames={{ root: "flex-1 min-w-[130px]", button: "w-full" }}
          onChange={handleDistrict}
        />
        <SelectSubDistrict
          districtId={districtId}
          classNames={{ root: "flex-1", button: "w-full" }}
          onChange={handleSubDistrict}
        />
        <SelectRW
          subDistrict={subDistrict}
          classNames={{ root: "flex-1", button: "w-full" }}
          onChange={(val) => onRwChange?.(val?.value)}
        />
      </div>
    </div>
  );
};

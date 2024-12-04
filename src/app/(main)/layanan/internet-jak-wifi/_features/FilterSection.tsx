"use client";
import { SearchInput } from "@/app/components/SearchInput";
import { SelectDistrict } from "@/app/sections/SelectDistrict";
import { SelectRW } from "@/app/sections/SelectRW";
import { SelectSubDistrict } from "@/app/sections/SelectSubDistrict";
import * as store from "../store";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { useSetAtom } from "jotai";

export const FilterSection = () => {
  const setSearch = useSetAtom(store.search);
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      setSearch(value);
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <SearchInput classNames={{ root: "w-full" }} onChange={set} />
      <div className="flex flex-wrap gap-4">
        <SelectDistrict
          classNames={{ root: "flex-1 min-w-[130px]", button: "w-full" }}
        />
        <SelectSubDistrict classNames={{ root: "flex-1", button: "w-full" }} />
        <SelectRW classNames={{ root: "flex-1", button: "w-full" }} />
      </div>
    </div>
  );
};

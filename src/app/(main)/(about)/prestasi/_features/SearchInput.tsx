"use client";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { Icon } from "@/app/icons";
import { useContext } from "react";
import { Context } from "../context";

export const SearchInput = () => {
  const { setSearch } = useContext(Context);
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      setSearch(value);
    },
  });

  return (
    <div className="flex items-center overflow-hidden rounded-xl border pl-4 focus-within:border-pink-400">
      <Icon name="Search" className="h-6 w-6" />
      <input
        className="flex-1 px-6 py-4 focus:outline-none"
        placeholder="Cari Nama Dokumen"
        onChange={(e) => set(e.currentTarget.value)}
      />
    </div>
  );
};

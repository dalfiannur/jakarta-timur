"use client";
import { SectionTitle } from "../../_components/SectionTitle";
import { List } from "./_features/List";
import { SelectKecamatan } from "./_features/SelectKecamatan";
import { useParams } from "next/navigation";
import { SearchInput } from "./_components/SearchInput";
import * as store from "./store";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { useSetAtom } from "jotai";

export default function Page() {
  const { area } = useParams<{ area: string }>();
  const setSearch = useSetAtom(store.search);
  const setKecamatanId = useSetAtom(store.kecamatanId);
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      setSearch(value);
    },
  });

  return (
    <div className="flex flex-1 flex-col gap-8">
      <SectionTitle>{area}</SectionTitle>
      <SearchInput onChange={(value) => set(value)} />
      {area === "kelurahan" && (
        <SelectKecamatan onChange={(value) => setKecamatanId(value)} />
      )}

      <List area={area} />
    </div>
  );
}

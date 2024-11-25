"use client";
import { SectionTitle } from "../../_components/SectionTitle";
import { List } from "./_features/List";
import { SelectKecamatan } from "./_features/SelectKecamatan";
import { useParams } from "next/navigation";
import { SearchInput } from "./_components/SearchInput";
import { store$ } from "./store";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";

export default function Page() {
  const { area } = useParams<{ area: string }>();
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      store$.setKey("search", value);
    },
  });

  return (
    <div className="flex flex-1 flex-col gap-8">
      <SectionTitle>{area}</SectionTitle>
      <SearchInput onChange={(value) => set(value)} />
      {area === "kelurahan" && (
        <SelectKecamatan
          onChange={(value) => store$.setKey("kecamatan_id", value)}
        />
      )}

      <List area={area} />
    </div>
  );
}

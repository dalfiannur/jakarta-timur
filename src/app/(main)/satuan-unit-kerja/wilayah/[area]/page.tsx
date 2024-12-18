"use client";
import { SectionTitle } from "../../_components/SectionTitle";
import { List } from "./_features/List";
import { useParams } from "next/navigation";
import { SearchInput } from "./_components/SearchInput";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { Provider } from "./provider";
import { useContext } from "react";
import { Context } from "./context";
import { Filter } from "./_features/Filter";

export default function Page() {
  const { area } = useParams<{ area: string }>();
  const { setSearch } = useContext(Context);

  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      setSearch(value);
    },
  });

  return (
    <Provider>
      <div className="flex flex-1 flex-col gap-8">
        <SectionTitle>{area}</SectionTitle>
        <SearchInput onChange={(value) => set(value)} />
        {area === "kelurahan" && <Filter />}

        <List area={area} />
      </div>
    </Provider>
  );
}

"use client";
import { SectionTitle } from "@/app/(main)/satuan-unit-kerja/_components/SectionTitle";
import { List } from "../_features/List";
import { useParams } from "next/navigation";
import { SearchInput } from "../../../_components/SearchInput";
import { Filter } from "../_features/Filter";
import { Provider } from "../provider";
import { useState } from "react";

export const Content = () => {
  const { area } = useParams<{ area: string }>();
  const [search, setSearch] = useState("");

  return (
    <Provider>
      <div className="flex flex-1 flex-col gap-8">
        <SectionTitle>{area}</SectionTitle>
        {area === "kelurahan" && <SearchInput onChange={setSearch} />}
        {area === "kelurahan" && <Filter />}

        <List area={area} search={search} />
      </div>
    </Provider>
  );
};

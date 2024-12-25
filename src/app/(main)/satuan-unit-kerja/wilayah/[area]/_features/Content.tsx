"use client";
import { SectionTitle } from "@/app/(main)/satuan-unit-kerja/_components/SectionTitle";
import { List } from "../_features/List";
import { useParams } from "next/navigation";
import { SearchInput } from "../_components/SearchInput";
import { Filter } from "../_features/Filter";
import { Provider } from "../provider";

export const Content = () => {
  const { area } = useParams<{ area: string }>();
  console.log({ area });
  return (
    <Provider>
      <div className="flex flex-1 flex-col gap-8">
        <SectionTitle>{area}</SectionTitle>
        {area === "kelurahan" && <SearchInput />}
        {area === "kelurahan" && <Filter />}

        <List area={area} />
      </div>
    </Provider>
  );
};

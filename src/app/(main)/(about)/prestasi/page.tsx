"use client";
import { SectionTitle } from "../_components/SectionTitle";
import { Filter } from "./_features/Filter";
import { ViewButton } from "./_features/ViewButton";
import { SearchInput } from "./_features/SearchInput";
import { ListAchievement } from "./_features/ListAchievement";

export default function Page() {
  return (
    <div>
      <SectionTitle>Prestasi</SectionTitle>
      <div className="mt-0 lg:mt-8 px-4">
        <SearchInput />
        <div className="mt-4 lg:mt-8 flex justify-between items-center">
          <Filter />
          <ViewButton />
        </div>

        <ListAchievement />
      </div>
    </div>
  );
}

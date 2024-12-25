"use client";
import { SectionTitle } from "../_components/SectionTitle";
import { Filter } from "./_features/Filter";
import { ViewButton } from "./_features/ViewButton";
import { SearchInput } from "./_features/SearchInput";
import { ListAchievement } from "./_features/ListAchievement";
import { Provider } from "./provider";

export const Content = () => {
  return (
    <Provider>
      <div>
        <SectionTitle>Prestasi</SectionTitle>
        <div className="mt-0 px-4 lg:mt-8">
          <SearchInput />
          <div className="mt-4 flex items-center justify-between lg:mt-8">
            <Filter />
            <ViewButton />
          </div>

          <ListAchievement />
        </div>
      </div>
    </Provider>
  );
};

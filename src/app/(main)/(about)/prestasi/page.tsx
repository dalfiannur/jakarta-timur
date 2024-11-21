"use client";
import { SectionTitle } from "../_components/SectionTitle";
import { PrestasiItem } from "./_components/PrestasiItem";
import { Filter } from "./_components/Filter";
import { ViewButton } from "./_components/ViewButton";
import { Computed, useObservable } from "@legendapp/state/react";
import { SearchInput } from "./_components/SearchInput";
import { trpc } from "@/utils/trpc";

export default function Page() {
  const view$ = useObservable<"grid" | "list">("grid");
  const year$ = useObservable("");
  const sort$ = useObservable("");
  const { data } = trpc.externalApi.getAchievements.useQuery();

  return (
    <div>
      <SectionTitle>Prestasi</SectionTitle>
      <div className="mt-0 lg:mt-8 px-4">
        <SearchInput />
        <div className="mt-4 lg:mt-8 flex justify-between items-center">
          <Filter
            onSortChange={(val) => sort$.set(val?.value ?? "")}
            onYearChange={(val) => year$.set(val?.value ?? "")}
          />
          <Computed>
            {() => <ViewButton view={view$.get()} onChange={view$.set} />}
          </Computed>
        </div>
        <Computed>
          {() => (
            <div
              data-view={view$.get()}
              className="mt-4 lg:mt-8 grid data-[view=grid]:grid-cols-2 lg:data-[view=grid]:grid-cols-3 data-[view=list]:grid-cols-1 gap-4 lg:gap-8"
            >
              {data?.data.map((row, index) => (
                <PrestasiItem key={index} view={view$.get()} item={row} />
              ))}
            </div>
          )}
        </Computed>
      </div>
    </div>
  );
}

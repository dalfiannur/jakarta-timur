import { trpc } from "@/utils/trpc";
import { PrestasiItem } from "../_components/PrestasiItem";

import { useContext } from "react";
import { Context } from "../context";

export const ListAchievement = () => {
  const { search, sort, year, view } = useContext(Context);

  const res = trpc.externalApi.getAchievements.useQuery({
    search,
    sort,
    year,
  });
  const data = res.data?.data ?? [];

  return (
    <div
      data-view={view}
      className="mt-4 grid gap-4 data-[view=grid]:grid-cols-2 data-[view=list]:grid-cols-1 lg:mt-8 lg:gap-8 lg:data-[view=grid]:grid-cols-3"
    >
      {data.map((row, index) => (
        <PrestasiItem key={index} view={view} item={row} />
      ))}
    </div>
  );
};

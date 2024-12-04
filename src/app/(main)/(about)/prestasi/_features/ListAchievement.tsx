import * as store from "../store";
import { trpc } from "@/utils/trpc";
import { PrestasiItem } from "../_components/PrestasiItem";
import { useAtomValue } from "jotai";

export const ListAchievement = () => {
  const search = useAtomValue(store.search);
  const sort = useAtomValue(store.sort);
  const year = useAtomValue(store.year);
  const view = useAtomValue(store.view);

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

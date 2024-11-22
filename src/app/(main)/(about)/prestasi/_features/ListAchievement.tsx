import { useStore } from "@nanostores/react";
import { store$ } from "../store";
import { trpc } from "@/utils/trpc";
import { PrestasiItem } from "../_components/PrestasiItem";

export const ListAchievement = () => {
  const store = useStore(store$);
  const res = trpc.externalApi.getAchievements.useQuery(store.filter);
  const data = res.data?.data ?? [];

  return (
    <div
      data-view={store.view}
      className="mt-4 lg:mt-8 grid data-[view=grid]:grid-cols-2 lg:data-[view=grid]:grid-cols-3 data-[view=list]:grid-cols-1 gap-4 lg:gap-8"
    >
      {data.map((row, index) => (
        <PrestasiItem key={index} view={store.view} item={row} />
      ))}
    </div>
  );
};

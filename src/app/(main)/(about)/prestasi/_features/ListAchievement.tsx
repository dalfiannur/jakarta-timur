import { view, filter } from "../store";
import { trpc } from "@/utils/trpc";
import { PrestasiItem } from "../_components/PrestasiItem";

export const ListAchievement = () => {
  const { search, sort, year } = filter.value;
  const res = trpc.externalApi.getAchievements.useQuery({
    search: search.value,
    sort: sort.value,
    year: year.value,
  });
  const data = res.data?.data ?? [];

  return (
    <div
      data-view={view.value}
      className="mt-4 grid gap-4 data-[view=grid]:grid-cols-2 data-[view=list]:grid-cols-1 lg:mt-8 lg:gap-8 lg:data-[view=grid]:grid-cols-3"
    >
      {data.map((row, index) => (
        <PrestasiItem key={index} view={view.value} item={row} />
      ))}
    </div>
  );
};

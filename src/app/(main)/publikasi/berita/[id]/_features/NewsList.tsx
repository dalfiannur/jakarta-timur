"use client";
import { NewsWidget } from "@/app/widgets/NewsWidget";
import { trpc } from "@/utils/trpc";

export const NewsList = () => {
  const res = trpc.externalApi.news.useQuery({
    limit: 3,
  });
  const data = res.data?.data ?? [];

  return <NewsWidget data={data} />;
};

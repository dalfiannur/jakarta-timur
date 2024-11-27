"use client";
import { BulletinWidget } from "@/app/widgets/BulletinWidget";
import { trpc } from "@/utils/trpc";

export const BulletinList = () => {
  const res = trpc.externalApi.buletin.useQuery({
    limit: 4,
  });
  const data = res.data?.data ?? [];

  return <BulletinWidget data={data} />;
};

"use client";
import { VideoWidget } from "@/app/widgets/VideoWidget";
import { trpc } from "@/utils/trpc";

export const VideoList = () => {
  const res = trpc.externalApi.videos.useQuery({
    limit: 3,
  });
  const data = res.data?.data ?? [];

  return <VideoWidget data={data} />;
};

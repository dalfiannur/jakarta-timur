import { getVideos } from "@/app/actions/get-videos";
import { VideoWidget } from "@/app/widgets/VideoWidget";

export default async function Page() {
  const { data } = await getVideos({ limit: "3" });
  return <VideoWidget data={data.data} />;
}

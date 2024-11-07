import { getNews } from "@/app/actions/get-news";
import { NewsWidget } from "@/app/widgets/NewsWidget";

export default async function Page() {
  const { data } = await getNews({ page: "1", limit: "3" });
  return <NewsWidget data={data.data} />;
}

import { Pagination } from "@/app/components/Pagination";
import { VideoItem } from "./VideoItem";
import { getVideos } from "@/app/actions/get-videos";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const { data } = await getVideos({ limit: "4", page: searchParams.page });
  const pages = Math.ceil(data.total / 4);

  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        {data.data.map((item, index) => (
          <VideoItem
            key={index}
            category={item.kategori.cat}
            source={item.source}
            title={item.title}
            date={item.tanggal}
            slug={item.slug}
          />
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Pagination total={pages} />
      </div>
    </>
  );
}

import { Pagination } from "@/app/components/Pagination";
import { PhotoItem } from "./PhotoItem";
import { getNewsPhotos } from "@/app/actions/get-news-photo";

type PageProps = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function Page(props: PageProps) {
  const { page = "1", limit = "8" } = await props.searchParams;
  const { data } = await getNewsPhotos({ limit, page });

  const pages = Math.ceil(data.total / 8);

  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        {data.data.map((item, index) => (
          <PhotoItem
            key={index}
            title={item.title}
            date={item.time}
            id={item.id}
            location={item.lokasi}
            image={item.img_url}
          />
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <Pagination total={pages} />
      </div>
    </>
  );
}

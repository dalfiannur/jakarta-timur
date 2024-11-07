import { NewsItem } from "./NewsItem";
import { Pagination } from "@/app/components/Pagination";
import { getNews } from "@/app/actions/get-news";

export default async function Page() {
  const { data } = await getNews({ limit: "10" });
  const pages = Math.ceil(data.total / 10);

  return (
    <>
      <div className="grid grid-cols-2 gap-12">
        {data.data.map((item, index) => (
          <NewsItem
            key={index}
            id={item.id}
            category={item.kategori.name}
            image={item.img_url}
            imageName={item.img_name}
            title={item.title}
            content={item.content}
            author={item.writer}
            date={item.time}
          />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Pagination total={pages} />
      </div>
    </>
  );
}

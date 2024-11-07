import { Pagination } from "@/app/components/Pagination";
import { PhotoItem } from "./PhotoItem";
import { getBulletins } from "@/app/actions/get-bulletin";

type PageProps = {
  searchParams: Promise<{
    page: string;
    limit: string;
  }>;
};

export default async function Page(props: PageProps) {
  const { page = "1", limit = "8" } = await props.searchParams;
  const { data } = await getBulletins({ limit, page });

  const pages = Math.ceil(data.total / 8);

  return (
    <div>
      <div className="grid gap-2 text-center">
        <h2 className="font-bold text-3xl font-plus-jakarta-sans">
          Buletin Info Jaktim
        </h2>
        <p className="text-xl text-gray-500 font-plus-jakarta-sans">
          Informasi terkini dan pembaruan penting bagi warga Jakarta Timur
        </p>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-4 gap-12">
          {data.data.map((item, index) => (
            <PhotoItem
              key={index}
              id={item.id}
              image={item.img_url}
              title={item.title}
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Pagination total={pages} />
        </div>
      </div>
    </div>
  );
}

import { Icon } from "@/app/icons";
import { News } from "@/types/news";
import { dateFormatter } from "@/utils/date-formatter";
import Image from "next/image";
import Link from "next/link";

export const NewsWidget = ({ data = [] }: { data?: News[] }) => {
  return (
    <div className="font-plus-jakarta-sans">
      <h3 className="text-lg font-semibold lg:text-2xl">Berita Terbaru</h3>
      <div className="mt-4 flex flex-col gap-6 lg:mt-10">
        {data.map((data, index) => (
          <Link
            href={`/publikasi/berita/${data.id}`}
            key={index}
            className="inline-flex items-center gap-4"
          >
            <div className="relative aspect-square w-24">
              <Image
                src={data.img_url}
                alt={data.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="line-clamp-2 text-sm font-semibold lg:text-base">
                {data.title}
              </h4>
              <div
                className="line-clamp-1 text-xs text-gray-600 lg:text-sm"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <div className="flex items-center gap-2">
                <Icon
                  name="Calendar"
                  className="aspect-square h-4 text-pink-500"
                />
                <div className="text-[10px] text-gray-600 lg:text-sm">
                  {dateFormatter(data.time)}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

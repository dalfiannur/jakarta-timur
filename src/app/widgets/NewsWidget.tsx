import { Icon } from "@/app/icons";
import { News } from "@/types/news";
import { dateFormatter } from "@/utils/date-formatter";
import Image from "next/image";
import Link from "next/link";

export const NewsWidget = ({ data = [] }: { data?: News[] }) => {
  return (
    <div className="font-plus-jakarta-sans">
      <h3 className="font-semibold text-2xl">Berita Terbaru</h3>
      <div className="mt-10 grid gap-6">
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
            <div className="flex-1 grid gap-2">
              <h4 className="font-semibold line-clamp-2">{data.title}</h4>
              <div
                className="text-sm line-clamp-1 text-gray-600"
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <div className="flex items-center gap-2">
                <div className="text-pink-500">
                  <Icon name="Calendar" size={16} />
                </div>
                <div className="text-sm text-gray-600">
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

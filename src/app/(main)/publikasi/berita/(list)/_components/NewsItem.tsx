import { Icon } from "@/app/icons";
import { dateFormatter } from "@/utils/date-formatter";
import Image from "next/image";
import Link from "next/link";

type NewsItemProps = {
  id: number;
  image: string;
  category: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageName?: string | null;
};

export const NewsItem = ({
  id,
  image,
  category,
  title,
  content,
  date,
  author,
  imageName,
}: NewsItemProps) => {
  return (
    <div>
      <Link href={`/publikasi/berita/${id}`}>
        <div className="relative aspect-[6/5]">
          <Image src={image} alt="#" fill className="rounded-xl object-cover" />
        </div>
      </Link>
      <div className="mt-3 flex flex-col gap-1 lg:mt-6 lg:gap-4">
        <div className="font-roboto text-[10px] text-gray-600 lg:text-sm">
          {category}
        </div>
        <Link href="/publikasi/berita/1">
          <h2 className="line-clamp-2 font-plus-jakarta-sans text-sm font-bold text-gray-900 lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div
          className="line-clamp-2 font-plus-jakarta-sans text-xs font-medium text-gray-600 lg:text-base"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex gap-2 font-plus-jakarta-sans text-[8px] font-medium lg:gap-4 lg:text-sm">
          <div className="flex items-center gap-1 lg:gap-2">
            <Icon
              name="Calendar"
              className="aspect-square h-2 text-pink-500 lg:h-4"
            />
            <div>{dateFormatter(date)}</div>
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-1 lg:gap-2">
            <Icon
              name="QuillWrite"
              className="aspect-square h-2 text-pink-500 lg:h-4"
            />
            <div>{author}</div>
          </div>
          {imageName && (
            <>
              <div className="border-l" />
              <div className="flex items-center gap-1 lg:gap-2">
                <Icon
                  name="Camera"
                  className="aspect-square h-2 text-pink-500 lg:h-4"
                />
                <div>{imageName}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

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
      <div className="mt-6 grid gap-4">
        <div className="text-sm font-plus-jakarta-sans">{category}</div>
        <Link href="/publikasi/berita/1">
          <h2 className="text-2xl font-bold font-plus-jakarta-sans">{title}</h2>
        </Link>
        <div
          className="font-medium text-gray-600 line-clamp-2 font-plus-jakarta-sans"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="flex gap-4 text-sm font-medium font-plus-jakarta-sans">
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Calendar" className="w-4 h-4" />
            </div>
            <div>{dateFormatter(date)}</div>
          </div>
          <div className="border-l" />
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="QuillWrite" className="w-4 h-4" />
            </div>
            <div>{author}</div>
          </div>
          {imageName && (
            <>
              <div className="border-l" />
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="Camera" className="w-4 h-4" />
                </div>
                <div>{imageName}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

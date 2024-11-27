import { Icon } from "@/app/icons";
import { dateFormatter } from "@/utils/date-formatter";
import Image from "next/image";
import Link from "next/link";

type PhotoItemProps = {
  title: string;
  id: number;
  date: string;
  location: string;
  image?: string | null;
};

export const PhotoItem = ({
  title,
  id,
  date,
  image,
  location,
}: PhotoItemProps) => {
  return (
    <div>
      <Link href={`/publikasi/galeri/${id}`}>
        <div className="relative aspect-[6/5]">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-xl object-cover"
            />
          )}
        </div>
      </Link>
      <div className="mt-3 flex flex-col gap-2 lg:mt-6 lg:gap-4">
        <Link href={`/publikasi/galeri/${id}`}>
          <h2 className="line-clamp-3 text-base font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex flex-wrap gap-2 font-plus-jakarta-sans text-[10px] font-medium lg:gap-4 lg:text-sm">
          <div className="flex items-center gap-1 lg:gap-2">
            <Icon name="Calendar" className="aspect-square h-4 text-pink-500" />
            <div className="whitespace-nowrap">{dateFormatter(date)}</div>
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-1 lg:gap-2">
            <Icon name="Tags" className="aspect-square h-4 text-pink-500" />
            <div className="whitespace-nowrap">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

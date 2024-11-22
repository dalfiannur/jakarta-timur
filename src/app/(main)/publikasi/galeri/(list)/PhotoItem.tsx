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
      <div className="mt-6 grid gap-4">
        <Link href={`/publikasi/galeri/${id}`}>
          <h2 className="text-2xl font-bold">{title}</h2>
        </Link>
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
            <div>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

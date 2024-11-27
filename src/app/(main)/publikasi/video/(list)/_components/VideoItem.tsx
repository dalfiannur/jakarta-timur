import { Icon } from "@/app/icons";
import { dateFormatter } from "@/utils/date-formatter";
import { getYoutubeThumbnailUrl } from "@/utils/get-youtube-thumbnail";
import Image from "next/image";
import Link from "next/link";

type VideoItemProps = {
  category: string;
  source: string;
  title: string;
  date: string;
  slug: string;
};

export const VideoItem = ({
  category,
  source,
  title,
  date,
  slug,
}: VideoItemProps) => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <Link href={`/publikasi/video/${slug}`}>
        <div className="relative aspect-video ">
          <Image
            src={getYoutubeThumbnailUrl(source)}
            alt={title}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 lg:gap-4">
        <div>
          <div className="font-roboto text-[10px] uppercase lg:text-sm">
            {category}
          </div>
          <Link href={`/publikasi/video/${slug}`} className="mt-4">
            <h2 className="font-plus-jakarta-sans text-base font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
        </div>
        <div className="flex gap-4 text-xs font-medium lg:text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" className="aspect-square h-4 text-pink-500" />
            <div>{dateFormatter(date)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

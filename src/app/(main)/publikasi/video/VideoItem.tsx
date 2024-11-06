import { Icon } from "@/app/icons";
import { dateFormatter } from "@/utils/date-formatter";
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
    <div className="flex flex-col gap-6">
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <iframe
          id="ytplayer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${source}`}
          frameBorder={0}
          allowFullScreen
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div>
          <div className="text-sm uppercase font-roboto">{category}</div>
          <Link href={`/publikasi/video/${slug}`} className="mt-4">
            <h2 className="text-2xl font-bold font-plus-jakarta-sans">
              {title}
            </h2>
          </Link>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Calendar" size={16} />
            </div>
            <div>{dateFormatter(date)}</div>
          </div>
          {/* <div className="border-l" /> */}
          {/* <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="QuillWrite" size={16} />
            </div>
            <div>Sudin Komunikasi</div>
          </div> */}
          {/* <div className="border-l" /> */}
          {/* <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Camera" size={16} />
            </div>
            <div>KIP</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

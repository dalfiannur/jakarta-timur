import { Video } from "@/types/video";
import Image from "next/image";
import Link from "next/link";

type VideoWidgetProps = {
  data: Video[];
};

export const VideoWidget = ({ data }: VideoWidgetProps) => {
  return (
    <div>
      <h3 className="font-plus-jakarta-sans text-lg font-semibold lg:text-2xl">
        Video Informasi dan Edukasi
      </h3>
      <div className="mt-4 flex flex-col gap-6 lg:mt-10">
        {data.map((item, index) => (
          <Link href={`/publikasi/video/${item.slug}`}>
            <div key={index} className="flex items-center gap-4">
              <div className="relative aspect-square w-20">
                <Image
                  src={`https://img.youtube.com/vi/${item.source}/0.jpg`}
                  alt={item.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h4 className="flex-1 text-sm font-semibold lg:text-base">
                {item.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

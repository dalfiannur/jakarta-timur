import { Video } from "@/types/video";
import Image from "next/image";

type VideoWidgetProps = {
  data: Video[];
};

export const VideoWidget = ({ data }: VideoWidgetProps) => {
  return (
    <div>
      <h3 className="font-semibold text-2xl font-plus-jakarta-sans">
        Video Informasi dan Edukasi
      </h3>
      <div className="mt-10 grid gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="relative aspect-square w-20">
              <Image
                src={`https://img.youtube.com/vi/${item.source}/0.jpg`}
                alt={item.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h4 className="font-semibold flex-1">{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

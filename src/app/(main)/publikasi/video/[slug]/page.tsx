"use client";
import { Icon } from "@/app/icons";
import { ShareContent } from "../../_components/ShareContent";
import { Tags } from "../../_components/Tags";
import { dateFormatter } from "@/utils/date-formatter";
import { useParams } from "next/navigation";
import { trpc } from "@/utils/trpc";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const { data } = trpc.externalApi.findVideoById.useQuery(id);

  return data ? (
    <div className="flex-1">
      <div className="grid gap-2 lg:gap-4">
        <div className="font-roboto text-xs uppercase text-gray-500 lg:text-xl">
          {data.kategori.cat}
        </div>
        <h2 className="font-plus-jakarta-sans text-xl font-bold lg:text-3xl">
          {data.title}
        </h2>
        <div className="flex gap-4 font-plus-jakarta-sans text-xs font-medium lg:text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" className="aspect-square h-4 text-pink-500" />
            <div>{dateFormatter(data.tanggal)}</div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 aspect-video overflow-hidden rounded-xl lg:mt-12">
        <iframe
          id="ytplayer"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${data.source}`}
          frameBorder={0}
          allowFullScreen
        />
      </div>

      <div
        className="mt-6 grid gap-4 text-justify font-plus-jakarta-sans text-gray-600 lg:mt-12"
        dangerouslySetInnerHTML={{ __html: data.description }}
      />

      <div className="mt-8">
        <ShareContent label="Bagikan Video Ini" />
      </div>
      <div className="mt-8">
        <Tags
          data={[
            { label: "#Penanggulangan Banjir" },
            { label: "#Covid 19" },
            { label: "#Inovasi" },
            { label: "#Pendidikan" },
            { label: "#Ekonomi" },
          ]}
        />
      </div>
    </div>
  ) : null;
}

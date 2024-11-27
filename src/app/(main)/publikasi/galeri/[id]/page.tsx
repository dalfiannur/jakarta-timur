"use client";
import { Icon } from "@/app/icons";
import Image from "next/image";
import { ShareContent } from "../../ShareContent";
import { Tags } from "../../Tags";
import { dateFormatter } from "@/utils/date-formatter";
import { useParams } from "next/navigation";
import { trpc } from "@/utils/trpc";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const res = trpc.externalApi.findGalleryById.useQuery(id);
  const data = res.data;

  return data ? (
    <div className="flex-1">
      <div className="grid gap-4">
        <h2 className="font-plus-jakarta-sans text-xl font-bold lg:text-3xl">
          {data.title}
        </h2>
        <div className="flex gap-4 font-plus-jakarta-sans text-xs font-medium lg:text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" className="aspect-square h-4 text-pink-500" />
            <div>{dateFormatter(data.time)}</div>
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-2">
            <Icon name="Tags" className="aspect-square h-4 text-pink-500" />
            <div>Sudin Komunikasi</div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 aspect-[10/8] lg:aspect-[16/8]">
        {data.img_url && (
          <Image
            src={data.img_url}
            alt={data.title}
            fill
            className="rounded-xl object-cover"
          />
        )}
      </div>

      <div
        className="mt-6 grid gap-4 text-justify font-plus-jakarta-sans text-gray-600 lg:mt-12"
        dangerouslySetInnerHTML={{ __html: data.deskripsi }}
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

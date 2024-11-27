"use client";
import Image from "next/image";
import { Icon } from "@/app/icons";
import { ShareContent } from "../../ShareContent";
import { Tags } from "../../Tags";
import { useParams } from "next/navigation";
import { trpc } from "@/utils/trpc";

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const { data } = trpc.externalApi.findNewsById.useQuery(id);

  return data ? (
    <>
      <div className="flex flex-col gap-2 lg:gap-4">
        <div className="font-poppins text-xs uppercase text-gray-500 lg:text-sm">
          {data.kategori.cat}
        </div>
        <h2 className="font-plus-jakarta-sans text-lg font-bold lg:text-3xl">
          {data.title}
        </h2>
        <div className="flex justify-between gap-4 font-poppins text-xs font-medium text-gray-600/90 lg:justify-start lg:text-sm">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" className="aspect-square h-4 text-pink-500" />
            <div>18 Juli 2024</div>
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-2">
            <Icon
              name="QuillWrite"
              className="aspect-square h-4 text-pink-500"
            />
            <div>{data.writer}</div>
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-2">
            <Icon name="Camera" className="aspect-square h-4 text-pink-500" />
            <div>{data.img_name}</div>
          </div>
        </div>
      </div>

      <div className="relative mt-6 aspect-[12/8] lg:mt-12 lg:aspect-[16/8]">
        <Image
          src={data.img_url}
          alt="#"
          fill
          className="rounded-xl object-cover"
        />
      </div>

      <div
        className="mt-6 flex flex-col gap-4 text-justify font-plus-jakarta-sans text-gray-600 lg:mt-12"
        dangerouslySetInnerHTML={{ __html: data.content ?? "" }}
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
    </>
  ) : (
    <Skeleton />
  );
}

const Skeleton = () => (
  <div className="aspect-square w-full animate-pulse bg-gray-200"></div>
);

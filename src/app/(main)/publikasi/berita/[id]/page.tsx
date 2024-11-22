import Image from "next/image";
import { Icon } from "@/app/icons";
import { ShareContent } from "../../ShareContent";
import { Tags } from "../../Tags";
import { findNewsById } from "@/app/actions/get-news";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { data } = await findNewsById(params.id);

  return (
    <>
      <div className="grid gap-4">
        <div className="text-sm text-gray-500 uppercase font-poppins">
          {data.kategori.name}
        </div>
        <h2 className="font-bold text-3xl font-plus-jakarta-sans">
          {data.title}
        </h2>
        <div className="flex gap-4 text-sm font-medium font-poppins">
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Calendar" className="w-4 h-4" />
            </div>
            <div>18 Juli 2024</div>
          </div>
          <div className="border-l" />
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="QuillWrite" className="w-4 h-4" />
            </div>
            <div>{data.writer}</div>
          </div>
          <div className="border-l" />
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Camera" className="w-4 h-4" />
            </div>
            <div>{data.img_name}</div>
          </div>
        </div>
      </div>

      <div className="mt-12 relative aspect-[16/8]">
        <Image
          src={data.img_url}
          alt="#"
          fill
          className="rounded-xl object-cover"
        />
      </div>

      <div
        className="grid gap-4 text-gray-600 mt-12 text-justify font-plus-jakarta-sans"
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
  );
}

import { Icon } from "@/app/icons";
import Image from "next/image";
import { ShareContent } from "../../ShareContent";
import { Tags } from "../../Tags";
import { findNewsPhotoById } from "@/app/actions/get-news-photo";
import { dateFormatter } from "@/utils/date-formatter";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { data } = await findNewsPhotoById(params.id);

  return (
    <div className="flex-1">
      <div className="grid gap-4">
        <h2 className="font-bold text-4xl font-plus-jakarta-sans">
          {data.title}
        </h2>
        <div className="flex gap-4 text-sm font-medium font-plus-jakarta-sans">
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="Calendar" className="w-4 h-4" />
            </div>
            <div>{dateFormatter(data.time)}</div>
          </div>
          <div className="border-l" />
          <div className="flex gap-2 items-center">
            <div className="text-pink-500">
              <Icon name="QuillWrite" className="w-4 h-4" />
            </div>
            <div>Sudin Komunikasi</div>
          </div>
          <div className="border-l" />
        </div>
      </div>

      <div className="mt-12 relative aspect-[16/8]">
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
        className="grid gap-4 text-gray-600 mt-12 text-justify font-plus-jakarta-sans"
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
  );
}

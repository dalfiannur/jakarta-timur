import Image from "next/image";
import { Icon } from "@/app/icons";
import { LatestNewsWidget } from "../../LatestNewsWidget";
import { BulletinWidget } from "../../BulletinWidget";
import { ShareContent } from "../../ShareContent";
import { Tags } from "../../Tags";
import { findNewsById, getNews } from "@/app/actions/get-news";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { data } = await findNewsById(params.id);

  const latestNews = getNews({ limit: "3" });

  return (
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
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
                  <Icon name="Calendar" size={16} />
                </div>
                <div>18 Juli 2024</div>
              </div>
              <div className="border-l" />
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="QuillWrite" size={16} />
                </div>
                <div>{data.writer}</div>
              </div>
              <div className="border-l" />
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="Camera" size={16} />
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
        </div>
        <div className="w-[437px] flex flex-col gap-8">
          <LatestNewsWidget getData={latestNews} />
          <BulletinWidget />
        </div>
      </div>
    </div>
  );
}

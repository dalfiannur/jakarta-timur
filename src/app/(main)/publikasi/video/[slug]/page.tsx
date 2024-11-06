import { Icon } from "@/app/icons";
import { LatestNewsWidget } from "../../LatestNewsWidget";
import { ShareContent } from "../../ShareContent";
import { Tags } from "../../Tags";
import { findVideoBySlug } from "@/app/actions/get-videos";
import { dateFormatter } from "@/utils/date-formatter";
import { getNews } from "@/app/actions/get-news";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: PageProps) {
  const params = await props.params;
  const { data } = await findVideoBySlug(params.slug);
  const { data: news } = await getNews({ limit: "3" });

  return (
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">
          <div className="grid gap-4">
            <div className="text-sm text-gray-500 uppercase font-roboto">
              {data.kategori.cat}
            </div>
            <h2 className="font-bold text-4xl font-plus-jakarta-sans">
              {data.title}
            </h2>
            <div className="flex gap-4 text-sm font-medium font-plus-jakarta-sans">
              <div className="flex gap-2 items-center">
                <div className="text-pink-500">
                  <Icon name="Calendar" size={16} />
                </div>
                <div>{dateFormatter(data.tanggal)}</div>
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

          <div className="mt-12 relative aspect-video rounded-xl overflow-hidden">
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
            className="grid gap-4 text-gray-600 mt-12 text-justify font-plus-jakarta-sans"
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
        <div className="w-[437px] flex flex-col gap-12">
          <LatestNewsWidget data={news.data} />
        </div>
      </div>
    </div>
  );
}

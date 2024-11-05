import { Icon } from "@/app/icons";
import { News } from "@/types/news";
import { dateFormatter } from "@/utils/date-formatter";
import Image from "next/image";
import { use } from "react";

const content =
  "Jakarta Timur, (24/8/2024) - Walikota Administrasi Jakarta Timur, M. Anwar, hadir membuka Turnamen Tenis Piala Walikota, di Lapangan Tenis Kantor Walikota, Sabtu (24/8/2024). Turnamen yang diikuti 36 atlet Jakarta Timur berlangsung pada 24-25 Agustus";

export const LatestNewsWidget = ({ getData }: { getData: Promise<News[]> }) => {
  const items = use(getData);

  return (
    <div className="font-plus-jakarta-sans">
      <h3 className="font-semibold text-2xl">Berita Terbaru</h3>
      <div className="mt-10 grid gap-6">
        {items.map((data, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="relative aspect-square w-20">
              <Image
                src={data.img}
                alt="#"
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div className="flex-1 grid gap-2">
              <h4 className="font-semibold line-clamp-2">{data.title}</h4>
              <div
                className="text-sm line-clamp-1 text-gray-600"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              <div className="flex items-center gap-2">
                <div className="text-pink-500">
                  <Icon name="Calendar" size={16} />
                </div>
                <div className="text-sm text-gray-600">
                  {dateFormatter(data.time)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

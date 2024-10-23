import { Icon } from "@/app/icons";
import Image from "next/image";

const items = [1, 2, 3];

export const LatestNewsWidget = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl">Berita Terbaru</h3>
      <div className="mt-10 grid gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="relative aspect-square w-20">
              <Image
                src="/img/kantor-walikota-jaktim.png"
                alt="#"
                fill
                className="rounded-xl"
              />
            </div>
            <div className="flex-1 grid gap-2">
              <h4 className="font-semibold line-clamp-2">
                Sambut HUT Ke-497 Kota Jakarta, Walikota Lepas Ribuan Peserta
                Gowes untuk Meriahkan Expo Pendidikan
              </h4>
              <p className="text-sm line-clamp-1 text-gray-600">
                Jakarta Timur, (24/8/2024) - Walikota Administrasi Jakarta
                Timur, M. Anwar, hadir membuka Turnamen Tenis Piala Walikota, di
                Lapangan Tenis Kantor Walikota, Sabtu (24/8/2024). Turnamen yang
                diikuti 36 atlet Jakarta Timur berlangsung pada 24-25 Agustus
              </p>
              <div className="flex items-center gap-2">
                <div className="text-pink-500">
                  <Icon name="Calendar" size={16} />
                </div>
                <div className="text-sm text-gray-600">18 Juli 2024</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

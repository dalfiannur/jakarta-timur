import Image from "next/image";

const items = [1, 2, 3];

export const VideoWidget = () => {
  return (
    <div>
      <h3 className="font-semibold text-2xl">Video Informasi dan Edukasi</h3>
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
            <h4 className="font-semibold flex-1">
              Sambut HUT Ke-497 Kota Jakarta, Walikota Lepas Ribuan Peserta
              Gowes untuk Meriahkan Expo Pendidikan
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

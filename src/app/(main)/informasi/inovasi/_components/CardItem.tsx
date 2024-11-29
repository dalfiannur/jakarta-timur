import Image from "next/image";
import Link from "next/link";

export const CardItem = () => {
  return (
    <div className="grid gap-2 lg:gap-4">
      <Link href={"#"}>
        <div className="relative aspect-[7/5] w-full ">
          <Image
            alt="#"
            src="/img/hero-3.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </Link>
      <Link href={"#"}>
        <h2 className="text-sm font-bold lg:text-base">
          Cegah Tawuran, Wakil Walikota Minta RT RW hingga Kader PKK dan Dawis
          Tingkatkan Inovasi Kegiatan Positif
        </h2>
      </Link>
    </div>
  );
};

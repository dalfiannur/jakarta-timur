import Image from "next/image";
import Link from "next/link";

export const CardItem = () => {
  return (
    <div className="grid gap-4">
      <Link href={"#"}>
        <div className="relative w-full aspect-[7/5] bg-red-500">
          <Image alt="#" src="/img/hero-3.png" fill className="rounded-xl object-cover" />
        </div>
      </Link>
      <Link href={"#"} className="font-bold">
        <h2>
          Cegah Tawuran, Wakil Walikota Minta RT RW hingga Kader PKK dan Dawis
          Tingkatkan Inovasi Kegiatan Positif
        </h2>
      </Link>
    </div>
  );
};

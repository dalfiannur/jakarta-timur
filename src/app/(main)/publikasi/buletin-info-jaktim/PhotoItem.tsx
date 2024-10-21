import Image from "next/image";
import Link from "next/link";

export const PhotoItem = () => {
  return (
    <div>
      <Link href="/publikasi/buletin-info-jaktim/1">
        <div className="relative aspect-[5/7]">
          <Image
            src={"/img/kantor-walikota-jaktim.png"}
            alt="#"
            fill
            className="rounded-xl"
          />
        </div>
      </Link>
      <Link href="/publikasi/buletin-info-jaktim/1">
        <h2 className="font-semibold mt-4">Buletin Info Jaktim Edisi ke-125</h2>
      </Link>
    </div>
  );
};

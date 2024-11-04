import Image from "next/image";
import Link from "next/link";

export const CardItem = ({
  title,
  image,
}: {
  image: string;
  title: string;
}) => {
  return (
    <div className="relative border border-gray-500/10 rounded-2xl p-4">
      <div className="relative w-full aspect-[11/16] ">
        <Image
          alt={title}
          src={image}
          fill
          className="rounded-xl object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 rounded-xl" />
      </div>

      <div className="absolute inset-0 z-[1] flex flex-col justify-end p-8 gap-4">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <Link
          href={"#"}
          className="bg-white text-center rounded-xl text-sm py-2 text-pink-500 font-bold border border-pink-500"
        >
          Lihat Dokumen
        </Link>
      </div>
    </div>
  );
};

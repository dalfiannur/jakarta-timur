import Image from "next/image";
import Link from "next/link";

export const CardItem = ({
  title,
  image,
  href,
}: {
  image: string;
  title: string;
  href: string;
}) => {
  return (
    <div className="relative rounded-2xl border border-gray-500/10 p-4">
      <div className="relative aspect-[11/16] w-full ">
        <Image
          alt={title}
          src={image}
          fill
          className="rounded-xl object-cover"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-transparent to-black/40" />
      </div>

      <div className="absolute inset-0 z-[1] flex flex-col justify-end gap-4 p-8">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <Link
          href={href}
          className="rounded-xl border border-pink-500 bg-white py-2 text-center text-sm font-bold text-pink-500"
        >
          Lihat Dokumen
        </Link>
      </div>
    </div>
  );
};

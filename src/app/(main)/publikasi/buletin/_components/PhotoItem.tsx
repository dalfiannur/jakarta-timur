import Image from "next/image";
import Link from "next/link";

type PhotoItemProps = {
  id: number;
  image: string;
  title: string;
};

export const PhotoItem = ({ id, image, title }: PhotoItemProps) => {
  return (
    <div>
      <Link href={`/publikasi/buletin/${id}`}>
        <div className="relative aspect-[5/7]">
          <Image src={image} alt={title} fill className="rounded-xl" />
        </div>
      </Link>
      <Link href={`/publikasi/buletin/${id}`}>
        <h2 className="mt-2 font-plus-jakarta-sans text-xs font-semibold lg:mt-4 lg:text-base">
          {title}
        </h2>
      </Link>
    </div>
  );
};

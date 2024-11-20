import Image from "next/image";

interface ItemProps {
  id: number;
  isPrimary?: boolean;
  title: string;
  image?: string | null;
}

export const GalleryItem = ({ id, title, image, isPrimary }: ItemProps) => {
  return (
    <a
      href={`/publikasi/galeri/${id}`}
      data-primary={isPrimary}
      className="group relative col-span-2 lg:col-span-1 data-[primary=true]:col-span-4 rounded-xl overflow-hidden"
    >
      <div className="relative w-full aspect-[8/6] max-h-[460px] rounded-xl overflow-hidden">
        {image && (
          <Image
            src={image}
            fill
            alt={title}
            className="group-hover:scale-110 transition-all duration-500 object-cover"
          />
        )}
      </div>
      <div className="relative group-data-[primary=true]:absolute inset-0 group-data-[primary=true]:bg-gradient-to-b from-transparent from-60% to-black/80 flex items-end pt-4 group-data-[primary=true]:p-6 group-data-[primary=true]:py-6">
        <h6 className="text-base group-data-[primary=true]:text-3xl font-semibold group-data-[primary=true]:text-white">{title}</h6>
      </div>
    </a>
  );
};

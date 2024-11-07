import Image from "next/image";
import { tv } from "tailwind-variants";

interface ItemProps {
  id: number;
  isPrimary?: boolean;
  title: string;
  image?: string | null;
}

const createStyles = tv({
  slots: {
    root: "group relative flex flex-col gap-4 rounded-xl overflow-hidden",
    imgContainer: "rounded-xl overflow-hidden",
    description: "",
    title: "",
    image: "group-hover:scale-110 transition-all duration-500 object-cover",
  },
  variants: {
    isPrimary: {
      true: {
        root: "col-span-4 h-[484px]",
        imgContainer: "absolute inset-0",
        description:
          "absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black/80 flex items-end px-4 py-6",
        title: "text-2xl font-semibold text-white",
      },
      false: {
        root: "h-[374px]",
        imgContainer: "relative w-full h-[304px]",
        title: "font-semibold",
      },
    },
  },
});

export const Item = ({ id, title, image, isPrimary }: ItemProps) => {
  const x = createStyles({ isPrimary });
  return (
    <a href={`/publikasi/galeri/${id}`} className={x.root()}>
      <div className={x.imgContainer()}>
        {image && <Image src={image} fill alt={title} className={x.image()} />}
      </div>
      <div className={x.description()}>
        <h6 className={x.title()}>{title}</h6>
      </div>
    </a>
  );
};

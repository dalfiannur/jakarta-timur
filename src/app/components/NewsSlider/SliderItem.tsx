import { Icon } from "@/app/icons";
import Image from "next/image";
import { tv } from "tailwind-variants";

const createStyles = tv({
  slots: {
    root: "group relative rounded-xl flex flex-col justify-end overflow-hidden",
    title: "font-semibold truncate text-white ...",
    category:
      "bg-white/30 backdrop-blur-2xl text-sm w-fit rounded-lg px-2 py-1 uppercase text-white",
    content: "relative flex flex-col z-0",
    metaItem: "flex text-white-500",
  },
  variants: {
    primary: {
      true: {
        root: "col-span-2 row-span-2",
        title: "text-xl",
        content: "p-8 gap-4",
      },
      false: {
        root: "aspect-[3/2]",
        content: "p-4 gap-2",
      },
    },
  },
});

export const SliderItem = ({
  primary,
  title,
  category,
  date,
  image,
}: {
  primary?: boolean;
  title: string;
  category: string;
  date: string;
  image: string;
}) => {
  const x = createStyles({ primary });
  return (
    <div className={x.root()}>
      <Image
        src={image}
        fill
        alt={title}
        className="-z-10 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute bg-gradient-to-b from-transparent from-60% to-black/80 inset-0" />
      <div className={x.content()}>
        <div className={x.category()}>{category}</div>
        <h4 className={x.title()}>{title}</h4>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="text-pink-500">
              <Icon name="GoalsFill" size={16} />
            </div>
            <div className="text-white text-sm">{date}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-pink-500">
              <Icon name="GoalsFill" size={16} />
            </div>
            <div className="text-white text-sm">Sudin Komunikasi</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-pink-500">
              <Icon name="GoalsFill" size={16} />
            </div>
            <div className="text-white text-sm">KIP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

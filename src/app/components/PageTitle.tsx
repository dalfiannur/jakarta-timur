import Image from "next/image";
import { tv } from "tailwind-variants";

interface PageTitleProps {
  image: string;
  title: string;
  subtitle: string;
  rounded?: boolean;
  topSpacer?: boolean;
}

const createStyles = tv({
  slots: {
    root: "relative overflow-hidden",
    imageContainer: "relative aspect-[4/1]",
    image: "-z-10 object-cover",
    imageOverlay: "absolute inset-0 bg-black/40 rounded-b-4xl",
    textContainer:
      "absolute flex flex-col justify-center items-center z-0 text-center text-white",
    title: "text-6xl font-bold uppercase",
    subtitle: "text-2xl font-semibold",
  },
  variants: {
    rounded: {
      true: {
        image: "rounded-b-4xl",
      },
    },
    topSpacer: {
      true: {
        textContainer: "left-0 right-0 bottom-0 top-20",
      },
      false: {
        textContainer: "inset-0",
      },
    },
  },
});

export const PageTitle = ({
  image,
  title,
  subtitle,
  rounded = true,
  topSpacer,
}: PageTitleProps) => {
  const x = createStyles({ rounded, topSpacer });
  return (
    <div className={x.root()}>
      <div className={x.imageContainer()}>
        <Image src={image} fill alt={title} className={x.image()} />
        <div className={x.imageOverlay()} />
      </div>
      <div className={x.textContainer()}>
        <h2 className={x.title()}>{title}</h2>
        <h4 className={x.subtitle()}>{subtitle}</h4>
      </div>
    </div>
  );
};

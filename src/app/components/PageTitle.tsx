import Image from "next/image";

interface PageTitleProps {
  image: string;
  title: string;
  subtitle: string;
}

export const PageTitle = ({ image, title, subtitle }: PageTitleProps) => {
  return (
    <div className="relative overflow-hidden ">
      <div className="relative aspect-[4/1]">
        <Image src={image} fill alt={title} className="z-0 rounded-b-4xl" />
        <div className="absolute inset-0 bg-black/40 rounded-b-4xl" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="text-center text-white">
          <h2 className="text-6xl font-bold uppercase">{title}</h2>
          <h4 className="text-2xl font-semibold">{subtitle}</h4>
        </div>
      </div>
    </div>
  );
};

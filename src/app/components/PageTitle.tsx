import Image from "next/image";

interface PageTitleProps {
  image: string;
  title: string;
  subtitle: string;
  rounded?: boolean;
  topSpacer?: boolean;
}

export const PageTitle = ({
  image,
  title,
  subtitle,
  rounded = true,
  topSpacer,
}: PageTitleProps) => {
  return (
    <div className="mt-[75px] lg:mt-0 relative overflow-hidden">
      <div data-rounded={rounded} className="group relative aspect-[3/2] lg:aspect-[4/1]">
        <Image
          src={image}
          fill
          alt={title}
          className="-z-10 object-cover object-top lg:group-data-[rounded=true]:rounded-b-4xl"
        />
        <div className="absolute inset-0 bg-black/50 lg:group-data-[rounded=true]:rounded-b-4xl" />
      </div>
      <div
        data-spacer={topSpacer}
        className="absolute flex flex-col justify-center items-center z-0 text-center text-white inset-0 data-[spacer=true]:top-20 gap-4"
      >
        <h2 className="text-2xl lg:text-6xl font-bold uppercase font-plus-jakarta-sans">{title}</h2>
        <h4 className="text-sm lg:text-2xl font-semibold font-roboto">{subtitle}</h4>
      </div>
    </div>
  );
};

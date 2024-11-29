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
    <div className="relative mt-[75px] overflow-hidden lg:mt-0">
      <div
        data-rounded={rounded}
        className="group relative aspect-[4/2] lg:aspect-[4/1]"
      >
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
        className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-4 text-center text-white data-[spacer=true]:top-0 lg:data-[spacer=true]:top-20"
      >
        <h2 className="font-plus-jakarta-sans text-2xl font-bold uppercase lg:text-6xl">
          {title}
        </h2>
        <h4 className="font-roboto text-sm font-semibold lg:text-2xl">
          {subtitle}
        </h4>
      </div>
    </div>
  );
};

import { ReactNode } from "react";

type PageWrapperProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export const PageWrapper = ({
  title,
  description,
  children,
}: PageWrapperProps) => {
  return (
    <div className="flex flex-col gap-7 lg:gap-14 px-4">
      <div className="text-gray-950">
        <h2 className="font-plus-jakarta-sans text-base lg:text-2xl font-bold">{title}</h2>
        <p className="mt-2 font-roboto text-sm lg:text-lg">{description}</p>
      </div>
      {children}
    </div>
  );
};

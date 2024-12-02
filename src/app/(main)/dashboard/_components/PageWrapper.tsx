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
    <div className="flex flex-col gap-6 px-4">
      <div className="text-gray-950">
        <h2 className="font-plus-jakarta-sans text-2xl font-bold">{title}</h2>
        <p className="mt-2 font-roboto text-lg">{description}</p>
      </div>
      {children}
    </div>
  );
};

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
    <div className="flex flex-col gap-6">
      <div className="text-gray-950">
        <h2 className="text-2xl font-plus-jakarta-sans font-bold">{title}</h2>
        <p className="mt-4 text-lg font-roboto">{description}</p>
      </div>
      {children}
    </div>
  );
};

import { ReactNode } from "react";

export const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div>
      <h5 className="text-sm font-bold lg:text-2xl">{title}</h5>
      <div className="mt-1 text-xs lg:mt-4 lg:text-base">{children}</div>
    </div>
  );
};

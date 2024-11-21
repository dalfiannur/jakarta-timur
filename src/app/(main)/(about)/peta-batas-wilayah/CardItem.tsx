import { ReactNode } from "react";

export const CardItem = ({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) => {
  return (
    <div className="border rounded-xl p-4 lg:p-8">
      <h5 className="font-semibold text-xl lg:text-2xl">{title}</h5>
      <div className="mt-4 text-lg lg:text-2xl text-gray-600">{children}</div>
    </div>
  );
};

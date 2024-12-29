import { ReactNode } from "react";

export const NumberListItem = ({
  no,
  children,
}: {
  no: number;
  children?: ReactNode;
}) => {
  return (
    <li className="flex items-center gap-4 font-roboto lg:gap-8">
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-100 text-base font-bold text-gray-500 lg:h-10 lg:w-10 lg:text-lg">
        {no}
      </div>
      <div className="flex-1 text-lg font-medium text-gray-800 lg:text-2xl">
        {children}
      </div>
    </li>
  );
};

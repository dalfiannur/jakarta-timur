import { ReactNode } from "react";

export const NumberListItem = ({
  no,
  children,
}: {
  no: number;
  children?: ReactNode;
}) => {
  return (
    <li className="flex items-center gap-4 lg:gap-8">
      <div className="bg-gray-200 text-gray-500 font-bold text-base lg:text-lg w-8 lg:w-10 h-8 lg:h-10 rounded-xl flex items-center justify-center">
        {no}
      </div>
      <div className="flex-1 text-lg lg:text-2xl font-medium text-gray-800">
        {children}
      </div>
    </li>
  );
};

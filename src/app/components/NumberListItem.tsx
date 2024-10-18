import { ReactNode } from "react";

export const NumberListItem = ({
  no,
  children,
}: {
  no: number;
  children?: ReactNode;
}) => {
  return (
    <li className="flex items-center gap-8">
      <div className="bg-gray-200 text-gray-500 font-bold text-lg w-10 h-10 rounded-xl flex items-center justify-center">
        {no}
      </div>
      <div className="flex-1 text-2xl font-medium text-gray-800">
        {children}
      </div>
    </li>
  );
};

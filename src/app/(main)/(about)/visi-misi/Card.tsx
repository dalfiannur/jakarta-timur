import { ReactNode } from "react";

export const Card = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div className="w-48 h-48 rounded-xl shadow-light flex flex-col gap-6 justify-center items-center p-2">
      <div className="w-16 h-16 rounded-xl bg-blue-300/20 flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center text-lg font-medium text-gray-800">
        {children}
      </div>
    </div>
  );
};

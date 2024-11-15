import { formattedNumber } from "@/utils/format-number";
import { ReactNode } from "react";

type CounterCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
};

export const CounterCard = ({ title, value }: CounterCardProps) => {
  return (
    <div className="flex items-center gap-4 px-6 py-3">
      <div className="flex-1 font-plus-jakarta-sans">
        <h6 className="font-medium text-xs text-gray-500">{title}</h6>
        <p className="mt-2 font-bold text-gray-950 text-xl">
          {formattedNumber(value)}
        </p>
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-200" />
    </div>
  );
};

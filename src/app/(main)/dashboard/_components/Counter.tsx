import { ReactNode } from "react";

export const Counter = ({
  title,
  value,
  color,
}: {
  title: string;
  value: ReactNode;
  color?: string;
}) => {
  return (
    <div className="font-plus-jakarta-sans">
      <div
        className="h-1 w-4"
        style={{
          backgroundColor: color,
        }}
      />
      <div className="mt-[2px] text-xs font-medium">{title}</div>
      <div className="mt-1 text-sm font-bold">{value}</div>
    </div>
  );
};

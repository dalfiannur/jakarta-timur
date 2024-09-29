import { ReactNode } from "react";

interface SectionBoxProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const SectionBox = ({ title, subtitle, children }: SectionBoxProps) => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="font-bold text-3xl">{title}</h2>
      <h5 className="mt-2 text-xl text-gray-800/50">{subtitle}</h5>
      <div className="mt-8">{children}</div>
    </div>
  );
};

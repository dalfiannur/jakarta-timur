import { ReactNode } from "react";

interface SectionBoxProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
  children: ReactNode;
  rightSection?: ReactNode;
}

export const SectionBox = ({
  title,
  subtitle,
  align = "left",
  children,
  rightSection,
}: SectionBoxProps) => {
  return (
    <div className="container mx-auto py-4 px-4 md:px-8 md:py-10">
      <div className="flex flex-col lg:flex-row justify-between gap-2">
        <div
          data-align={align}
          className="flex-1 data-[align=left]:text-left data-[align=right]:text-right"
        >
          <h2 className="font-bold text-xl md:text-3xl font-plus-jakarta-sans">{title}</h2>
          <h5 className="mt-2 text-base md:text-xl text-gray-800/50 font-plus-jakarta-sans">
            {subtitle}
          </h5>
        </div>
        {rightSection}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
};

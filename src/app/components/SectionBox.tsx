import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const SectionBoxStyle = tv({
  slots: {
    root: "container mx-auto py-10",
    title: "font-bold text-3xl",
    subtitle: "mt-2 text-xl text-gray-800/50",
  },
  variants: {
    align: {
      left: {
        title: "text-left",
        subtitle: "text-left",
      },
      center: {
        title: "text-center",
        subtitle: "text-center",
      },
    },
  },
});
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
  const x = SectionBoxStyle({ align });
  return (
    <div className={x.root()}>
      <div className="flex justify-between">
        <div className="flex-1">
          <h2 className={x.title()}>{title}</h2>
          <h5 className={x.subtitle()}>{subtitle}</h5>
        </div>
        {rightSection}
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
};
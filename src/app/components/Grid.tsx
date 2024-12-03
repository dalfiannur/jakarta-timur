import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const GridStyle = tv(
  {
    base: "grid",
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      },
      gap: {
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-8",
        xl: "gap-16"
      },
      align: {
        center: "items-center",
      },
    },
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

type GridProps = VariantProps<typeof GridStyle> & {
  children?: ReactNode;
};

export const Grid = ({ children, ...props }: GridProps) => {
  const x = GridStyle(props);
  return <div className={x}>{children}</div>;
};

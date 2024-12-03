import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const BoxStyle = tv(
  {
    base: "",
    variants: {
      padding: {
        xs: "p-1",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
      rounded: {
        sm: "rounded-md",
        md: "rounded-lg",
        lg: "rounded-xl",
      },
    },
  },
  { responsiveVariants: ["md", "lg"] },
);

type BoxProps = VariantProps<typeof BoxStyle> & {
  children?: ReactNode;
  className?: string;
};

export const Box = ({ children, ...props }: BoxProps) => {
  const x = BoxStyle(props);
  return <div className={x}>{children}</div>;
};

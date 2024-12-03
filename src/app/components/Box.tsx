import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const BoxStyle = tv(
  {
    base: "",
    variants: {
      padding: {
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
      },
    },
  },
  { responsiveVariants: ["md", "lg"] },
);

type BoxProps = VariantProps<typeof BoxStyle> & {
  children?: ReactNode;
};

export const Box = ({ children, ...props }: BoxProps) => {
  const x = BoxStyle(props);
  return <div className={x}>{children}</div>;
};

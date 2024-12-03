import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const TextStyle = tv(
  {
    base: "",
    variants: {
      font: {
        jakarta: "font-plus-jakarta-sans",
        roboto: "font-roboto",
        inter: "font-inter",
        poppins: "font-poppins",
      },
      size: {
        xxs: "text-[10px]",
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        subtle: "text-[#71717A]",
        black: "text-[#040E05]",
      },
    },
    defaultVariants: {
      font: "jakarta",
      color: "black",
    },
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

type TextProps = VariantProps<typeof TextStyle> & {
  children?: ReactNode;
  classNames?: string;
};

export const Text = ({ children, ...props }: TextProps) => {
  const x = TextStyle(props);
  return <p className={x}>{children}</p>;
};

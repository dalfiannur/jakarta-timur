import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const AvatarBoxStyle = tv(
  {
    base: "rounded-full flex justify-center items-center",
    variants: {
      variant: {
        light: "",
      },
      color: {
        orange: "",
      },
      size: {
        sm: "w-10 h-10",
        md: "",
        lg: "",
        xl: "",
      },
    },
    compoundVariants: [
      {
        variant: "light",
        color: "orange",
        className: "bg-orange-50",
      },
    ],
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

type AvatarBoxProps = VariantProps<typeof AvatarBoxStyle> & {
  children?: ReactNode;
};

export const AvatarBox = ({ children, ...props }: AvatarBoxProps) => {
  const x = AvatarBoxStyle(props);
  return <div className={x}>{children}</div>;
};

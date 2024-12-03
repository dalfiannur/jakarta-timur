import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const FlexStyle = tv(
  {
    base: "flex",
    variants: {
      flex: {
        true: "flex-1",
      },
      direction: {
        column: "flex-col",
        row: "flex-row",
        "column-reverse": "column-reverse",
        "row-reverse": "row-reverse",
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
      },
      gap: {
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-8",
        xl: "gap-16",
      },
    },
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

type FlexProps = VariantProps<typeof FlexStyle> & {
  children?: ReactNode;
  className?: string;
};

export const Flex = ({ children, ...props }: FlexProps) => {
  const x = FlexStyle(props);
  return (
    <div {...props} className={x}>
      {children}
    </div>
  );
};

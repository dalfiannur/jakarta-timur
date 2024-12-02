import { tv, VariantProps } from "tailwind-variants";
import { Icon } from "../icons";

const styles = tv(
  {
    slots: {
      root: "flex justify-center items-center",
      icon: "aspect-square",
    },
    variants: {
      color: {
        blue: {},
        pink: {},
        orange: {},
      },
      disabled: { true: { root: "text-gray-400" }, false: {} },
      size: {
        sm: {
          root: "text-xs",
          icon: "h-3",
        },
        md: {
          root: "text-sm",
          icon: "h-4",
        },
        lg: {
          root: "text-base",
          icon: "h-6",
        },
      },
    },
    compoundVariants: [
      {
        color: "pink",
        disabled: false,
        class: {
          root: "text-pink-500",
        },
      },
      {
        color: "blue",
        disabled: false,
        class: {
          root: "text-blue-500",
        },
      },
      {
        color: "orange",
        disabled: false,
        class: {
          root: "text-orange-500",
        },
      },
    ],
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

type PaginationArrowProps = Omit<VariantProps<typeof styles>, "size"> & {
  position: "left" | "right";
  onClick?: () => void;
};

export const PaginationArrow = ({
  position,
  disabled,
  color = "pink",
  onClick,
}: PaginationArrowProps) => {
  const x = styles({
    disabled,
    color,
    size: { initial: "sm", md: "md", lg: "lg" },
  });
  return (
    <button onClick={onClick} className={x.root()}>
      <Icon
        name={position === "left" ? "ChevronLeft" : "ChevronRight"}
        className={x.icon()}
      />
    </button>
  );
};

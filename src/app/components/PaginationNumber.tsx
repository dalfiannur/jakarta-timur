import { tv, VariantProps } from "tailwind-variants";

const styles = tv(
  {
    base: "aspect-square rounded-full font-semibold flex items-center justify-center",
    variants: {
      active: {
        true: "",
        false: "",
      },
      color: {
        pink: "",
        blue: "",
        orange: "",
      },
      size: {
        sm: "w-5 text-xs",
        md: "w-5 text-sm",
        lg: "w-8 text-base",
      },
    },
    compoundVariants: [
      {
        active: false,
        color: "pink",
        class: "text-pink-500",
      },
      {
        active: false,
        color: "blue",
        class: "text-blue-500",
      },
      {
        active: false,
        color: "orange",
        class: "text-orange-500 text-orange-500",
      },
      {
        active: true,
        color: "pink",
        class: "bg-pink-500 text-white",
      },
      {
        active: true,
        color: "blue",
        class: "bg-blue-500 text-white",
      },
      {
        active: true,
        color: "orange",
        class: "bg-orange-500 text-white",
      },
    ],
    defaultVariants: {
      active: false,
      color: "pink",
    },
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

export type PaginationNumberProps = Omit<
  VariantProps<typeof styles>,
  "size"
> & {
  label: string;
  onClick?: () => void;
};

export const PaginationNumber = ({
  active,
  label,
  color = "pink",
  onClick,
}: PaginationNumberProps) => {
  return (
    <button
      onClick={onClick}
      className={styles({
        active,
        color,
        size: { initial: "sm", md: "md", lg: "lg" },
      })}
    >
      {label}
    </button>
  );
};

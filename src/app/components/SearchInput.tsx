"use client";
import { tv, VariantProps } from "tailwind-variants";
import { Icon } from "../icons";

const styles = tv(
  {
    slots: {
      root: "group relative border overflow-hidden flex items-center",
      icon: "absolute aspect-square",
      input: "peer pr-4 focus:outline-none flex-1",
    },
    variants: {
      size: {
        sm: {
          root: "w-full rounded",
          icon: "left-2 h-4",
          input: "pl-8 py-2 text-xs",
        },
        md: {
          root: "flex-1 rounded-lg",
          icon: "left-2 h-4",
          input: "pl-8 py-1 text-sm",
        },
        lg: {
          root: "rounded-xl",
          icon: "left-3 h-5",
          input: "pl-10 py-3 text-base",
        },
      },
      color: {
        pink: {
          root: "focus-within:border-pink-500",
          icon: "group-focus-within:text-pink-500",
        },
        orange: {
          root: "focus-within:border-orange-500",
          icon: "group-focus-within:text-orange-500",
        },
      },
    },
    defaultVariants: {
      size: "lg",
      color: "pink",
    },
  },
  { responsiveVariants: ["md", "lg"] },
);

type Variant = Omit<VariantProps<typeof styles>, "size">;

type SearchInputProps = Variant & {
  onChange?: (value: string) => void;
  placeholder?: string;
  classNames?: {
    root?: string;
    icon?: string;
    input?: string;
  };
};

export const SearchInput = ({
  onChange,
  classNames,
  placeholder,
  ...props
}: SearchInputProps) => {
  const x = styles({
    ...props,
    size: {
      initial: "sm",
      md: "md",
      lg: "lg",
    },
  });

  return (
    <div className={x.root({ className: classNames?.root })}>
      <Icon name="Search" className={x.icon({ className: classNames?.icon })} />
      <input
        placeholder={placeholder}
        className={x.input({ className: classNames?.input })}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

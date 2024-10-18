"use client";

import Link, { LinkProps } from "next/link";
import { tv } from "tailwind-variants";

const createStyles = tv({
  base: "text-sm font-medium",
  variants: {
    active: {
      true: "text-pink-500 underline",
      false: "text-gray-500 hover:gray-700",
    },
  },
});

interface BreadcrumbItemProps extends LinkProps {
  label: string;
  active?: boolean;
}

export const BreadcrumbItem = ({
  label,
  active,
  ...props
}: BreadcrumbItemProps) => {
  const styles = createStyles({ active });
  return (
    <Link {...props} className={styles}>
      {label}
    </Link>
  );
};

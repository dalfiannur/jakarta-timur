"use client";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const createStyles = tv({
  base: "w-full border-r-2 text-left py-4 pl-12 pr-6 text-lg font-semibold text-gray-500 transition-all duration-500",
  variants: {
    active: {
      true: "border-pink-500",
      false: "border-transparent",
    },
  },
});

interface SidebarItemProps {
  children?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export const SidebarItem = ({
  children,
  active,
  onClick,
}: SidebarItemProps) => {
  const styles = createStyles({
    active,
  });

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

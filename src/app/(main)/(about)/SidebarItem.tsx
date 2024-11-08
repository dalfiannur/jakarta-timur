"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const createStyles = tv({
  base: "w-full border-r-2 inline-block text-left py-4 pl-12 pr-6 text-lg font-semibold text-gray-500 transition-all duration-500",
  variants: {
    active: {
      true: "border-pink-500",
      false: "border-transparent",
    },
  },
});

interface SidebarItemProps {
  children?: ReactNode;
  value: string;
}

export const SidebarItem = ({ children, value }: SidebarItemProps) => {
  const pathname = usePathname();

  const styles = createStyles({
    active: pathname === value,
  });

  return (
    <Link href={value} className={styles}>
      {children}
    </Link>
  );
};

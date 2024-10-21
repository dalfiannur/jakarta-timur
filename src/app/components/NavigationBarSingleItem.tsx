"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "font-semibold text-sm/6 border-b-2",
  variants: {
    active: {
      true: "text-pink-500 border-pink-500",
      false: "text-gray-500 border-transparent",
    },
  },
});

export const NavigationBarSingleItem = ({
  href,
  index,
  label,
}: {
  href: string;
  index: string;
  label: string;
}) => {
  const pathname = usePathname();
  const active = index !== "/" ? pathname.includes(index) : index === pathname;
  return (
    <li className={styles({ active })}>
      <Link href={href}>{label}</Link>
    </li>
  );
};

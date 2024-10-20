"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useCallback } from "react";
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
  value: string;
}

export const SidebarItem = ({ children, value }: SidebarItemProps) => {
  const params = useSearchParams();
  const router = useRouter();

  const styles = createStyles({
    active: params.get("s") === value,
  });

  const onClick = useCallback(
    (param: string) => {
      router.push("/tentang-jakarta-timur?s=" + param, {
        scroll: false,
      });
    },
    [params]
  );

  return (
    <button className={styles} onClick={() => onClick(value)}>
      {children}
    </button>
  );
};

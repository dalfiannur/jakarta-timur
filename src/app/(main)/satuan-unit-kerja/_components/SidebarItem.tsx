"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarItemProps {
  children?: ReactNode;
  value: string;
}

export const SidebarItem = ({ children, value }: SidebarItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={value}
      data-active={pathname === value}
      className="inline-block w-full whitespace-nowrap px-0 py-2 text-left text-xs font-semibold text-gray-500 transition-all duration-500 data-[active=true]:border-b-2 data-[active=true]:border-pink-500 lg:whitespace-normal lg:px-4 lg:py-4 lg:pl-12 lg:pr-6 lg:text-lg lg:data-[active=true]:border-b-0 lg:data-[active=true]:border-r-2"
    >
      {children}
    </Link>
  );
};

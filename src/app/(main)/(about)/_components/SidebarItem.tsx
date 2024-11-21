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
      className="w-full border-b-2 lg:border-b-0 lg:border-r-2 inline-block text-left px-4 py-2 lg:py-4 lg:pl-12 lg:pr-6 text-base lg:text-lg whitespace-nowrap lg:whitespace-normal font-semibold text-gray-500 transition-all duration-500 border-transparent data-[active=true]:border-pink-500 hover:text-pink-500"
    >
      {children}
    </Link>
  );
};

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarItem = ({
  label,
  href,
}: {
  label: string;
  href: string;
}) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      data-active={pathname === href}
      className="group w-full inline-flex items-center data-[active=true]:bg-[#FFF3EF] rounded-xl overflow-hidden"
    >
      <div className="p-4 w-fit">
        <div className="bg-[#FF8361]/10 group-data-[active=true]:bg-[#FF8361] rounded w-8 h-8" />
      </div>
      <div className="flex-1 text-left border-r-4 border-transparent group-data-[active=true]:border-r-[#0C43AE] text-[#4D5054] group-data-[active=true]:text-[#040E05] p-4 font-plus-jakarta-sans font-semibold text-lg">
        {label}
      </div>
    </Link>
  );
};

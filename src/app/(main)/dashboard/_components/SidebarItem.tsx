"use client";
import { Icon, IconKeys } from "@/app/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarItem = ({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: IconKeys;
}) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div
        data-active={pathname === href}
        className="group flex w-full flex-1 flex-col items-center overflow-hidden rounded-xl lg:data-[active=true]:bg-[#FFF3EF] lg:flex-row"
      >
        <div className="w-fit p-0 lg:p-4">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#FF8361]/10 text-orange-600 group-data-[active=true]:bg-[#FF8361] group-data-[active=true]:text-white">
            <Icon name={icon} className="h-6 w-6" />
          </div>
        </div>
        <div className="flex-1 whitespace-nowrap border-r-[6px] border-transparent p-2 lg:p-4 text-left font-plus-jakarta-sans text-xs lg:text-base font-medium text-[#4D5054] group-data-[active=true]:text-[#040E05] lg:group-data-[active=true]:border-r-[#0C43AE]">
          {label}
        </div>
      </div>
    </Link>
  );
};

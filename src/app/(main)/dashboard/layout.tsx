import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div className="h-[514px] bg-[#0C43AE] bg-[url('/img/dashboard-header-background.png')] bg-cover bg-no-repeat">
        <div className="flex justify-between gap-16 items-center pt-48 container mx-auto pr-32">
          <div>
            <h1 className="font-plus-jakarta-sans font-bold text-white text-4xl">
              Dashboard Jakarta Timur
            </h1>
            <p className="font-roboto text-3xl text-white">
              Informasi Terbaru dan Data Analitik seputar Jakarta Timur
            </p>
            <div className="mt-4 flex gap-8 text-white font-roboto">
              <p className="text-2xl">Terakhir Diupdate, 1 September 2024</p>
              <button>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6509 8.15C16.8053 7.05151 15.6579 6.22331 14.349 5.76672C13.04 5.31014 11.6264 5.24497 10.281 5.5792C8.93566 5.91342 7.71687 6.63254 6.77378 7.64857C5.83069 8.6646 5.2042 9.93349 4.97095 11.3M18.0009 4.5V8.5H14.0009M6.34895 16.85C7.19432 17.9489 8.34176 18.7775 9.65079 19.2344C10.9598 19.6912 12.3737 19.7565 13.7192 19.4223C15.0648 19.088 16.2837 18.3687 17.2268 17.3523C18.1698 16.336 18.7961 15.0668 19.0289 13.7M5.99995 20.5V16.5H9.99995"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="mt-8 bg-[#306AD8] px-16 py-3 text-white rounded-full text-xl">
              Login
            </button>
          </div>

          <Image
            src="/img/dashboard-logo.png"
            alt="Dashboard Logo"
            width={287}
            height={252}
          />
        </div>
      </div>
      <div className="container mx-auto flex gap-20 py-10">
        <div className="flex-1 max-w-72">
          <SidebarItem active label="Dashboard Overview" href="/dashboard" />
          <SidebarItem label="Kependudukan" href="/dashboard/kependudukan" />
          <SidebarItem label="Pendidikan" href="/dashboard/pendidikan" />
          <SidebarItem label="Kesehatan" href="/dashboard/kesehatan" />
          <SidebarItem label="Industri" href="/dashboard/industri" />
          <SidebarItem label="Ekonomi" href="/dashboard/ekonomi" />
          <SidebarItem
            label="Lingkungan Hidup"
            href="/dashboard/lingkungan-hidup"
          />
          <SidebarItem label="Demokrasi" href="/dashboard/demokrasi" />
          <SidebarItem label="Kesejahteraan" href="/dashboard/kesejahteraan" />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

const SidebarItem = ({
  label,
  active,
  href,
}: {
  label: string;
  href: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={href}
      data-active={active}
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

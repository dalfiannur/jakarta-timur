import { Icon } from "@/app/icons";
import Link from "next/link";

export const PublicInformationItem = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 drop-shadow-sm lg:gap-6">
      <div className="flex items-center justify-center rounded-xl bg-gray-100 p-4">
        <Icon name="Pdf" className="h-20 w-20" />
      </div>
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="text-xs font-medium text-gray-600 lg:text-sm">2023</div>
        <div className="text-base font-bold lg:text-lg">KIB A Tahun 2023</div>
      </div>
      <div className="text-xs font-medium text-gray-600 lg:text-sm">
        Kelurahan Kebon Manggis
      </div>
      <div className="flex items-center gap-4">
        <Link
          href={"#"}
          className="flex h-10 flex-1 items-center justify-center rounded-xl border border-pink-500 text-xs font-bold text-pink-500 lg:text-sm"
        >
          Lihat Dokumen
        </Link>
        <Link
          href={"#"}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white"
        >
          <Icon name="Download" className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

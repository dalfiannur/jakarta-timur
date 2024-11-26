import Image from "next/image";

type SchoolListItemProps = {
  district: string;
  subDistrict: string;
  rw: string;
  address: string;
  onClick?: () => void;
};

export const JakWifiListItem = ({
  district,
  subDistrict,
  rw,
  address,
  onClick,
}: SchoolListItemProps) => {
  return (
    <div
      onClick={onClick}
      className="flex gap-4 rounded-xl border p-2 hover:bg-gray-100 lg:gap-10 lg:p-4"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 lg:h-16 lg:w-16">
        <Image src="/img/smart-city.svg" alt={rw} width={32} height={32} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between gap-6">
          <div className="flex-1 font-plus-jakarta-sans">
            <h2 className="text-xs font-medium text-gray-500/80 lg:text-sm">
              Kecamatan
            </h2>
            <p className="mt-0 text-sm font-semibold lg:mt-[2px] lg:text-base">
              {district}
            </p>
          </div>
          <div className="flex-1 font-plus-jakarta-sans">
            <h2 className="text-xs font-medium text-gray-500/80 lg:text-sm">
              Kelurahan
            </h2>
            <p className="mt-0 text-sm font-semibold lg:mt-[2px] lg:text-base">
              {subDistrict}
            </p>
          </div>
          <div className="flex-1 font-plus-jakarta-sans">
            <h2 className="text-xs font-medium text-gray-500/80 lg:text-sm">
              RW
            </h2>
            <p className="mt-0 text-sm font-semibold lg:mt-[2px] lg:text-base">
              {rw}
            </p>
          </div>
        </div>
        <div className="mt-2 flex gap-6 border-t pt-2">
          <div className="font-plus-jakarta-sans font-medium">
            <div className="text-xs font-medium text-gray-500/80 lg:text-sm">
              Alamat
            </div>
            <div className="mt-[2px] text-sm font-semibold text-gray-950 lg:text-base">
              {address}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const JakWifiListItemSkeleton = () => (
  <button className="flex animate-pulse gap-4 rounded-xl bg-gray-100 p-2 lg:gap-10 lg:p-4">
    <div className="h-8 w-8 rounded-full bg-gray-200 lg:h-16 lg:w-16" />
    <div className="flex-1">
      <div className="flex justify-between gap-6">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex-1 font-plus-jakarta-sans">
            <h2 className="h-3 w-24 rounded-full bg-gray-200" />
            <p className="mt-1 h-4 w-32 rounded-full bg-gray-200" />
          </div>
        ))}
      </div>
      <div className="mt-2 border-t pt-2">
        <div>
          <div className="h-3 w-24 rounded-full bg-gray-200" />
          <div className="mt-1 h-4 w-full rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  </button>
);

import { Icon } from "@/app/icons";

export const CardSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col justify-between gap-4 rounded bg-[#F4F9FC] px-6 py-4">
      <h5 className="h-6 w-full rounded-full bg-gray-200 text-sm font-semibold lg:text-xl" />
      <div className="flex items-center gap-4">
        <Icon name="UserRoundedBoldDuotone" className="h-6 w-6" />
        <h6 className="h-4 w-full flex-1 rounded-full bg-gray-200 text-xs text-gray-500 lg:text-base" />
      </div>
    </div>
  );
};

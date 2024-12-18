export const NewsItemSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="relative aspect-[6/5] rounded-xl bg-gray-200" />

      <div className="mt-3 flex flex-col gap-1 lg:mt-6 lg:gap-4">
        <div className="h-4 w-1/4 rounded-full bg-gray-200" />
        <div className="h-4 w-full rounded-full bg-gray-200" />
        <div className="h-4 w-1/2 rounded-full bg-gray-200" />

        <div className="h-3 w-full rounded-full bg-gray-200" />
        <div className="h-3 w-full rounded-full bg-gray-200" />
        <div className="h-3 w-52 rounded-full bg-gray-200" />

        <div className="flex gap-2 font-plus-jakarta-sans text-[8px] font-medium lg:gap-4 lg:text-sm">
          <div className="flex items-center gap-1 lg:gap-2">
            <div className="aspect-square h-2 rounded-full bg-gray-200 text-pink-500 lg:h-4" />
            <div className="h-3 w-24 rounded-full bg-gray-200" />
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-1 lg:gap-2">
            <div className="aspect-square h-2 rounded-full bg-gray-200 text-pink-500 lg:h-4" />
            <div className="h-3 w-24 rounded-full bg-gray-200" />
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-1 lg:gap-2">
            <div className="aspect-square h-2 rounded-full bg-gray-200 text-pink-500 lg:h-4" />
            <div className="h-3 w-24 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

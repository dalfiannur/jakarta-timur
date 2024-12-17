export const PhotoItemSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="relative aspect-[6/5] bg-gray-200 rounded-xl" />
      <div className="mt-3 flex flex-col gap-2 lg:mt-6 lg:gap-4">
        <div className="h-4 rounded-full bg-gray-200" />
        <div className="flex h-2 flex-wrap gap-2 lg:gap-4">
          <div className="flex items-center gap-1 lg:gap-2">
            <div className="aspect-square h-4 rounded-full bg-gray-200" />
            <div className="h-3 w-20 rounded-full bg-gray-200" />
          </div>
          <div className="border-l" />
          <div className="flex items-center gap-1 lg:gap-2">
            <div className="aspect-square h-4 rounded-full bg-gray-200" />
            <div className="h-3 w-20 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

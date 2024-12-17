export const VideoItemSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col gap-4 lg:gap-6">
      <div className="relative aspect-video rounded-xl bg-gray-200" />
      <div className="flex flex-1 flex-col gap-2 lg:gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 rounded-full bg-gray-200" />
          <div className="h-5 rounded-full bg-gray-200" />
          <div className="h-5 rounded-full bg-gray-200" />
          <div className="h-5 w-72 rounded-full bg-gray-200" />
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="aspect-square h-4 rounded-full bg-gray-200" />
            <div className="h-3 w-24 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

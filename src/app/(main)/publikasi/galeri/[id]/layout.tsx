import { ReactNode } from "react";
import { VideoList } from "../../_features/VideoList";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="px-4">
      <div className="mt-12 flex flex-col gap-16 lg:flex-row">
        {children}
        <div className="flex w-full flex-col gap-12 lg:w-[437px]">
          <VideoList />
        </div>
      </div>
    </div>
  );
}

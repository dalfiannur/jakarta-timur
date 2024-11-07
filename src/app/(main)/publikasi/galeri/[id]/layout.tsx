import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  video: ReactNode;
};

export default function Layout({ children, video }: LayoutProps) {
  return (
    <div>
      <div className="mt-12 flex gap-16">
        {children}
        <div className="w-[437px] flex flex-col gap-12">{video}</div>
      </div>
    </div>
  );
}

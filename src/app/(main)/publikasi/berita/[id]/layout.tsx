import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  news: ReactNode;
  bulletin: ReactNode;
};

export default function Layout({ children, news, bulletin }: LayoutProps) {
  return (
    <div>
      <div className="mt-12 flex gap-16">
        <div className="flex-1">{children}</div>
        <div className="w-[437px] flex flex-col gap-8">
          {news}
          {bulletin}
        </div>
      </div>
    </div>
  );
}

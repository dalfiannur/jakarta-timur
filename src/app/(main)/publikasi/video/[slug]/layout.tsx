import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  news: ReactNode;
};
export default function Layout({ children, news }: LayoutProps) {
  return (
    <div>
      <div className="mt-12 flex gap-16">
        {children}
        <div className="w-[437px] flex flex-col gap-12">{news}</div>
      </div>
    </div>
  );
}

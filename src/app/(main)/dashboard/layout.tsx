import { ReactNode } from "react";
import { Sidebar } from "./_components/Sidebar";
import { Header } from "./_components/Header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <div className="container mx-auto flex flex-col gap-20 py-10 lg:flex-row">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

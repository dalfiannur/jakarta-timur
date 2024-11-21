import { ReactNode } from "react";
import { SectionTitle } from "../_components/SectionTitle";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle>Demografi</SectionTitle>
      {children}
    </div>
  );
}

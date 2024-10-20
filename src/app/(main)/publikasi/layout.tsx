import { ReactNode } from "react";
import { PageBreadcrumbs } from "./PageBreadcrumbs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-48 mb-12 container mx-auto">
      <PageBreadcrumbs />
      <div className="mt-12">{children}</div>
    </div>
  );
}

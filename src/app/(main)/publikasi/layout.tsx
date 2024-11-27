import { ReactNode } from "react";
import { PageBreadcrumbs } from "./PageBreadcrumbs";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto mb-12 mt-24 lg:mt-48">
      <PageBreadcrumbs />
      <div className="mt-12">{children}</div>
    </div>
  );
}

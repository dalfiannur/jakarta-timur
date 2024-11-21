import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children?: ReactNode }) => (
  <h4 className="text-4xl font-bold font-plus-jakarta-sans hidden lg:block">{children}</h4>
);

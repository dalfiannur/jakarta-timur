import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children?: ReactNode }) => (
  <h4 className="text-sm lg:text-3xl font-bold font-roboto capitalize">{children}</h4>
);

import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children?: ReactNode }) => (
  <h4 className="text-sm lg:text-4xl font-bold font-roboto capitalize">{children}</h4>
);

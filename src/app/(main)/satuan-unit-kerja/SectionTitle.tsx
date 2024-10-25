import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children?: ReactNode }) => (
  <h4 className="text-4xl font-bold">{children}</h4>
);

"use client";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextTopLoader />
      {children}
    </>
  );
};

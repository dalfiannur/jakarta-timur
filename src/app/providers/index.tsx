"use client";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import TrpcProvider from "./TrpcProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextTopLoader />
      <TrpcProvider>{children}</TrpcProvider>
    </>
  );
};

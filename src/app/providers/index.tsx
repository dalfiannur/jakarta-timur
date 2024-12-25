"use client";

import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import TrpcProvider from "./TrpcProvider";
import StoreProvider from "./StoreProvider";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <StoreProvider>
      <NextTopLoader />
      <TrpcProvider>{children}</TrpcProvider>
    </StoreProvider>
  );
};

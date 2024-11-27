"use client";
import dynamic from "next/dynamic";

export const MapAreaNoSSR = dynamic(() => import("./MapArea"), {
  ssr: false,
});

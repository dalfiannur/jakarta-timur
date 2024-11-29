"use client";
import { trpc } from "@/utils/trpc";
import { useParams } from "next/navigation";
import { createContext, ReactNode } from "react";
import { Video } from "@/types/video";

type IContext = {
  data?: Video;
};

export const Context = createContext<IContext>({});

export const Provider = ({ children }: { children: ReactNode }) => {
  const params = useParams();
  const slug = params.slug as string;
  const { data } = trpc.externalApi.findVideoBySlug.useQuery(slug);
  return <Context.Provider value={{ data }}>{children}</Context.Provider>;
};

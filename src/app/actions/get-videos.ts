"use server";

import { EntityResponse } from "@/types/entity";
import { Video } from "@/types/video";
import { PaginationRequest, PaginationResponse } from "@/types/pagination";

export const getVideos = async ({
  page = "1",
  limit = "10",
}: PaginationRequest): Promise<PaginationResponse<Video>> => {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", limit);

  return fetch(
    "https://timur.jakarta.go.id/API_Timur/api/video?" + params.toString(),
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const findVideoBySlug = async (
  id: string,
): Promise<EntityResponse<Video>> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/video?slug=" + id)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

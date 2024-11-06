"use server";

import { EntityResponse } from "@/types/entity";
import { NewsPhoto } from "@/types/news-photo";
import { PaginationRequest, PaginationResponse } from "@/types/pagination";

export const getNewsPhotos = async ({
  page = "1",
  limit = "10",
}: PaginationRequest): Promise<PaginationResponse<NewsPhoto>> => {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", limit);

  return fetch(
    "https://timur.jakarta.go.id/API_Timur/api/newsphoto?" + params.toString(),
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const findNewsPhotoById = async (
  id: string,
): Promise<EntityResponse<NewsPhoto>> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/newsphoto?id=" + id)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

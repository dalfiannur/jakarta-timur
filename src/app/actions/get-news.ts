"use server";
import { EntityResponse } from "@/types/entity";
import { News } from "@/types/news";
import { PaginationRequest, PaginationResponse } from "@/types/pagination";

export const getNews = async ({
  page = "1",
  limit = "10",
}: PaginationRequest): Promise<PaginationResponse<News>> => {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", limit);

  const news = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/news?" + params.toString(),
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return news;
};

export const findNewsById = async (
  id: string,
): Promise<EntityResponse<News>> => {
  const news = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/news?id=" + id,
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return news;
};

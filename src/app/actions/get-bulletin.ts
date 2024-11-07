"use server";

import { EntityResponse } from "@/types/entity";
import { PaginationRequest, PaginationResponse } from "@/types/pagination";
import { Bulletin } from "@/types/bulletin";

export const getBulletins = async ({
  page = "1",
  limit = "10",
}: PaginationRequest): Promise<PaginationResponse<Bulletin>> => {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", limit);

  return fetch(
    "https://timur.jakarta.go.id/API_Timur/api/buletin?" + params.toString(),
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

export const findBulletinById = async (
  id: string,
): Promise<EntityResponse<Bulletin>> => {
  return fetch("https://timur.jakarta.go.id/API_Timur/api/buletin?id=" + id)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
    });
};

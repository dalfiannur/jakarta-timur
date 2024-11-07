"use server";

import { Activity } from "@/types/activity";
import { PaginationRequest, PaginationResponse } from "@/types/pagination";

export const getActivities = async ({
  page = "1",
  limit = "4",
}: PaginationRequest): Promise<PaginationResponse<Activity>> => {
  const params = new URLSearchParams();
  params.set("page", page);
  params.set("limit", limit);

  const news = await fetch(
    "https://timur.jakarta.go.id/API_Timur/api/agenda?" + params.toString(),
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return news;
};

const types: {
  [key: string]: number;
} = {
  Walikota: 0,
  "Wakil Walikota": 1,
  "Sekretaris WaliKota": 2,
};

export const getFormattedActivities = async (): Promise<
  (Activity & { type: number })[]
> => {
  const { data } = await getActivities({ limit: "4" });
  return data.data.map((d) => ({
    ...d,
    type: types[d.pelaksana],
  }));
};

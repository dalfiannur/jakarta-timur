import { createApi } from "@reduxjs/toolkit/query/react";
import { jakartaTimurBaseQuery } from "./_base";
import {
  PaginationRequest,
  PaginationResponse,
  PaginationResult,
} from "@/types/pagination";

export type Achievement = {
  id: number;
  judul: string;
  penerima: string;
  tahun: number;
  pemberi: string;
  deskripsi: string;
  created_at: string;
  updated_at: string;
};

export const achievementApi = createApi({
  reducerPath: "achievementApi",
  baseQuery: jakartaTimurBaseQuery,
  endpoints: (build) => ({
    getAchievements: build.query<
      PaginationResult<Achievement>,
      PaginationRequest & {
        search?: string;
        tahun?: string;
        sort?: string;
      }
    >({
      query: (params) => ({
        url: "/prestasi",
        params,
      }),
      transformResponse: (res: PaginationResponse<Achievement>) => res.data,
    }),
  }),
});

export const { useGetAchievementsQuery } = achievementApi;

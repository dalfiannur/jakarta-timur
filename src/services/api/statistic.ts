import { createApi } from "@reduxjs/toolkit/query/react";
import { jakartaTimurBaseQuery } from "./_base";
import {
  PaginationRequest,
  PaginationResponse,
  PaginationResult,
} from "@/types/pagination";

interface Statistic {
  id: number;
  name: string;
  link: string;
  image: string;
  created_at: string;
  updated_at: string;
  img_url: string;
}

export const statisticApi = createApi({
  reducerPath: "statisticApi",
  baseQuery: jakartaTimurBaseQuery,
  endpoints: (build) => ({
    getStatistics: build.query<PaginationResult<Statistic>, PaginationRequest>({
      query: (params) => ({
        url: "/statistik",
        params,
      }),
      transformResponse: (res: PaginationResponse<Statistic>) => res.data,
    }),
  }),
});

export const { useGetStatisticsQuery } = statisticApi;

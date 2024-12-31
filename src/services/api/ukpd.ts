import { createApi } from "@reduxjs/toolkit/query/react";
import { jakartaTimurBaseQuery } from "./_base";
import {
  PaginationRequest,
  PaginationResponse,
  PaginationResult,
} from "@/types/pagination";

export interface UKPD {
  id: number;
  nama: string;
  slug: string;
  pejabat: string;
  image: string;
  image_pejabat: string;
  deskripsi: string;
  map: string;
  layanan: string;
  kontak: string;
  kontak_detail: string;
  created_at: string;
  updated_at: string;
}

export const ukpdApi = createApi({
  reducerPath: "ukpdApi",
  baseQuery: jakartaTimurBaseQuery,
  endpoints: (build) => ({
    getUkpd: build.query<
      PaginationResult<UKPD>,
      PaginationRequest & { search?: string }
    >({
      query: (params) => ({
        url: "/ukpd",
        params,
      }),
      transformResponse: (res: PaginationResponse<UKPD>) => res.data,
    }),
  }),
});

export const { useGetUkpdQuery } = ukpdApi;

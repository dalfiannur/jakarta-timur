import { createApi } from "@reduxjs/toolkit/query/react";
import { jakartaTimurBaseQuery } from "./_base";
import { EntityResponse } from "@/types/entity";
import {
  PaginationRequest,
  PaginationResponse,
  PaginationResult,
} from "@/types/pagination";

export type Bulletin = {
  id: number;
  title: string;
  frame: string;
  slug: string;
  image: string;
  created_at: string;
  updated_at: string;
  img_url: string;
};

export const bulletinApi = createApi({
  reducerPath: "bulletinApi",
  baseQuery: jakartaTimurBaseQuery,
  endpoints: (build) => ({
    getBulletinById: build.query<Bulletin, string>({
      query: (id) => ({
        url: "/buletin",
        params: { id },
      }),
      transformResponse: (res: EntityResponse<Bulletin>) => res.data,
    }),
    getBulletins: build.query<PaginationResult<Bulletin>, PaginationRequest>({
      query: (params) => ({
        url: "/buletin",
        params,
      }),
      transformResponse: (res: PaginationResponse<Bulletin>) => res.data,
    }),
  }),
});

export const { useGetBulletinByIdQuery, useGetBulletinsQuery } = bulletinApi;

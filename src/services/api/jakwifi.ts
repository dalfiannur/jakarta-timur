import { createApi } from "@reduxjs/toolkit/query/react";
import { jakartaTimurBaseQuery } from "./_base";
import {
  PaginationRequest,
  PaginationResponse,
  PaginationResult,
} from "@/types/pagination";

export interface JakWifi {
  id: number;
  kecamatan: string;
  kelurahan: string;
  RW: string;
  Alamat: string;
  Latitude: string;
  Longitude: string;
}

type JakWifiRequest = {
  kecamatan?: string;
  kelurahan?: string;
  search?: string;
  rw?: string;
};

export const jakWifiApi = createApi({
  reducerPath: "jakWifiApi",
  baseQuery: jakartaTimurBaseQuery,
  endpoints: (build) => ({
    getJakWifi: build.query<
      PaginationResult<JakWifi>,
      PaginationRequest & JakWifiRequest
    >({
      query: (req) => {
        const params = {...req}
        if (params.kecamatan && params.kelurahan) {
          params.kecamatan = undefined;
        }
        return {
          url: "/jakwifi",
          params,
        };
      },
      transformResponse: (res: PaginationResponse<JakWifi>) => res.data,
    }),
  }),
});

export const { useGetJakWifiQuery } = jakWifiApi;

import { createApi } from "@reduxjs/toolkit/query/react";
import { jakartaTimurBaseQuery } from "./_base";
import {
  PaginationRequest,
  PaginationResponse,
  PaginationResult,
} from "@/types/pagination";
import { EntityResponse } from "@/types/entity";

export type GovEmployer = {
  id: number;
  slug?: string;
  nama: string;
  pejabat: string;
  jabatan?: string;
  image?: string;
  sejarah?: string;
};

export interface District {
  id: number;
  nama: string;
  slug: string;
  pejabat: string;
  jabatan: string;
  deskripsi: string;
  image: string;
  image_camat: string;
  map: string;
  potensi: string;
  kontak: string;
  kontak_detail: string;
  created_at: string;
  updated_at: string;
  sejarah: string;
  prestasi: string;
  maklumat: string;
  sop1: null;
  sop2: null;
  sop3: null;
  sop4: null;
  sop5: null;
  visimisi: null;
  struktur: null;
  tugasdanfungsi: string;
  lmk: string;
  strukturorganisasi: string;
  layanankesehatan: string;
  layananpendidikan: string;
  transportasi: string;
  ptsp: string;
  kalendar: string;
  informasikeuangan: string;
  pengumumanpengadaan: string;
  embedigprofile: string;
  kontakwapelayanan: string;
  peta_wilayah: string;
  timelapse: string;
  pejabat_profil: string;
  alurpengajuan: null;
  tugasdanfungsippid: string;
  timelapse_kelurahan: string;
  sm_facebook: null;
  sm_x: null;
  sm_linkedin: null;
  sm_youtube: null;
  sm_ig: null;
  sm_tiktok: null;
  videoprofile: null;
}

export const areaApi = createApi({
  reducerPath: "areaApi",
  baseQuery: jakartaTimurBaseQuery,
  endpoints: (build) => ({
    getArea: build.query<
      PaginationResult<GovEmployer>,
      PaginationRequest & {
        nama?: string;
        area: string;
        filters?: { by: string; value: string }[];
      }
    >({
      query: ({ area, filters = [], ...rest }) => {
        const filterObj: { [key: string]: string } = {};

        filters.forEach((d) => {
          filterObj[d.by] = d.value;
        });

        return {
          url: `/${area}`,
          params: {
            ...filterObj,
            ...rest,
          },
        };
      },
      transformResponse: (res: PaginationResponse<GovEmployer>) => res.data,
    }),
    getAreaById: build.query<GovEmployer, { id: string; area: string }>({
      query: ({ area, id }) => ({
        url: `/${area}`,
        params: { id },
      }),
      transformResponse: (res: EntityResponse<GovEmployer>) => res.data,
    }),
    getAreaBySlug: build.query<GovEmployer, { slug: string; area: string }>({
      query: ({ area, slug }) => ({
        url: `/${area}`,
        params: { slug },
      }),
      transformResponse: (res: EntityResponse<GovEmployer>) => res.data,
    }),
    getDistrictBySlug: build.query<District, string>({
      query: (slug) => ({
        url: `/kecamatan`,
        params: { slug },
      }),
      transformResponse: (res: EntityResponse<District>) => res.data,
    }),
    getSubDistrictBySlug: build.query<District, string>({
      query: (slug) => ({
        url: `/kelurahan`,
        params: { slug },
      }),
      transformResponse: (res: EntityResponse<District>) => res.data,
    }),
  }),
});

export const {
  useGetAreaQuery,
  useGetAreaByIdQuery,
  useGetAreaBySlugQuery,
  useGetDistrictBySlugQuery,
  useGetSubDistrictBySlugQuery,
} = areaApi;

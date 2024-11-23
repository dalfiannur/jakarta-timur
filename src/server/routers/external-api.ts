import { z } from "zod";
import { procedure, router } from "../trpc";
import { Activity } from "@/types/activity";
import { PaginationResponse } from "@/types/pagination";
import { Bulletin } from "@/types/bulletin";
import { EntityResponse } from "@/types/entity";
import { News } from "@/types/news";
import { NewsPhoto } from "@/types/news-photo";
import { Video } from "@/types/video";
import { District } from "@/types/district";
import { Achievement } from "@/types/achievement";
import { HealthCare } from "@/types/health-care";
import { School } from "@/types/school";
import { Provost } from "@/types/provost";
import { GovEmployer } from "@/types/gov-employer";

const BASE_URL_API = "https://timur.jakarta.go.id/API_Timur/api";

const fetchApi = async <TResponse>(
  pathname: string,
  params: { [key: string]: string | number | undefined }
) => {
  const p = new URLSearchParams();
  Object.keys(params).map((key) => {
    const value = params[key];
    if (typeof value === "string") {
      p.set(key, value);
    } else if (typeof value === "number") {
      p.set(key, value.toString());
    }
  });
  const stringifyParams = p.toString();

  const data: TResponse = await fetch(
    `${BASE_URL_API}${pathname}?${stringifyParams}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return data;
};

const paginationRequest = {
  page: z
    .number()
    .default(1)
    .transform((page) => page.toString()),
  limit: z
    .number()
    .default(4)
    .transform((limit) => limit.toString()),
};

export const externalApi = router({
  agenda: procedure
    .input(z.object(paginationRequest))
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<Activity>>(
        "/agenda",
        input
      );

      return data;
    }),

  buletin: procedure
    .input(z.object(paginationRequest))
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<Bulletin>>(
        "/buletin",
        input
      );

      return data;
    }),

  findBulletinById: procedure.input(z.string()).query(async ({ input }) => {
    const { data } = await fetchApi<EntityResponse<Bulletin>>("/buletin", {
      id: input,
    });

    return data;
  }),

  news: procedure
    .input(z.object(paginationRequest))
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<News>>("/news", input);
      return data;
    }),

  findNewsById: procedure.input(z.string()).query(async ({ input }) => {
    const { data } = await fetchApi<EntityResponse<News>>("/newsphoto", {
      id: input,
    });
    return data;
  }),

  galleries: procedure
    .input(z.object(paginationRequest))
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<NewsPhoto>>(
        "/newsphoto",
        input
      );

      return data;
    }),

  findGalleryById: procedure.input(z.string()).query(async ({ input }) => {
    const { data } = await fetchApi<PaginationResponse<NewsPhoto>>(
      "/newsphoto",
      { id: input }
    );

    return data;
  }),

  videos: procedure
    .input(z.object(paginationRequest))
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<Video>>(
        "/video",
        input
      );
      return data;
    }),

  findVideoById: procedure.input(z.string()).query(async ({ input }) => {
    const { data } = await fetchApi<EntityResponse<Video>>("/video", {
      id: input,
    });
    return data;
  }),

  getDistricts: procedure.query(async () => {
    const { data } = await fetchApi<PaginationResponse<District>>(
      "/kecamatan",
      {}
    );
    return data;
  }),

  getSubDistricts: procedure
    .input(
      z.object({
        districtSlug: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<District>>(
        "/kelurahan",
        {
          slug: input.districtSlug,
        }
      );
      return data;
    }),

  getAchievements: procedure
    .input(
      z.object({
        search: z.string().optional(),
        year: z.string().optional(),
        sort: z.string().optional().default("desc"),
      })
    )
    .query(async ({ input }) => {
      console.log({ input });
      const { data } = await fetchApi<PaginationResponse<Achievement>>(
        "/prestasi",
        {
          search: input.search,
          tahun: input.year,
          sort: input.sort,
        }
      );
      return data;
    }),

  getHealthCares: procedure.query(async () => {
    const { data } = await fetchApi<PaginationResponse<HealthCare>>(
      "/kesehatan",
      {}
    );
    return data;
  }),

  getSchools: procedure.query(async () => {
    const { data } = await fetchApi<PaginationResponse<School>>("/sekolah", {});
    return data;
  }),

  getProvost: procedure.query(async () => {
    const { data } = await fetchApi<{ data: Provost[] }>("/walikota", {});
    return data.sort((a, b) => (a.id < b.id ? -1 : 1));
  }),

  getGovSecretariatEmployers: procedure.query(async () => {
    const { data } = await fetchApi<PaginationResponse<GovEmployer>>(
      "/perangkatkota",
      {}
    );
    return data;
  }),

  getGovCityEmployers: procedure.query(async () => {
    const { data } = await fetchApi<PaginationResponse<GovEmployer>>(
      "/bagiankota",
      {}
    );
    return data;
  }),

  getGovAreaEmployers: procedure
    .input(
      z.object({
        search: z.string().optional(),
        area: z.string(),
        limit: z.number().optional().default(9),
        filters: z
          .array(z.object({ by: z.string(), value: z.string() }))
          .default([]),
      })
    )
    .query(async ({ input }) => {
      const filters: { [key: string]: string } = {};

      input.filters.forEach((d) => {
        filters[d.by] = d.value;
      });

      const { data } = await fetchApi<PaginationResponse<GovEmployer>>(
        "/" + input.area,
        {
          nama: input.search,
          limit: input.limit,
          ...filters,
        }
      );
      return data;
    }),

  getGovSubDistrictEmployers: procedure
    .input(z.object({ limit: z.number().optional().default(9) }))
    .query(async ({ input }) => {
      const { data } = await fetchApi<PaginationResponse<GovEmployer>>(
        "/kelurahan",
        {
          limit: input.limit,
        }
      );
      return data;
    }),
});

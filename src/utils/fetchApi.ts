import { ApiConfig } from "@/configs/api";

export const fetchApi = (path: string) => {
  return fetch(ApiConfig.baseURL + path);
};

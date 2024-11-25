import { deepMap } from "nanostores";

type Store = {
  search: string;
  page: number;
  kecamatan_id?: string;
};

export const store$ = deepMap<Store>({
  search: "",
  page: 1,
});

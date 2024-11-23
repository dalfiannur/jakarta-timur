import { deepMap } from "nanostores";

type Store = {
  search: string;
  kecamatan_slug?: string;
};

export const store$ = deepMap<Store>({
  search: "",
});

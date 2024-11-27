import { deepMap } from "nanostores";

type Store = {
  search: string;
  map?: {
    longitude: number;
    latitude: number;
  };
};

export const store$ = deepMap<Store>({
  search: "",
});

import { deepMap } from "nanostores";

type Store = {
  search: string;
};

export const store$ = deepMap<Store>({
  search: "",
});

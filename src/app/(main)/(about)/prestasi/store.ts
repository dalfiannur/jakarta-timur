import { deepMap } from "nanostores";

type Store = {
  filter: {
    search: string | undefined;
    year: string | undefined;
    sort: string | undefined;
  };
  view: "grid" | "list";
};

export const store$ = deepMap<Store>({
  view: "grid",
  filter: {
    search: undefined,
    year: undefined,
    sort: undefined,
  },
});

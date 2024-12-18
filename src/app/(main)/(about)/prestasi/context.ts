import { createContext } from "react";

type View = "grid" | "list";

type IContext = {
  view: View;
  setView: (value: View) => void;

  search: string;
  setSearch: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;

  year?: string;
  setYear: (value: string | undefined) => void;
};

export const Context = createContext<IContext>({
  view: "grid",
  setView() {},

  search: "",
  setSearch() {},

  sort: "desc",
  setSort() {},

  setYear() {},
});

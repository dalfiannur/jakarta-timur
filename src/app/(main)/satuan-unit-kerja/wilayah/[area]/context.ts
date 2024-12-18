import { createContext } from "react";

type IContext = {
  search: string;
  kecamatanId?: string;
  setSearch: (value: string) => void;
  setKecamatanId: (value: string | undefined) => void;
};

export const Context = createContext<IContext>({
  search: "",
  setSearch() {},
  setKecamatanId() {},
});

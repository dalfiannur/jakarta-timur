import { ReactNode, useState } from "react";
import { Context } from "./context";

export const Provider = ({ children }: { children?: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("desc");
  const [year, setYear] = useState<string | undefined>();
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <Context.Provider
      value={{ search, setSearch, sort, setSort, year, setYear, view, setView }}
    >
      {children}
    </Context.Provider>
  );
};

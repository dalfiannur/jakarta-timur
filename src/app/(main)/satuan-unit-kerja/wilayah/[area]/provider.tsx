import { ReactNode, useState } from "react";
import { Context } from "./context";

export const Provider = ({ children }: { children?: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [kecamatanId, setKecamatanId] = useState<string | undefined>();

  return (
    <Context.Provider
      value={{ search, kecamatanId, setKecamatanId, setSearch }}
    >
      {children}
    </Context.Provider>
  );
};

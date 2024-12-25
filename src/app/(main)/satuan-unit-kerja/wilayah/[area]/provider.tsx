import { ReactNode, useState } from "react";
import { Context } from "./context";

export const Provider = ({ children }: { children?: ReactNode }) => {
  const [nama, setNama] = useState("");
  const [kecamatanId, setKecamatanId] = useState<string | undefined>();

  return (
    <Context.Provider value={{ nama, kecamatanId, setKecamatanId, setNama }}>
      {children}
    </Context.Provider>
  );
};

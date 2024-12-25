import { createContext } from "react";

type IContext = {
  nama: string;
  kecamatanId?: string;
  setNama: (value: string) => void;
  setKecamatanId: (value: string | undefined) => void;
};

export const Context = createContext<IContext>({
  nama: "",
  setNama() {},
  setKecamatanId() {},
});

import { createContext } from "react";

type IContext = {
  kecamatanId?: string;
  setKecamatanId: (value: string | undefined) => void;
};

export const Context = createContext<IContext>({
  setKecamatanId() {},
});

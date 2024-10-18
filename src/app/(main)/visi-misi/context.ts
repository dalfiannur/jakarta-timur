import { createContext } from "react";

export type SelectedTabKey =
  | "visi-misi"
  | "peta"
  | "demografi"
  | "prestasi"
  | "";

interface IContext {
  selectedTab: SelectedTabKey;
  setSelectedTab: (tab: string) => void;
}

export const Context = createContext<IContext>({
  selectedTab: "",
  setSelectedTab: () => null,
});

import { createContext } from "react";

interface IContext {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export const Context = createContext<IContext>({
  selectedTab: "",
  setSelectedTab: () => null,
});

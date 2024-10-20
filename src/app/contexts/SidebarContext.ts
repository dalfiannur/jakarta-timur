import { createContext } from "react";

interface IContext {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

export const SidebarContext = createContext<IContext>({
  selectedTab: "",
  setSelectedTab: () => null,
});

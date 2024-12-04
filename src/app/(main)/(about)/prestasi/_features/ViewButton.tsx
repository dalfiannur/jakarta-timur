"use client";
import * as store from "../store";
import { Button } from "../_components/Button";
import { useAtom } from "jotai";

export const ViewButton = () => {
  const [view, setView] = useAtom(store.view);
  return (
    <div className="flex gap-4">
      <Button
        icon="Menu"
        active={view === "grid" || view === null ? true : undefined}
        onClick={() => setView("grid")}
      />
      <Button
        icon="LayoutList"
        active={view === "list"}
        onClick={() => setView("list")}
      />
    </div>
  );
};

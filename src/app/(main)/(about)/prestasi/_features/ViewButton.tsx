"use client";
import { Button } from "../_components/Button";
import { useContext } from "react";
import { Context } from "../context";

export const ViewButton = () => {
  const { setView, view } = useContext(Context);
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

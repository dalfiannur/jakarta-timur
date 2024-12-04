"use client";
import { view } from "../store";
import { Button } from "../_components/Button";

export const ViewButton = () => {
  return (
    <div className="flex gap-4">
      <Button
        icon="Menu"
        active={view.value === "grid" || view.value === null ? true : undefined}
        onClick={() => (view.value = "grid")}
      />
      <Button
        icon="LayoutList"
        active={view.value === "list"}
        onClick={() => (view.value = "list")}
      />
    </div>
  );
};

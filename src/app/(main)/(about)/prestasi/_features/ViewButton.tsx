"use client";
import { useStore } from "@nanostores/react";
import { store$ } from "../store";
import { Button } from "../_components/Button";

export const ViewButton = () => {
  const store = useStore(store$);

  return (
    <div className="flex gap-4">
      <Button
        icon="Menu"
        active={store.view === "grid" || store.view === null ? true : undefined}
        onClick={() => store$.setKey("view", "grid")}
      />
      <Button
        icon="LayoutList"
        active={store.view === "list"}
        onClick={() => store$.setKey("view", "list")}
      />
    </div>
  );
};

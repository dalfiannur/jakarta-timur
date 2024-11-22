"use client";
import { Icon, IconKeys } from "@/app/icons";

export const ViewButton = ({
  view,
  onChange,
}: {
  view: "grid" | "list";
  onChange: (value: "grid" | "list") => void;
}) => {
  return (
    <div className="flex gap-4">
      <Button
        icon="Menu"
        active={view === "grid" || view === null ? true : undefined}
        onClick={() => onChange("grid")}
      />
      <Button
        icon="LayoutList"
        active={view === "list"}
        onClick={() => onChange("list")}
      />
    </div>
  );
};

const Button = ({
  active,
  icon,
  onClick,
}: {
  active?: boolean;
  icon: IconKeys;
  onClick?: () => void;
}) => {
  return (
    <button
      data-active={active}
      className="data-[active=true]:text-blue-500"
      onClick={onClick}
    >
      <Icon name={icon} className="w-6 h-6" />
    </button>
  );
};

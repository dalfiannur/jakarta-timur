"use client";
import { Icon, IconKeys } from "@/app/icons";
import { useRouter, useSearchParams } from "next/navigation";

export const ViewButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const view = searchParams.get("view");

  const onClick = (value: string) => {
    const sp = new URLSearchParams(searchParams);
    sp.set("view", value);
    router.push("?" + sp.toString(), {
      scroll: false,
    });
  };

  return (
    <div className="flex gap-4">
      <Button
        icon="Menu"
        active={view === "grid" || view === null ? true : undefined}
        onClick={() => onClick("grid")}
      />
      <Button
        icon="LayoutList"
        active={view === "list"}
        onClick={() => onClick("list")}
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
      <Icon name={icon} size={24} />
    </button>
  );
};

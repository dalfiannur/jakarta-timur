import { Icon, IconKeys } from "@/app/icons";

export const Button = ({
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

export const TabItem = ({
  active,
  label,
  onClick,
}: {
  active?: boolean;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      data-active={active}
      onClick={onClick}
      className="whitespace-nowrap border-b-2 border-transparent text-sm font-normal data-[active=true]:border-pink-500 data-[active=true]:font-semibold data-[active=true]:text-pink-500 lg:text-xl"
    >
      {label}
    </button>
  );
};

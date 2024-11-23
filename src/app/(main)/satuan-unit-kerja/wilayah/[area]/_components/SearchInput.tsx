import { Icon } from "@/app/icons";

export const SearchInput = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  return (
    <div className="flex overflow-hidden border rounded-xl focus-within:border-pink-500/40">
      <div className="p-4 text-gray-500">
        <Icon name="Search" className="w-6 h-6" />
      </div>
      <input
        className="flex-1 py-4 focus:outline-none"
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};

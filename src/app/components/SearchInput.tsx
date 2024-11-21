"use client";
import { Icon } from "../icons";

export const SearchInput = ({
  onChange,
}: {
  onChange?: (value: string) => void;
}) => {
  return (
    <div className="group relative border rounded-xl overflow-hidden flex items-center focus-within:border-pink-500">
      <div className="absolute left-2 group-focus-within:text-pink-500">
        <Icon name="Search" size={24} />
      </div>
      <input
        placeholder="Pencarian..."
        className="peer pl-10 pr-4 py-2 focus:outline-none"
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

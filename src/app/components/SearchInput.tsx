"use client";
import { Icon } from "../icons";

export const SearchInput = ({
  onChange,
  classNames,
}: {
  onChange?: (value: string) => void;
  classNames?: {
    root?: string;
    icon?: string;
    input?: string;
  };
}) => {
  return (
    <div
      className={`group relative border rounded-xl overflow-hidden flex items-center focus-within:border-pink-500 ${classNames?.root}`}
    >
      <Icon
        name="Search"
        className={`w-6 h-6 absolute left-2 group-focus-within:text-pink-500 ${classNames?.icon}`}
      />

      <input
        placeholder="Pencarian..."
        className={`peer pl-10 pr-4 py-2 focus:outline-none ${classNames?.input}`}
        onChange={(e) => onChange?.(e.currentTarget.value)}
      />
    </div>
  );
};

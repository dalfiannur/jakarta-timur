"use client";
import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { Icon } from "@/app/icons";

export const SearchInput = ({
  onChange,
}: {
  onChange: (value: string) => void;
}) => {
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      onChange(value);
    },
  });
  return (
    <div className="flex items-center overflow-hidden rounded-xl border focus-within:border-pink-500/40">
      <Icon name="Search" className="m-4 h-6 w-6 text-gray-500" />

      <input
        className="flex-1 py-4 focus:outline-none"
        onChange={(e) => set(e.currentTarget.value)}
      />
    </div>
  );
};
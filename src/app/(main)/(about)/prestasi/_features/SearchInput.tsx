import { useDebounceEvent } from "@/app/hooks/useDebounceEvent";
import { Icon } from "@/app/icons";
import { store$ } from "../store";

export const SearchInput = () => {
  const set = useDebounceEvent<string>({
    timer: 1000,
    onChange: (value) => {
      store$.setKey("filter.search", value);
    },
  });

  return (
    <div className="border rounded-xl overflow-hidden flex pl-4 items-center focus-within:border-pink-400">
      <Icon name="Search" className="w-6 h-6" />
      <input
        className="py-4 px-6 flex-1 focus:outline-none"
        placeholder="Cari Nama Dokumen"
        onChange={(e) => set(e.currentTarget.value)}
      />
    </div>
  );
};

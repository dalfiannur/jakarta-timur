import { Icon } from "@/app/icons";

export const SearchInput = () => {
  return (
    <div className="border rounded-xl overflow-hidden flex pl-4 items-center focus-within:border-pink-400">
      <Icon name="Search" className="w-6 h-6" />
      <input
        className="py-4 px-6 flex-1 focus:outline-none"
        placeholder="Cari Nama Dokumen"
      />
    </div>
  );
};

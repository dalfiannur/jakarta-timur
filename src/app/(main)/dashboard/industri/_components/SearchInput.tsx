import { Icon } from "@/app/icons";

export const SearchInput = ({ placeholder }: { placeholder?: string }) => {
  return (
    <div className="border rounded-lg flex focus-within:border-orange-200">
      <div className="py-4 pl-4 pr-3 text-gray-400 peer-focus:text-gray-500">
        <Icon name="Search" size={24} />
      </div>
      <input
        placeholder={placeholder}
        className="peer py-4 pr-4 focus:outline-none font-semibold font-plus-jakarta-sans"
      />
    </div>
  );
};

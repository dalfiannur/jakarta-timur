import Link from "next/link";

export const Tags = ({ data }: { data: { label: string }[] }) => {
  return (
    <div className="font-plus-jakarta-sans">
      <h6 className="text-base font-bold lg:text-xl">Tags</h6>
      <ul className="mt-2 flex flex-row flex-wrap gap-x-2 gap-y-4 lg:gap-4">
        {data.map((item, index) => (
          <li key={index}>
            <Link
              href={"#"}
              className="whitespace-nowrap rounded-full bg-pink-500/10 px-4 py-2 text-xs font-semibold text-pink-500 lg:text-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

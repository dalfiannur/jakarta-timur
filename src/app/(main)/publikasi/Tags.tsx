import Link from "next/link";

export const Tags = ({ data }: { data: { label: string }[] }) => {
  return (
    <div className="font-plus-jakarta-sans">
      <h6 className="font-bold text-xl">Tags</h6>
      <div className="mt-2 flex gap-4">
        {data.map((item, index) => (
          <Link
            key={index}
            href={"#"}
            className="bg-pink-500/10 text-pink-500 rounded-full px-4 py-2 text-sm font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

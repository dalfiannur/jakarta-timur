import Link from "next/link";

interface BreadcrumbsProps {
  data: any[];
}

export const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
  const items = data.join("~").split("");

  return (
    <div className="flex">
      {items.map((item, index) => (
        <Link
          key={index}
          href="/"
          className="text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          Home
        </Link>
      ))}
    </div>
  );
};

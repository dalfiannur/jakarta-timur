import { Icon } from "../icons";
import { BreadcrumbItem } from "./BreadcrumbItem";

interface BreadcrumbsProps {
  data: {
    label: string;
    link?: string;
  }[];
}

export const Breadcrumbs = ({ data }: BreadcrumbsProps) => {
  return (
    <div className="flex gap-2">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index !== 0 && (
            <div className="text-gray-500">
              <Icon name="ChevronRight" size={16} />
            </div>
          )}
          <BreadcrumbItem
            active={index === 0}
            label={item.label}
            href={item.link ?? "/#"}
          />
        </div>
      ))}
    </div>
  );
};

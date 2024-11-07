import { Bulletin } from "@/types/bulletin";
import Image from "next/image";

type BulletinWidgetProps = {
  data?: Bulletin[];
};

export const BulletinWidget = ({ data = [] }: BulletinWidgetProps) => {
  return (
    <div>
      <h3 className="font-semibold text-2xl font-plus-jakarta-sans">
        Buletin Info Jaktim
      </h3>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="relative aspect-square w-full">
              <Image
                src={item.img_url}
                alt={item.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h4 className="font-semibold text-sm font-plus-jakarta-sans">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

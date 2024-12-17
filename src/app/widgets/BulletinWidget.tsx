"use client";
import { trpc } from "@/utils/trpc";
import Image from "next/image";

export const BulletinWidget = () => {
  const res = trpc.externalApi.buletin.useQuery({
    page: 1,
    limit: 4,
  });
  const data = res.data?.data ?? [];

  return (
    <div>
      <h3 className="font-plus-jakarta-sans text-lg font-semibold lg:text-2xl">
        Buletin Info Jaktim
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-8 lg:mt-10">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 lg:gap-4">
            <div className="relative aspect-square w-full">
              <Image
                src={item.img_url}
                alt={item.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <h4 className="font-plus-jakarta-sans text-xs font-semibold lg:text-sm">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

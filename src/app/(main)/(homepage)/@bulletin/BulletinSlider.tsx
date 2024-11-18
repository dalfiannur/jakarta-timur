"use client";
import { trpc } from "@/utils/trpc";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useObservable } from "@legendapp/state/react";

export const BulletinSlider = () => {
  const step$ = useObservable(0);

  const { data } = trpc.externalApi.buletin.useQuery({
    limit: 12,
  });

  if (!data) return null;

  const indicators = Array.from(
    new Array(Math.ceil(data.data.length / 4)).keys(),
  );

  return (
    <div className="overflow-hidden -mr-6">
      <motion.div
        initial={{ display: "flex", gap: 24 }}
        animate={{ x: step$.get() * 100 + "%" }}
      >
        {data.data.map((item, index) => (
          <Link
            key={index}
            href={`/publikasi/buletin/${item.id}`}
            className="flex-[0_0_calc(25%-24px)] max-w-[calc(25%-24px)]"
          >
            <div className="h-[500px] relative">
              <Image
                src={item.img_url}
                alt={item.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h6 className="mt-6 font-semibold font-plus-jakarta-sans">
              {item.title}
            </h6>
          </Link>
        ))}
      </motion.div>
      <div className="mt-10 flex justify-center gap-2">
        {indicators.map((_, key) => (
          <button
            key={key}
            onClick={() => step$.set(-key)}
            data-active={step$.get() === -key}
            className="rounded-full w-2 h-2 bg-gray-400 data-[active=true]:w-8 data-[active=true]:bg-orange-500 transition-all duration-500"
          />
        ))}
      </div>
    </div>
  );
};

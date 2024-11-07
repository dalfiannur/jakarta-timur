"use client";
import { Bulletin } from "@/types/bulletin";
import { PaginationResponse } from "@/types/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { use, useMemo, useState } from "react";

type BulletinSliderProps = {
  getData: Promise<PaginationResponse<Bulletin>>;
};

export const BulletinSlider = ({ getData }: BulletinSliderProps) => {
  const { data } = use(getData);

  const [step, setStep] = useState(0);
  const x = useMemo(() => {
    const offset = step * 100;
    return offset + "%";
  }, [step]);

  const indicators = Array.from(
    new Array(Math.ceil(data.data.length / 4)).keys(),
  );

  return (
    <div className="overflow-hidden -mr-6">
      <motion.div initial={{ display: "flex", gap: 24 }} animate={{ x }}>
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
            onClick={() => setStep(-key)}
            data-active={step === -key}
            className="rounded-full w-2 h-2 bg-gray-400 data-[active=true]:w-8 data-[active=true]:bg-orange-500 transition-all duration-500"
          />
        ))}
      </div>
    </div>
  );
};

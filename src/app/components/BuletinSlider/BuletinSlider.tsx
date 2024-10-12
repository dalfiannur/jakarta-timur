"use client";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const BuletinSlider = () => {
  const [step, setStep] = useState(0);
  const x = useMemo(() => {
    const offset = step * 100;
    return offset + "%";
  }, [step]);

  const indicators = Array.from(new Array(Math.ceil(items.length / 4)).keys());

  return (
    <div className="overflow-hidden -mr-6">
      <motion.div className="flex gap-6" animate={{ x }}>
        {items.map((item, index) => (
          <a
            href="#"
            key={index}
            className="flex-[0_0_calc(25%-24px)] max-w-[calc(25%-24px)]"
          >
            <div className="bg-red-500 border rounded-xl h-[500px]"></div>
            <h6 className="mt-6 font-semibold">
              Buletin Info Jaktim Edisi ke-1
            </h6>
          </a>
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

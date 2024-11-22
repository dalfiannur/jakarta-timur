"use client";
import { ReactNode, useMemo, useState } from "react";
import { Icon } from "../icons";
import { tv } from "tailwind-variants";
import { motion } from "motion/react";
import Image from "next/image";

interface EventProps {
  items: {
    image: string;
  }[];
}

export const Event = ({ items }: EventProps) => {
  const min = -(items.length - 1);
  const [step, setStep] = useState(0);
  const x = useMemo(
    () => (step === 0 ? 0 : step * 390 + (30 * step + 60)),
    [step]
  );

  return (
    <div className="w-full md:max-w-[512px]">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-xl md:text-2xl">Acara Jakarta Timur</h4>
        <div className="flex gap-4">
          <EventButton
            onClick={() => setStep((prev) => (prev < 0 ? prev + 1 : 0))}
          >
            <Icon name="ChevronLeft" className="w-4 h-4" />
          </EventButton>
          <EventButton
            onClick={() => setStep((prev) => (prev > min + 1 ? prev - 1 : min))}
          >
            <Icon name="ChevronRight" className="w-4 h-4" />
          </EventButton>
        </div>
      </div>
      <div className="mt-6 flex overflow-hidden">
        <motion.div
          animate={{
            x,
            transition: { type: "spring", duration: 1, bounce: 0.4 },
          }}
          style={{
            display: "flex",
            gap: 30,
          }}
        >
          {items.map((item, index) => (
            <EventSlideItem key={index} src={item.image} />
          ))}
        </motion.div>
      </div>
      <a
        href="#"
        className="mt-8 py-4 px-6 w-full rounded-[32px] inline-flex items-center justify-between bg-[url('/img/informasi-pemerintah-link-bg.png')] bg-no-repeat bg-cover"
      >
        <Image
          src="/img/informasi-pemerintah-link.png"
          alt="Informasi Pemerintah Link"
          width={52}
          height={52}
        />
        <div className="text-2xl text-white font-semibold">
          Informasi Pemerintah
        </div>
        <div className="text-white">
          <Icon name="ChevronRight" className="w-6 h-6" />
        </div>
      </a>
    </div>
  );
};

const EventSlideItem = ({ src }: { src: string }) => {
  return (
    <div className="relative shrink-0 w-[390px] h-[396px] bg-red-500 rounded-xl overflow-hidden">
      <Image src={src} alt={src} fill />
    </div>
  );
};

const EventButtonStyles = tv({
  base: ["rounded-full text-white flex justify-center items-center w-7 h-7"],
  variants: {
    disabled: {
      true: "bg-pink-500/20",
      false: "bg-pink-500",
    },
  },
});

const EventButton = ({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const x = EventButtonStyles({ disabled });
  return (
    <button onClick={onClick} className={x}>
      {children}
    </button>
  );
};

"use client";
import { Icon } from "@/app/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { tv } from "tailwind-variants";

const createStyles = tv({
  slots: {
    root: "border rounded-2xl p-6 flex text-left",
    icon: "bg-blue-400/20 w-14 h-14 rounded-xl flex justify-center items-center",
    title: "font-semibold text-lg transition-all duration-700 overflow-hidden",
    year: "text-gray-500",
  },
  variants: {
    hovered: {
      true: {},
      false: {
        title: "line-clamp-2",
      },
    },
    view: {
      grid: {
        root: "flex-col gap-4 h-[240px]",
      },
      list: {
        root: "flex-row gap-6",
      },
    },
  },
});

export const PrestasiItem = ({ view }: { view: "grid" | "list" }) => {
  const [hovered, setHovered] = useState(false);
  const x = createStyles({ hovered, view });

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={x.root()}
    >
      <motion.div
        className={x.icon()}
        animate={{
          opacity: view === "grid" && hovered ? 0 : 1,
          height: view === "grid" && hovered ? 0 : 56,
          transition: { duration: 0.5 },
        }}
      >
        <Icon name="MageTrophyColored" size={40} />
      </motion.div>
      <div>
        <div className={x.year()}>Tahun 2022</div>
        <motion.h4
          className={x.title()}
          animate={{
            maxHeight: hovered ? 300 : 60,
            transition: { duration: 0.1 },
          }}
        >
          Rekor Gerakan Pilah Sampah dari Rumah dengan Peserta Terbanyak
          se-Indonesia dalam Rangka World Cleanup Day
        </motion.h4>
        <p className="mt-2 text-gray-500">Original Rekor Indonesia Award</p>
      </div>
    </motion.button>
  );
};

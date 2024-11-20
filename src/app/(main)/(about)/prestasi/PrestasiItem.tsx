"use client";
import { Icon } from "@/app/icons";
import { motion } from "motion/react";
import { useState } from "react";

export const PrestasiItem = ({ view }: { view: "grid" | "list" }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderWidth: 1,
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: view === 'grid' ? 'column' : 'row',
        gap: view === 'grid' ? 12 : 16,
        height: view === 'grid' ? 240 : 'auto',
        textAlign: "left",
      }}
    >
      <motion.div
        style={{
          backgroundColor: "rgb(96 165 250 / 0.2)",
          width: 56,
          height: 56,
          borderRadius: 12,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        animate={{
          opacity: view === "grid" && hovered ? 0 : 1,
          height: view === "grid" && hovered ? 0 : 56,
          transition: { duration: 0.5 },
        }}
      >
        <Icon name="MageTrophyColored" size={40} />
      </motion.div>
      <div>
        <div className="text-gray-500">Tahun 2022</div>
        <motion.h4
          style={{
            fontWeight: "600",
            fontSize: 18,
            lineHeight: '28px',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2 
          }}
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

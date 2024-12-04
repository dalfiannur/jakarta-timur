"use client";
import { Icon } from "@/app/icons";
import { Achievement } from "@/types/achievement";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export const PrestasiItem = ({
  view,
  item,
}: {
  view: "grid" | "list";
  item: Achievement;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatePresence>
      <motion.button
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div
          data-view={view}
          className="group overflow-hidden rounded-2xl border p-4 text-left data-[view=grid]:block data-[view=list]:flex data-[view=grid]:aspect-square data-[view=list]:flex-row data-[view=grid]:flex-col data-[view=grid]:gap-3 data-[view=list]:gap-4 lg:p-6 lg:data-[view=grid]:aspect-auto"
        >
          <motion.div
            animate={{
              opacity: view === "grid" && hovered ? 0 : 1,
              height: view === "grid" && hovered ? 0 : "auto",
              transition: { duration: 0.5 },
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-200 lg:h-14 lg:w-14">
              <Icon name="MageTrophyColored" />
            </div>
          </motion.div>

          <div className="mt-2 lg:mt-2">
            <div className="text-xs text-gray-500 lg:text-base">
              Tahun {item.tahun}
            </div>

            <motion.div
              animate={{
                maxHeight: hovered ? 300 : 60,
                transition: { duration: 0.1 },
              }}
            >
              <h4 className="line-clamp-2 overflow-hidden text-sm font-semibold group-hover:line-clamp-5 lg:text-lg">
                {item.judul}
              </h4>
            </motion.div>
            <p className="mt-2 line-clamp-1 text-xs text-gray-500 group-hover:line-clamp-5 lg:text-base">
              {item.pemberi}
            </p>
          </div>
        </div>
      </motion.button>
    </AnimatePresence>
  );
};

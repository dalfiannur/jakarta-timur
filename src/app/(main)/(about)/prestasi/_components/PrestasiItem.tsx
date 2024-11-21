"use client";
import { Icon } from "@/app/icons";
import { Achievement } from "@/types/achievement";
import { useObservable, reactiveComponents } from "@legendapp/state/react";
import { AnimatePresence, motion } from "motion/react";

const Motion = reactiveComponents(motion);

export const PrestasiItem = ({
  view,
  item,
}: {
  view: "grid" | "list";
  item: Achievement;
}) => {
  const hovered$ = useObservable(false);

  return (
    <AnimatePresence>
      <motion.button
        onHoverStart={() => hovered$.set(true)}
        onHoverEnd={() => hovered$.set(false)}
      >
        <div
          data-view={view}
          className="group border rounded-2xl text-left p-4 lg:p-6 data-[view=grid]:block data-[view=list]:flex data-[view=grid]:flex-col data-[view=list]:flex-row data-[view=grid]:gap-3 data-[view=list]:gap-4 data-[view=grid]:aspect-square lg:data-[view=grid]:aspect-auto overflow-hidden"
        >
          <Motion.div
            $animate={() => ({
              opacity: view === "grid" && hovered$.get() ? 0 : 1,
              height: view === "grid" && hovered$.get() ? 0 : "auto",
              transition: { duration: 0.5 },
            })}
          >
            <div className="bg-blue-200 w-10 lg:w-14 h-10 lg:h-14 flex justify-center items-center rounded-2xl">
              <Icon name="MageTrophyColored" />
            </div>
          </Motion.div>

          <div className="mt-2 lg:mt-2">
            <div className="text-gray-500 text-xs lg:text-base">
              Tahun {item.tahun}
            </div>

            <Motion.div
              $animate={() => ({
                maxHeight: hovered$.get() ? 300 : 60,
                transition: { duration: 0.1 },
              })}
            >
              <h4 className="font-semibold text-sm lg:text-lg overflow-hidden line-clamp-2 group-hover:line-clamp-5">
                {item.judul}
              </h4>
            </Motion.div>
            <p className="mt-2 text-xs lg:text-base text-gray-500 line-clamp-1 group-hover:line-clamp-5">
              {item.pemberi}
            </p>
          </div>
        </div>
      </motion.button>
    </AnimatePresence>
  );
};

"use client";
import _ from "lodash";
import { Item } from "./Item";
import { AnimatePresence, motion } from "motion/react";
import { trpc } from "@/utils/trpc";
import { Computed, useObservable } from "@legendapp/state/react";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export const NewsPhoto = () => {
  const state$ = useObservable({
    active: 0,
    direction: 0,
  });
  const height$ = useObservable<string | "auto">("auto");

  const { data } = trpc.externalApi.galleries.useQuery({
    limit: 10,
  });

  const setHeight = (ref: HTMLDivElement | null) => {
    if (ref) {
      height$.set(ref.clientHeight + "px");
    }
  };

  if (!data) return null;

  const sections = _.chunk(data.data ?? [], 5);

  return (
    <div>
      <Computed>
        {() => (
          <div
            className="relative w-full transition-all duration-500"
            style={{
              height: height$.get(),
              opacity: height$.get() === "auto" ? 0 : 1,
            }}
          >
            <AnimatePresence initial={false} custom={state$.get().direction}>
              <motion.div
                ref={setHeight}
                key={state$.get().active}
                custom={state$.get().direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                style={{
                  position: 'absolute',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                  gap: 16
                }}
              >
                {sections[state$.get().active]?.map((item, index) => (
                  <Item
                    key={index}
                    id={item.id}
                    isPrimary={index === 0}
                    title={item.title}
                    image={item.img_url}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </Computed>

      <div className="mt-6 flex gap-2 justify-center">
        <Computed>
          {() =>
            sections.map((_, index) => (
              <button
                key={index}
                data-active={index === state$.get().active}
                onClick={() => {
                  state$.set((prev) => ({
                    active: index,
                    direction: prev.active < index ? -1 : 1,
                  }));
                }}
                className="rounded-full bg-gray-300 w-2 h-2 data-[active=true]:w-8 data-[active=true]:bg-orange-500 transition-all duration-500"
              />
            ))
          }
        </Computed>
      </div>
    </div>
  );
};

"use client";
import { Icon } from "@/app/icons";
import { trpc } from "@/utils/trpc";
import { Computed, useObservable } from "@legendapp/state/react";
import { motion } from "motion/react";
import { ReactNode, useCallback, useMemo } from "react";
import { tv } from "tailwind-variants";

const pos = [
  [2, 0, 1],
  [1, 2, 0],
  [0, 1, 2],
];

export const VideoSlider = () => {
  const res = trpc.externalApi.videos.useQuery({ limit: 3 });
  const data = useMemo(() => res.data?.data ?? [], [res]);

  const active$ = useObservable(0);

  const next = useCallback(() => {
    active$.set((prev) => (prev > 0 ? prev - 1 : data.length - 1));
  }, [active$, data]);

  const prev = useCallback(() => {
    active$.set((prev) => (prev < data.length - 1 ? prev + 1 : 0));
  }, [active$, data]);

  const getSlide = useCallback(
    (index: number) =>
      pos[active$.get()][index] === 0
        ? "left"
        : pos[active$.get()][index] === 2
          ? "center"
          : "right",
    [active$],
  );

  return (
    <div className="h-[500px] relative flex justify-center">
      <Computed>
        {() =>
          data.map((item, index) => (
            <SlideItem key={index} position={getSlide(index)}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${item.source}`}
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </SlideItem>
          ))
        }
      </Computed>

      <Button position="left" onClick={prev}>
        <Icon name="ChevronLeft" size={24} />
      </Button>
      <Button position="right" onClick={next}>
        <Icon name="ChevronRight" size={24} />
      </Button>
    </div>
  );
};

const SlideItem = ({
  position,
  children,
  onClick,
}: {
  position: "left" | "right" | "center";
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      variants={{
        left: {
          x: -300,
          scale: 0.8,
          zIndex: -1,
          transition: {
            duration: 0.4,
          },
        },
        center: {
          x: 0,
          scale: 1,
          zIndex: 0,
          transition: {
            duration: 0.4,
          },
        },
        right: {
          x: 300,
          scale: 0.8,
          zIndex: -1,
          transition: {
            duration: 0.4,
          },
        },
      }}
      initial={position}
      animate={position}
      onTapStart={onClick}
      style={{
        position: 'absolute',
        height: 500,
        aspectRatio: 16/9,
        borderRadius: 16,
        overflow: 'hidden'
      }}
    >
      {children}
    </motion.div>
  );
};

const createStyles = tv({
  slots: {
    root: "absolute flex items-center bottom-0 top-0",
    button:
      "border border-black hover:border-white rounded-full p-2 hover:bg-pink-500 hover:text-white transition-all",
  },
  variants: {
    position: {
      left: {
        root: "left-0",
      },
      right: {
        root: "right-0",
      },
    },
  },
});

const Button = ({
  children,
  position,
  onClick,
}: {
  children: ReactNode;
  position: "left" | "right";
  onClick: () => void;
}) => {
  const x = createStyles({ position });
  return (
    <div className={x.root()}>
      <button className={x.button()} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

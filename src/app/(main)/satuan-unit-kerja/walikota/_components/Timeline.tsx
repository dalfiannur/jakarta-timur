"use client";

import { Provost } from "@/types/provost";
import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";

export type TimelineRef = {
  next: () => void;
  prev: () => void;
};

type TimelineProps = {
  data: Provost[];
};

export const Timeline = forwardRef<TimelineRef, TimelineProps>(
  function Timeline({ data }, ref) {
    const [containerRef, animateContainer] = useAnimate();
    const [x, setX] = useState(-(500 * data.length));

    const change = useCallback(
      (direction: "next" | "prev", x: number) => {
        if (direction === "next" && x < -(data.length * 500)) return null;
        if (direction === "prev" && x > -1000) return null;
        animateContainer(
          containerRef.current,
          {
            x,
          },
          {
            duration: 0.6,
            delay: 0,
          },
        );
        setX(x);
      },
      [containerRef, data.length, animateContainer],
    );

    useImperativeHandle(
      ref,
      () => ({
        next: () => change("next", x - 500),
        prev: () => change("prev", x + 500),
      }),
      [x, change],
    );

    useEffect(() => {
      if (containerRef.current) {
        animateContainer(
          containerRef.current,
          { x },
          { duration: 15, delay: 5 },
        );
      }
    }, [containerRef, animateContainer, x]);

    return (
      <div className="relative h-[500px] overflow-hidden">
        <div
          ref={containerRef}
          style={{ right: "-100%" }}
          className="absolute h-[500px] w-full"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              style={{
                opacity: 0,
                position: "absolute",
                height: 200,
                width: 400,
                x: index * 400 + (index > 0 ? index * 120 : 0),
                y: index % 2 > 0 ? 300 : -50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              whileInView={{
                opacity: 1,
                x: index * 400 + (index > 0 ? index * 100 : 0),
                y: index % 2 > 0 ? 250 : 0,
                transition: {
                  duration: 1,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="flex justify-between overflow-hidden rounded-xl bg-white shadow-xl">
                <div className="flex gap-4 p-4">
                  <div className="relative aspect-square h-24 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={item.img_url}
                      alt={item.nama}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-plus-jakarta-sans text-xl font-bold">
                      {item.nama}
                    </h4>
                    <p className="mt-2 font-plus-jakarta-sans text-sm tracking-widest text-gray-900/80">
                      Tahun Menjabat
                    </p>
                    <p className="mt-2 w-max rounded-full bg-pink-100 px-4 py-1 font-roboto font-bold text-pink-500">
                      {item.jabatan}
                    </p>
                  </div>
                </div>
                <div className="h-full w-2 bg-pink-500" />
              </div>
            </motion.div>
          ))}
          {data.map((_, index) => (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                height: 0,
                width: 0,
                y: 225,
                x: (index + 1) * 500 - 315,
                zIndex: 10,
              }}
              whileInView={{
                y: 210,
                height: 30,
                width: 30,
                transition: {
                  duration: 0.6,
                },
              }}
              viewport={{
                once: true,
              }}
              className="rounded-full border-4 bg-pink-500"
            />
          ))}
          <motion.div
            style={{
              opacity: 0,
              position: "absolute",
              height: 10,
              width: data.length * 500 - 100,
              y: 220,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 1,
              },
            }}
            viewport={{
              once: true,
            }}
            className="rounded-full bg-pink-500"
          />
        </div>
      </div>
    );
  },
);

"use client";
import { AnimatePresence } from "motion/react";
import Image from "next/image";
import { motion } from "motion/react";
import { MobileNavigationList } from "./MobileNavigationList";
import { SearchInput } from "./SearchInput";
import { signal } from "@preact/signals-react";

export const open = signal(false);

export const MobileNavigationBar = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-20">
      <div className="flex items-center justify-between bg-white p-4 shadow lg:hidden">
        <Image
          src="/img/logo.png"
          width={120}
          height={43}
          alt="Logo Jakarta Timur"
        />
        <button
          className="flex h-8 w-8 items-center justify-center"
          onClick={() => (open.value = !open.value)}
        >
          {open.value ? (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 4.33254L20.239 2.57153L12 10.7791L3.76101 2.57153L2 4.33254L10.2075 12.5715L2 20.8105L3.76101 22.5715L12 14.364L20.239 22.5715L22 20.8105L13.7925 12.5715L22 4.33254Z"
                fill="#1D252D"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12.2571H13.5M4 6.25708H20M4 18.2571H20"
                stroke="#EB30A2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open.value && (
          <div className="absolute left-0 right-0 top-16 z-30 bg-white p-4 shadow">
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                overflow: "hidden",
              }}
            >
              <SearchInput />
              <MobileNavigationList />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

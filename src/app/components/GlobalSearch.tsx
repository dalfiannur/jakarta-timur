"use client";
import { useRef, useState } from "react";
import { Icon } from "../icons";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  GlobalSearchResult,
  GlobalSearchResultRef,
} from "./GlobalSearchResult";
import { useDebounceEvent } from "../hooks/useDebounceEvent";

export const GlobalSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<GlobalSearchResultRef>(null);
  const [isFocused, setFocused] = useState(false);

  const setSearch = useDebounceEvent<string>({
    timer: 1000,
    onChange(value) {
      resultRef.current?.setSearch(value);
    },
  });

  return (
    <div className="relative flex-1">
      <div className="group flex items-center rounded-lg border border-gray-100 bg-gray-100 text-gray-400 focus-within:border-pink-500/40">
        <div className="left-4 px-4 group-focus-within:text-pink-500">
          <Icon name="Search" className="h-6 w-6 text-gray-500" />
        </div>
        <input
          ref={searchRef}
          placeholder="Search"
          className="w-full bg-transparent py-4 pr-4 focus:outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>

      <AnimatePresence>
        {isFocused && (
          <motion.div
            style={{
              position: "absolute",
              width: "100%",
              top: 80,
            }}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <div className="rounded-xl bg-white p-6 shadow">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">
                  Berita Pemerintah Terkini
                </div>
                <Link href="/publikasi/berita" className="text-blue-500">
                  Lihat Semua
                </Link>
              </div>
              <div className="mt-1">
                <GlobalSearchResult
                  ref={resultRef}
                  focusOut={() => {
                    setFocused(false);
                    searchRef.current?.blur();
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

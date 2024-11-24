"use client";
import { Fragment, ReactNode } from "react";
import { Icon } from "../icons";
import { AnimatePresence, easeOut, motion } from "motion/react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { tv } from "tailwind-variants";

export const ListNumberAccordion = ({
  children,
  numberLabel,
  label,
}: {
  children: ReactNode;
  numberLabel: number;
  label: string;
}) => {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <>
          <ButtonTrigger
            isOpened={open}
            label={label}
            numberLabel={numberLabel}
          />
          <div className="overflow-hidden py-0 lg:py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel static as={Fragment}>
                  <motion.div
                    initial={{ opacity: 0, y: -24, transformOrigin: "top" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                  >
                    {children}
                  </motion.div>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
};

const ButtonTrigger = ({
  isOpened,
  label,
  numberLabel,
}: {
  isOpened?: boolean;
  label: string;
  numberLabel: number;
}) => {
  return (
    <DisclosureButton
      data-active={isOpened}
      className="group flex w-full items-center gap-6 rounded-2xl border p-4 transition-all duration-300 data-[active=true]:rounded-b-none data-[active=true]:border-blue-100 data-[active=true]:bg-blue-100 lg:p-6"
    >
      <div className="flex aspect-square w-8 items-center justify-center rounded-xl bg-gray-200/60 text-xs font-bold text-gray-400 transition-all duration-300 group-data-[active=true]:bg-blue-500 group-data-[active=true]:text-white lg:h-10 lg:text-sm">
        {numberLabel}
      </div>
      <div className="flex-1 text-left text-lg font-bold lg:text-2xl">
        {label}
      </div>
      <div className="text-blue-500">
        <Icon
          name={isOpened ? "MinusCircle" : "CirclePlus"}
          className="aspect-square w-8 lg:w-12"
        />
      </div>
    </DisclosureButton>
  );
};

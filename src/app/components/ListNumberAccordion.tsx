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
          <div className="overflow-hidden py-2">
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

const buttonTriggerCss = tv({
  slots: {
    button:
      "w-full flex items-center p-6 gap-6 border rounded-2xl transition-all duration-300",
    number:
      "w-10 h-10 rounded-xl flex justify-center items-center font-bold text-sm transition-all duration-300",
  },
  variants: {
    isOpened: {
      true: {
        button: "bg-blue-100 border-blue-100",
        number: "bg-blue-500 text-white",
      },
      false: {
        number: "bg-gray-200/60 text-gray-400",
      },
    },
  },
});

const ButtonTrigger = ({
  isOpened,
  label,
  numberLabel,
}: {
  isOpened?: boolean;
  label: string;
  numberLabel: number;
}) => {
  const x = buttonTriggerCss({ isOpened });
  return (
    <DisclosureButton className={x.button()}>
      <div className={x.number()}>{numberLabel}</div>
      <div className="flex-1 text-left text-2xl font-bold">{label}</div>
      <div className="text-blue-500">
        <Icon name="CirclePlus" className="w-12 h-12" />
      </div>
    </DisclosureButton>
  );
};

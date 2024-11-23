"use client"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ReactNode } from "react";
import { Icon } from "@/app/icons";

export const Accordion = ({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) => {
  return (
    <div className="border-b">
      <Disclosure>
        <DisclosureButton className="inline-flex justify-between w-full gap-20 py-6">
          <div className="text-base font-bold text-left text-pink-500 lg:text-center lg:text-2xl font-plus-jakarta-sans">
            {label}
          </div>
          <Icon name="ChevronDown" className="w-6 h-6" />
        </DisclosureButton>
        <DisclosurePanel
          transition
          className="pr-10 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 pb-6"
        >
          {children}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

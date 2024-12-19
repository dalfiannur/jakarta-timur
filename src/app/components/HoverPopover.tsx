"use client";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ReactNode, useRef } from "react";
import { Icon } from "../icons";
import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

const createStyles = tv({
  slots: {
    button:
      "text-sm/6 font-semibold focus:outline-none data-[active]:text-pink-500 data-[hover]:text-pink-500 flex gap-2",
    container:
      "divide-y divide-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 relative",
  },
  variants: {
    active: {
      true: {
        button: "border-b-2 border-pink-500 text-pink-500",
      },
      false: {
        button: "text-gray-500",
      },
    },
  },
});

interface HoverPopoverProps {
  label: string;
  index: string;
  children?: ReactNode;
}

export const HoverPopover = ({ children, label, index }: HoverPopoverProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const active = pathname.includes(index);

  const x = createStyles({ active });

  const handleEnter = (isOpen: boolean) => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current?.click();
    }
  };

  const handleLeave = (isOpen: boolean) => {
    if (isOpen && triggerRef.current) {
      triggerRef.current.click();
    }
  };

  return (
    <Popover>
      {({ open }) => (
        <div onMouseEnter={() => handleEnter(open)}>
          <PopoverButton ref={triggerRef} className={x.button()}>
            {label}
            <Icon name="ChevronDown" />
          </PopoverButton>

          <PopoverPanel
            transition
            anchor={{
              to: "bottom",
            }}
            className="pt-10 z-[9999]"
            onMouseLeave={() => handleLeave(open)}
          >
            <div className={x.container()}>{children}</div>
          </PopoverPanel>
        </div>
      )}
    </Popover>
  );
};

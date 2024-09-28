import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ReactNode, useRef } from "react";
import { Icon } from "../icons";

interface HoverPopoverProps {
  label: string;
  children?: ReactNode;
}

export const HoverPopover = ({ children, label }: HoverPopoverProps) => {
  const triggerRef = useRef<any>();

  const handleEnter = (isOpen: boolean) => {
    !isOpen && triggerRef.current?.click();
  };

  const handleLeave = (isOpen: boolean) => {
    isOpen && triggerRef.current?.click();
  };

  return (
    <Popover>
      {({ open }) => (
        <div
          onMouseEnter={() => handleEnter(open)}
          onMouseLeave={() => handleLeave(open)}
        >
          <PopoverButton
            ref={triggerRef}
            className="text-sm/6 font-semibold text-gray-500 focus:outline-none data-[active]:text-pink-500 data-[hover]:text-pink-500 flex gap-2"
          >
            {label}
            <Icon name="ChevronDown" />
          </PopoverButton>

          <PopoverPanel
            transition
            anchor={{
              to: "bottom",
            }}
            className="pt-10"
          >
            <div className="divide-y divide-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 relative">
              {children}
            </div>
          </PopoverPanel>
        </div>
      )}
    </Popover>
  );
};

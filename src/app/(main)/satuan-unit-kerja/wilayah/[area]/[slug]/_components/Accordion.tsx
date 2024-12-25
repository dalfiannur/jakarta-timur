import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ReactNode} from "react";
import {Icon} from "@/app/icons";

export const Accordion = ({children, label}: { children?: ReactNode, label: string }) => {
    return (
        <div>
            <Disclosure>
                <DisclosureButton className="flex justify-between w-full gap-20 px-4 py-1 lg:px-10 lg:py-6">
                    <div className="text-sm font-bold text-pink-500 lg:text-2xl">
                        {label}
                    </div>
                    <Icon name="ChevronDown" className="w-6 h-6"/>
                </DisclosureButton>
                <DisclosurePanel transition className="px-4 lg:px-10 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                    {children}
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}
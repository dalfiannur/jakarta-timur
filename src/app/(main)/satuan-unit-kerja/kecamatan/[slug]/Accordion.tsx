import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {ReactNode} from "react";
import {Icon} from "@/app/icons";

export const Accordion = ({children, label}: { children: ReactNode, label: string }) => {
    return (
        <div>
            <Disclosure>
                <DisclosureButton className="w-full flex justify-between gap-20 px-10 py-6">
                    <div className="font-bold text-2xl text-pink-500">
                        {label}
                    </div>
                    <Icon name="ChevronDown" size={24}/>
                </DisclosureButton>
                <DisclosurePanel transition className="px-10 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                    {children}
                </DisclosurePanel>
            </Disclosure>
        </div>
    )
}
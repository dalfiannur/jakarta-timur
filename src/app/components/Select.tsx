import {Listbox, ListboxButton, ListboxOptions, ListboxOption, Label, Field} from '@headlessui/react'
import {useEffect, useState} from "react";
import {Icon} from '../icons';

export type Option = {
    label: string;
    value: string
}

export const Select = ({label, data, onChange}: {
    label: string,
    data: Option[],
    onChange: (option: Option) => void
}) => {
    const [selected, setSelected] = useState(data[0])

    useEffect(() => {
            onChange(selected)

        }, [selected, onChange]
    )

    return (
        <Field className="flex items-center gap-4">
            <Label className="font-semibold text-lg text-gray-500">{label}:</Label>
            <Listbox value={selected} onChange={setSelected}>
                <ListboxButton
                    className="px-4 py-3 border rounded-lg font-semibold text-pink-500 flex items-center gap-4">
                    <div className="text-black">
                        {selected.label}
                    </div>
                    <Icon name="ChevronDown" size={24}/>
                </ListboxButton>
                <ListboxOptions
                    anchor="bottom"
                    transition
                    className="origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 bg-white z-10 rounded-xl drop-shadow w-[var(--button-width)] [--anchor-gap:4px] sm:[--anchor-gap:8px]"
                >
                    {data.map((item, index) => (
                        <ListboxOption value={item} key={index}
                                       className="px-4 py-2 data-[focus]:bg-blue-50 cursor-pointer data-[selected]:bg-pink-100">{item.label}</ListboxOption>
                    ))}
                </ListboxOptions>
            </Listbox>
        </Field>
    )
}
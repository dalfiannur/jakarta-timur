"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Label,
  Field,
} from "@headlessui/react";
import { useCallback, useState } from "react";
import { Icon } from "../icons";

export type SelectOption = {
  label: string;
  value: string;
};

export const SelectCSR = ({
  label,
  placeholder,
  data,
  defaultSelected,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  data: SelectOption[];
  defaultSelected?: SelectOption;
  onChange?: (selected: SelectOption | null) => void;
}) => {
  const [selected, setSelected] = useState<SelectOption | null>(
    defaultSelected ?? null,
  );

  const _onChange = useCallback(
    (value: SelectOption) => {
      setSelected(value);
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <Field className="flex items-center gap-4">
      {label && (
        <Label className="font-semibold text-lg text-gray-500">{label}:</Label>
      )}
      <Listbox value={selected} onChange={_onChange}>
        <ListboxButton className="p-2 lg:p-4 border rounded-lg font-semibold text-pink-500 flex items-center justify-between gap-4 min-w-[100px] lg:min-w-[150px]">
          <div className="text-black text-xs lg:text-base">{selected?.label ?? placeholder}</div>
          <Icon name="ChevronDown" className="w-6 h-6" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="p-1 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 bg-white z-10 rounded-xl drop-shadow w-[var(--button-width)] [--anchor-gap:4px] sm:[--anchor-gap:8px]"
        >
          {data.map((item, index) => (
            <ListboxOption
              value={item}
              key={index}
              className="px-4 py-3 text-xs lg:text-base rounded-xl data-[focus]:bg-blue-50 cursor-pointer data-[selected]:bg-pink-50 data-[selected]:text-pink-500 data-[selected]:font-bold"
            >
              {item.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

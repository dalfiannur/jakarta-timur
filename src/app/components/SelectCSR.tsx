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
  classNames,
}: {
  label?: string;
  placeholder?: string;
  data: SelectOption[];
  defaultSelected?: SelectOption;
  classNames?: {
    root?: string;
    button?: string;
  };
  onChange?: (selected: SelectOption | null) => void;
}) => {
  const [selected, setSelected] = useState<SelectOption | null>(
    defaultSelected ?? null,
  );

  const _onChange = useCallback(
    (value: SelectOption) => {
      if (selected === value) {
        setSelected(null);
        onChange?.(null);
      } else {
        setSelected(value);
        onChange?.(value);
      }
    },
    [onChange, selected],
  );

  return (
    <Field className={`flex items-center gap-4 ${classNames?.root}`}>
      {label && (
        <Label className="text-lg font-semibold text-gray-500">{label}:</Label>
      )}
      <Listbox value={selected} onChange={_onChange}>
        <ListboxButton
          className={`flex min-w-[100px] items-center justify-between gap-4 rounded-xl border p-2 font-semibold text-pink-500 lg:min-w-[150px] lg:p-4 ${classNames?.button}`}
        >
          <div className="text-xs text-black lg:text-base">
            {selected?.label ?? placeholder}
          </div>
          <Icon name="ChevronDown" className="h-6 w-6" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className="z-[1000] w-[var(--button-width)] origin-top rounded-xl bg-white p-1 drop-shadow transition duration-200 ease-out [--anchor-gap:4px] data-[closed]:scale-95 data-[closed]:opacity-0 sm:[--anchor-gap:8px]"
        >
          {data.map((item, index) => (
            <ListboxOption
              value={item}
              key={index}
              className="cursor-pointer rounded-xl px-4 py-3 text-xs data-[focus]:bg-blue-50 data-[selected]:bg-pink-50 data-[selected]:font-bold data-[selected]:text-pink-500 lg:text-base"
            >
              {item.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

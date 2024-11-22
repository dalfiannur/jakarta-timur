"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Label,
  Field,
} from "@headlessui/react";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "../icons";
import { useRouter, useSearchParams } from "next/navigation";

export type Option = {
  label: string;
  value: string;
};

export const Select = ({
  label,
  placeholder,
  data,
  defaultSelected,
  paramKey,
}: {
  label?: string;
  placeholder?: string;
  data: Option[];
  defaultSelected?: Option;
  paramKey: string;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState<Option | null>(
    defaultSelected ?? null,
  );

  const defaultValue = searchParams.get(paramKey);

  const onChange = useCallback(
    (value: Option) => {
      setSelected(value);

      const p = new URLSearchParams(searchParams);
      p.set(paramKey, value.value);
      router.push("?" + p.toString(), {
        scroll: false,
      });
    },
    [searchParams, paramKey, router],
  );

  useEffect(() => {
    if (defaultValue) {
      const _selected = data.find((d) => d.value === defaultValue);
      if (_selected) {
        setSelected(_selected);
      }
    }
  }, [data, defaultValue]);

  return (
    <Field className="flex items-center gap-4">
      {label && (
        <Label className="font-semibold text-lg text-gray-500">{label}:</Label>
      )}
      <Listbox value={selected} onChange={onChange}>
        <ListboxButton className="px-4 py-3 border rounded-lg font-semibold text-pink-500 flex items-center justify-between gap-4 min-w-[150px]">
          <div className="text-black">{selected?.label ?? placeholder}</div>
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
              className="px-4 py-3  rounded-xl data-[focus]:bg-blue-50 cursor-pointer data-[selected]:bg-pink-50 data-[selected]:text-pink-500 data-[selected]:font-bold"
            >
              {item.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

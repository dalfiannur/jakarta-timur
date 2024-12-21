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
import { tv, VariantProps } from "tailwind-variants";

const styles = tv(
  {
    slots: {
      root: "flex items-center gap-4",
      label: "text-lg font-semibold text-gray-500",
      button: "flex items-center justify-between gap-4 border",
      text: "text-black",
      icon: "aspect-square",
      options:
        "z-[1000] w-[var(--button-width)] origin-top bg-white p-1 drop-shadow transition duration-200 ease-out [--anchor-gap:4px] data-[closed]:scale-95 data-[closed]:opacity-0 sm:[--anchor-gap:8px]",
      option: "cursor-pointer",
    },
    variants: {
      size: {
        sm: {
          button: "p-2 rounded-sm font-medium",
          text: "text-xs",
          icon: "h-4",
          options: "rounded-sm",
          option: "text-xs p-2 rounded-sm data-[selected]:font-medium",
        },
        md: {
          button: "px-4 py-2 min-w-[100px] rounded font-medium",
          text: "text-sm",
          icon: "h-4",
          options: "rounded",
          option: "text-sm p-2 rounded data-[selected]:font-semibold",
        },
        lg: {
          button: "px-4 py-3 min-w-[150px] rounded-xl font-semibold",
          text: "text-base",
          icon: "h-6",
          options: "rounded-lg",
          option: "text-base px-4 py-2 rounded-lg data-[selected]:font-bold",
        },
      },
      color: {
        pink: {
          button: "text-pink-500",
          option:
            "data-[focus]:bg-pink-50/80 data-[selected]:bg-pink-50 data-[selected]:text-pink-500",
        },
        blue: {
          button: "text-blue-500",
          option:
            "data-[focus]:bg-blue-50/80 data-[selected]:bg-blue-50 data-[selected]:text-blue-500",
        },
        orange: {
          button: "text-orange-500",
          option:
            "data-[focus]:bg-orange-50/80 data-[selected]:bg-orange-50 data-[selected]:text-orange-500",
        },
      },
    },
    defaultVariants: {
      size: "lg",
      color: "pink",
    },
  },
  {
    responsiveVariants: ["md", "lg"],
  },
);

type Variant = VariantProps<typeof styles>;

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectCSRProps = Omit<Variant, "size"> & {
  label?: string;
  loading?: boolean;
  placeholder?: string;
  data: SelectOption[];
  defaultSelected?: SelectOption;
  classNames?: {
    root?: string;
    button?: string;
  };
  onChange?: (selected: SelectOption | null) => void;
};

export const SelectCSR = ({
  label,
  loading,
  placeholder,
  data,
  defaultSelected,
  onChange,
  classNames,
  color,
}: SelectCSRProps) => {
  const [selected, setSelected] = useState<SelectOption | null>(
    defaultSelected ?? null,
  );

  const x = styles({
    color,
    size: {
      initial: "sm",
      md: "md",
      lg: "lg",
    },
  });

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

  useEffect(() => {
    if (loading) {
      setSelected(null);
    }
  }, [loading]);

  return (
    <Field className={x.root({ className: classNames?.root })}>
      {label && <Label className={x.label()}>{label}:</Label>}
      <Listbox value={selected} onChange={_onChange}>
        <ListboxButton className={x.button({ className: classNames?.button })}>
          <div className={x.text()}>{selected?.label ?? placeholder}</div>
          <Icon name="ChevronDown" className={x.icon()} />
        </ListboxButton>
        <ListboxOptions anchor="bottom" transition className={x.options()}>
          {data.map((item, index) => (
            <ListboxOption value={item} key={index} className={x.option()}>
              {item.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
};

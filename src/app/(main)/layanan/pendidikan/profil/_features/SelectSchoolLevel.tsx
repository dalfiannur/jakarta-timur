"use client";
import { SelectCSR } from "@/app/components/SelectCSR";

const data = [
  {
    label: "SD",
    value: "sd",
  },
  {
    label: "SMP",
    value: "smp",
  },
  {
    label: "SMA / SMK",
    value: "sma-smk",
  },
];

export const SelectSchoolLevel = ({
  classNames,
  onChange,
}: {
  classNames?: { root?: string; button?: string };
  onChange?: (value: string | undefined) => void;
}) => {
  return (
    <SelectCSR
      data={data}
      placeholder="Pilih Jenjang"
      classNames={classNames}
      onChange={(val) => onChange?.(val ? val.value : undefined)}
    />
  );
};

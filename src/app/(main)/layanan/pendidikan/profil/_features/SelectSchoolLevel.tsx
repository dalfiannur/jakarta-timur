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
}: {
  classNames?: { root?: string; button?: string };
}) => {
  return (
    <SelectCSR
      data={data}
      placeholder="Pilih Jenjang"
      classNames={classNames}
    />
  );
};

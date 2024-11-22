"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

export const SelectDistrict = ({
  hasLabel,
  onChange,
  classNames,
}: {
  hasLabel?: boolean;
  fullWidth?: boolean;
  classNames?: {
    root?: string;
    button?: string;
  };
  onChange?: (selected: SelectOption | null) => void;
}) => {
  const { data } = trpc.externalApi.getDistricts.useQuery();

  const options = useMemo(
    () => data?.data?.map((d) => ({ value: d.slug, label: d.nama })) ?? [],
    [data]
  );

  return (
    <div className={`flex items-center gap-4 ${classNames?.root}`}>
      {hasLabel && <label>Pilih Kecamatan :</label>}
      <SelectCSR
        data={options}
        defaultSelected={options[0]}
        placeholder="Pilih Kecamatan"
        onChange={onChange}
        classNames={classNames}
      />
    </div>
  );
};

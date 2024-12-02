"use client";
import {
  SelectCSR,
  SelectCSRProps,
  SelectOption,
} from "@/app/components/SelectCSR";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

type SelectDistrictProps = Omit<SelectCSRProps, "data"> & {
  hasLabel?: boolean;
  fullWidth?: boolean;
  onChange?: (selected: SelectOption | null) => void;
};

export const SelectDistrict = ({
  hasLabel,
  onChange,
  classNames,
  ...props
}: SelectDistrictProps) => {
  const { data } = trpc.externalApi.getDistricts.useQuery();

  const options = useMemo(
    () => data?.data?.map((d) => ({ value: d.slug, label: d.nama })) ?? [],
    [data],
  );

  return (
    <div className={`flex items-center gap-4 ${classNames?.root}`}>
      {hasLabel && <label>Pilih Kecamatan :</label>}
      <SelectCSR
        {...props}
        data={options}
        defaultSelected={options[0]}
        placeholder="Pilih Kecamatan"
        onChange={onChange}
        classNames={classNames}
      />
    </div>
  );
};

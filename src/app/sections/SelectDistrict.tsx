"use client";
import { SelectCSR, SelectCSRProps } from "@/app/components/SelectCSR";
import { useGetAreaQuery } from "@/services/api/area";
import { useMemo } from "react";

type SelectDistrictProps = Omit<SelectCSRProps, "data" | "onChange"> & {
  hasLabel?: boolean;
  fullWidth?: boolean;
  onChange?: (selected: { id: number; slug: string } | null) => void;
};

export const SelectDistrict = ({
  hasLabel,
  onChange,
  classNames,
  ...props
}: SelectDistrictProps) => {
  const { data } = useGetAreaQuery({
    area: "kecamatan",
  });

  const options = useMemo(
    () =>
      data?.data?.map((d) => ({
        value: JSON.stringify({ id: d.id, slug: d.slug }),
        label: d.nama,
      })) ?? [],
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
        onChange={(value) => onChange?.(value ? JSON.parse(value.value) : null)}
        classNames={classNames}
      />
    </div>
  );
};

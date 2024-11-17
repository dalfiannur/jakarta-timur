"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";
import { useRequest } from "ahooks";
import { useMemo } from "react";

export const SelectDistrict = ({
  hasLabel,
  onChange,
}: {
  hasLabel?: boolean;
  onChange?: (selected: SelectOption | null) => void;
}) => {
  const { data } = useRequest(() =>
    fetch("https://timur.jakarta.go.id/API_Timur/api/kecamatan")
      .then((res) => res.json())
      .then((res) => res.data),
  );

  const options = useMemo(
    () => data?.data?.map((d) => ({ value: d.slug, label: d.nama })) ?? [],
    [data],
  );

  return (
    <div className="flex items-center gap-4">
      {hasLabel && <label>Pilih Kecamatan :</label>}
      <SelectCSR
        data={options}
        defaultSelected={options[0]}
        placeholder="Pilih Kecamatan"
        onChange={onChange}
      />
    </div>
  );
};

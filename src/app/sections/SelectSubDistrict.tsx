"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";
import { useRequest } from "ahooks";
import { useMemo } from "react";

export const SelectSubDistrict = ({
  hasLabel,
  onChange,
  district,
}: {
  hasLabel?: boolean;
  district?: string;
  onChange?: (selected: SelectOption | null) => void;
}) => {
  const { data } = useRequest(
    () => {
      const params = new URLSearchParams();
      if (district) {
        params.set("slug", district);
      }
      return fetch(
        "https://timur.jakarta.go.id/API_Timur/api/kelurahan?" +
          params.toString(),
      )
        .then((res) => res.json())
        .then((res) => res.data);
    },
    {
      refreshDeps: [district],
    },
  );

  const options = useMemo(
    () => data?.data?.map((d) => ({ value: d.slug, label: d.nama })) ?? [],
    [data],
  );

  return (
    <div className="flex items-center gap-4">
      {hasLabel && <label>Pilih Kelurahan :</label>}
      <SelectCSR
        data={options}
        defaultSelected={options[0]}
        placeholder="Pilih Kelurahan"
        onChange={onChange}
      />
    </div>
  );
};

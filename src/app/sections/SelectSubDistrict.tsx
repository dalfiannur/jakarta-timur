"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";
import { trpc } from "@/utils/trpc";
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
  const { data } = trpc.externalApi.getSubDistricts.useQuery({
    districtSlug: district,
  });

  const options = useMemo(
    () => data?.data?.map((d) => ({ value: d.slug, label: d.nama })) ?? [],
    [data]
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

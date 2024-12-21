"use client";
import { SelectCSR, SelectCSRProps } from "@/app/components/SelectCSR";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

type SelectSubDistrictProps = Omit<SelectCSRProps, "data" | "onChange"> & {
  hasLabel?: boolean;
  districtId?: number;
  onChange?: (selected: { id: number; slug: string } | null) => void;
};

export const SelectSubDistrict = ({
  hasLabel,
  onChange,
  districtId,
  classNames,
  ...props
}: SelectSubDistrictProps) => {
  const res = trpc.externalApi.getSubDistricts.useQuery(
    {
      districtId,
    },
    {
      refetchOnWindowFocus: false,
    },
  );

  const options = useMemo(
    () =>
      res.data?.data?.map((d) => ({
        value: JSON.stringify({ id: d.id, slug: d.slug }),
        label: d.nama,
      })) ?? [],
    [res],
  );

  return (
    <div className="flex items-center gap-4">
      {hasLabel && <label>Pilih Kelurahan :</label>}
      <SelectCSR
        {...props}
        loading={res.fetchStatus === "fetching"}
        data={options}
        placeholder="Pilih Kelurahan"
        onChange={(val) => onChange?.(val ? JSON.parse(val.value) : undefined)}
        classNames={classNames}
      />
    </div>
  );
};

"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

export const SelectRW = ({
  hasLabel,
  onChange,
  district,
  classNames,
}: {
  hasLabel?: boolean;
  district?: string;
  onChange?: (selected: SelectOption | null) => void;
  classNames?: {
    root?: string;
    button?: string;
  };
}) => {
  const { data } = trpc.externalApi.getSubDistricts.useQuery({
    districtSlug: district,
  });

  const options = useMemo(
    () => data?.data?.map((d) => ({ value: d.slug, label: d.nama })) ?? [],
    [data],
  );

  return (
    <div className="flex items-center gap-4">
      {hasLabel && <label>Pilih RW :</label>}
      <SelectCSR
        data={options}
        defaultSelected={options[0]}
        placeholder="Pilih RW"
        onChange={onChange}
        classNames={classNames}
      />
    </div>
  );
};

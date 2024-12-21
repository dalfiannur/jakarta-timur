"use client";
import { SelectCSR, SelectOption } from "@/app/components/SelectCSR";
import { trpc } from "@/utils/trpc";
import { useMemo } from "react";

export const SelectRW = ({
  hasLabel,
  onChange,
  subDistrict,
  classNames,
}: {
  hasLabel?: boolean;
  subDistrict?: string;
  onChange?: (selected: SelectOption | null) => void;
  classNames?: {
    root?: string;
    button?: string;
  };
}) => {
  const { data, fetchStatus } = trpc.externalApi.getJakWifi.useQuery({
    subDistrict,
    limit: 1000,
  });

  const options = useMemo(
    () =>
      [...new Set(data?.data?.map((d) => d.RW))].map((d) => ({
        value: d,
        label: d,
      })) ?? [],
    [data],
  );

  return (
    <div className="flex items-center gap-4">
      {hasLabel && <label>Pilih RW :</label>}
      <SelectCSR
        loading={fetchStatus === "fetching"}
        data={options}
        defaultSelected={options[0]}
        placeholder="Pilih RW"
        onChange={onChange}
        classNames={classNames}
      />
    </div>
  );
};

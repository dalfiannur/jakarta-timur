"use client";
import { SelectCSR } from "@/app/components/SelectCSR";
import { useGetAreaQuery } from "@/services/api/area";

export const SelectKecamatan = ({
  onChange,
}: {
  onChange: (value: string | undefined) => void;
}) => {
  const res = useGetAreaQuery({
    limit: 100,
    area: "kecamatan",
  });

  const options =
    res.data?.data.map((d) => ({
      value: d.id.toString() ?? "",
      label: d.nama,
    })) ?? [];

  return (
    <div className="flex items-center gap-4">
      <label>Pilih Kecamatan :</label>
      <SelectCSR
        data={options}
        defaultSelected={options[0]}
        onChange={(e) => onChange(e?.value)}
      />
    </div>
  );
};

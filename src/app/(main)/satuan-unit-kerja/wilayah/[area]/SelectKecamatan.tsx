import { Select } from "@/app/components/Select";
import { getData } from "./actions";

export const SelectKecamatan = async () => {
  const { data } = await getData({
    area: "kecamatan",
  });

  const options = data.map((d) => ({ value: d.slug, label: d.nama }));

  return (
    <div className="flex items-center gap-4">
      <label>Pilih Kecamatan :</label>
      <Select
        data={options}
        defaultSelected={options[0]}
        paramKey="kecamatan"
      />
    </div>
  );
};

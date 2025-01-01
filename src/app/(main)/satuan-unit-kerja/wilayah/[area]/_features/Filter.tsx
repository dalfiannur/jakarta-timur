import { SelectKecamatan } from "./SelectKecamatan";

export const Filter = ({
  onDistrictChange,
}: {
  onDistrictChange: (id: string | undefined) => void;
}) => {
  return <SelectKecamatan onChange={onDistrictChange} />;
};

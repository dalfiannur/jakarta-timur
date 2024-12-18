import { useContext } from "react";
import { SelectKecamatan } from "./SelectKecamatan";
import { Context } from "../context";

export const Filter = () => {
  const { setKecamatanId } = useContext(Context);
  return <SelectKecamatan onChange={(value) => setKecamatanId(value)} />;
};

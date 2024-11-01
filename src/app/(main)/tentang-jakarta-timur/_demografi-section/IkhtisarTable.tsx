import { useRequest } from "ahooks";
import { getTableData, IkhtisarData } from "../actions";
import { Column, Footer, footerCounter, Table } from "../Table";

const title = "Ikhtisar Statistik Antar Kerja Kota Jakarta Timur, 2020";
const columns: Column[] = [
  {
    key: "description",
    header: "Uraian",
    textAlign: "left",
    maxWidth: 200,
  },
  {
    key: "male",
    header: "Laki-Laki",
  },
  {
    key: "female",
    header: "Perempuan",
  },
  {
    key: "total",
    header: "Jumlah",
  },
];
const footers: Footer<IkhtisarData>[] = [
  {
    render: () => <>Pencari kerja yang belum ditempatkan akhir tahun</>,
    maxWidth: 200,
    textAlign: "left",
  },
  {
    render: (items) => footerCounter(items, (d) => d.male),
  },
  {
    render: (items) => footerCounter(items, (d) => d.female),
  },
  {
    render: (items) => footerCounter(items, (d) => d.total),
  },
];
const sourceInfo =
  "Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province";

export const IkhtisarTable = () => {
  const { data } = useRequest(() => getTableData("ikhtisarData"));

  return (
    <Table
      title={title}
      columns={columns}
      data={data ?? []}
      footers={footers}
      sourceInfo={sourceInfo}
    />
  );
};

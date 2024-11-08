import { getTableData, IkhtisarData } from "../../actions";
import { Column, Footer, footerCounter, Table } from "../../Table";

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

export default async function Page() {
  const data = await getTableData("ikhtisarData");

  return (
    <Table
      columns={columns}
      footers={footers}
      data={data}
      title="Ikhtisar Statistik Antar Kerja Kota Jakarta Timur, 2020"
      sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
    />
  );
}

import { formattedNumber } from "@/utils/format-number";
import { CitizenGrowthData, getTableData } from "../../actions";
import { Column, Footer, footerCounter, Table } from "../../Table";

const title =
  "Penduduk, Laju Pertumbuhan Penduduk per Tahun, Distribusi Persentase Penduduk, Kepadatan Penduduk, Rasio Jenis Kelamin Penduduk Menurut Kecamatan Kota Jakarta Timur, 2020";
const columns: Column[] = [
  {
    header: "Kecamatan",
    key: "district",
  },
  {
    header: "Penduduk(Jiwa)",
    key: "citizen",
    render: (v) => formattedNumber(v),
  },
  {
    header: "Laju Pertumbuhan Penduduk 2010-2020 (%)",
    key: "growth",
    render: (v) => formattedNumber(v, 2),
  },
  {
    header: "Persentase Penduduk",
    key: "percentage",
    render: (v) => formattedNumber(v, 2),
  },
  {
    header: "Kepadatan Penduduk per km2",
    key: "depth",
    render: (v) => formattedNumber(v),
  },
  {
    header: "Rasio Jenis Kelamin Penduduk",
    key: "genderRatio",
    render: (v) => formattedNumber(v, 2),
  },
];
const footers: Footer<CitizenGrowthData>[] = [
  {
    render: () => "Kota Jakarta Timur",
    nowrap: true,
  },
  {
    render: (items) => footerCounter(items, (d) => d.citizen),
  },
  {
    render: (items) => footerCounter(items, (d) => d.growth, "avg"),
  },
  {
    render: (items) => footerCounter(items, (d) => d.percentage, "avg"),
  },
  {
    render: (items) => footerCounter(items, (d) => d.depth),
  },
  {
    render: (items) => footerCounter(items, (d) => d.genderRatio, "avg"),
  },
];

export default async function Page() {
  const data = await getTableData("citizenGrowthData");

  return (
    <Table
      title={title}
      columns={columns}
      footers={footers}
      //@ts-expect-error missmatch type
      data={data}
    />
  );
}

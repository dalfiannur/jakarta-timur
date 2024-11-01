import { formattedNumber } from "@/utils/format-number";
import { CitizenEducationData, getTableData } from "../actions";
import { Column, Footer, footerCounter, Table } from "../Table";
import { useRequest } from "ahooks";

const title =
  "Penduduk Berumur 15 Tahun ke Atas Menurut Pendidikan Tertinggi yang Ditamatkan dan Jenis Kegiatan Selama Seminggu yang Lalu di Kota Jakarta Timur, 2020";
const columns: Column[] = [
  {
    key: "id",
    header: "Pendidikan Tertinggi yang Ditamatkan",
    rowSpan: 2,
  },
  {
    key: null,
    header: "Angkatan Kerja",
    colSpan: 3,
    compact: true,
    children: [
      {
        key: "employers",
        header: "Bekerja",
        compact: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "unemployers",
        header: "Pengangguran",
        compact: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "totalEmployers",
        header: "Jumlah Angkatan Kerja",
        compact: true,
        render: (v) => formattedNumber(v),
      },
    ],
  },
  {
    key: "percentage",
    header: "Persentase Bekerja Terhadap Angkatan Kerja",
    rowSpan: 2,
    render: (v) => formattedNumber(v, 2),
  },
  {
    key: "notWorkforce",
    header: "Bukan Angkatan Kerja",
    rowSpan: 2,
    render: (v) => formattedNumber(v),
  },
  {
    key: "total",
    header: "Jumlah",
    rowSpan: 2,
    render: (v) => formattedNumber(v),
  },
  {
    key: "workforcePercentage",
    header: "Persentase Angkatan Kerja terhadap Penduduk Usia Kerja",
    rowSpan: 2,
    render: (v) => formattedNumber(v, 2),
  },
];
const footers: Footer<CitizenEducationData>[] = [
  {
    render: () => "Total",
  },
  {
    render: (items) => footerCounter(items, (d) => d.employers),
  },
  {
    render: (items) => footerCounter(items, (d) => d.unemployers),
  },
  {
    render: (items) => footerCounter(items, (d) => d.totalEmployers),
  },
  {
    render: (items) => footerCounter(items, (d) => d.percentage, "avg"),
  },
  {
    render: (items) => footerCounter(items, (d) => d.notWorkforce),
  },
  {
    render: (items) => footerCounter(items, (d) => d.total),
  },
  {
    render: (items) =>
      footerCounter(items, (d) => d.workforcePercentage, "avg"),
  },
];
const sourceInfo =
  "Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus/BPS-Statistics Indonesia, August National Labor Force Survey";
const NoteSection = () => (
  <div className="mt-8 flex gap-8 text-xs text-[#23272E] font-medium">
    <div>Catatan:</div>
    <div className="flex-1">
      <ul className="flex gap-8">
        <li>0 ≤ Sekolah Dasar (SD)</li>
        <li>1. Sekolah Menengah Pertama</li>
        <li>2. Sekolah Menengah Atas</li>
        <li>3. Perguruan Tinggi</li>
      </ul>
      <ul className="mt-2 flex gap-8">
        <li>1. Mencari pekerjaan</li>
        <li>2. Mempersiapkan usaha</li>
        <li>3. Merasa tidak mungkin mendapat pekerjaan</li>
        <li>4. Sudah punya pekerjaan tetapi belum mulai bekerja</li>
      </ul>
    </div>
  </div>
);

export const CitizenEducationTable = () => {
  const { data } = useRequest(() => getTableData("citizenEducationData"));

  return (
    <Table
      title={title}
      columns={columns}
      footers={footers}
      data={data ?? []}
      sourceInfo={sourceInfo}
      noteSection={<NoteSection />}
    />
  );
};

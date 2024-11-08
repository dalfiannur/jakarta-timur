import { formattedNumber } from "@/utils/format-number";
import { getTableData, JobSeekerData } from "../../actions";
import { Column, Footer, footerCounter, Table } from "../../Table";

const columns: Column[] = [
  {
    key: "qualification",
    header: "Pendidikan",
    rowSpan: 2,
  },
  {
    key: null,
    header: "Pencari Kerja",
    colSpan: 3,
    compact: true,
    children: [
      {
        key: "data.0.male",
        header: "Laki-Laki",
        compact: true,
        nowrap: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "data.0.female",
        header: "Perempuan",
        compact: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "data.0.total",
        header: "Jumlah",
        compact: true,
        render: (v) => formattedNumber(v),
      },
    ],
  },
  {
    key: null,
    header: "Pencari Kerja",
    colSpan: 3,
    compact: true,
    children: [
      {
        key: "data.1.male",
        header: "Laki-Laki",
        compact: true,
        nowrap: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "data.1.female",
        header: "Perempuan",
        compact: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "data.1.total",
        header: "Jumlah",
        compact: true,
        render: (v) => formattedNumber(v),
      },
    ],
  },
  {
    key: null,
    header: "Pencari Kerja",
    colSpan: 3,
    compact: true,
    children: [
      {
        key: "data.2.male",
        header: "Laki-Laki",
        compact: true,
        nowrap: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "data.2.female",
        header: "Perempuan",
        compact: true,
        render: (v) => formattedNumber(v),
      },
      {
        key: "data.2.total",
        header: "Jumlah",
        compact: true,
        render: (v) => formattedNumber(v),
      },
    ],
  },
];
const footers: Footer<JobSeekerData>[] = [
  {
    render: () => "Total",
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[0].male),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[0].female),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[0].total),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[1].male),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[1].female),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[1].total),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[2].male),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[2].female),
  },
  {
    render: (items) => footerCounter(items, (d) => d.data[2].total),
  },
];

const NoteSection = () => (
  <div className="mt-8 flex gap-8 text-xs text-[#23272E] font-medium">
    <div>Note:</div>
    <div className="flex-1">
      <ul className="flex gap-8">
        <li>0 ≤ Sekolah Dasar (SD)</li>
        <li>1. Sekolah Menengah Pertama</li>
        <li>2. Sekolah Menengah Atas</li>
        <li>3. Perguruan Tinggi</li>
      </ul>
      <ul className="flex gap-8">
        <li>1. Mencari pekerjaan</li>
        <li>2. Mempersiapkan usaha</li>
        <li>3. Merasa tidak mungkin mendapat pekerjaan</li>
        <li>4. Sudah punya pekerjaan tetapi belum mulai bekerja</li>
      </ul>
    </div>
  </div>
);

export default async function Page() {
  const data = await getTableData("jobseekerData");

  return (
    <Table
      px={4}
      title="Jumlah Pencari Kerja Lowongan dan Penempatan yang Terdaftar Menurut Pendidikan di Kota Jakarta Timur, 2020"
      columns={columns}
      footers={footers}
      data={data}
      sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
      noteSection={<NoteSection />}
    />
  );
}

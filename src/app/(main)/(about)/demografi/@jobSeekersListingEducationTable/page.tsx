"use client";
import { formattedNumber } from "@/utils/format-number";
import { Table } from "@/app/components/Table";
import { Icon } from "@/app/icons";
import data from "./data.json";
import { createColumnHelper } from "@tanstack/react-table";
import _ from "lodash";
import { JobSeekersListingEducation } from "./type";

const footerSumCounter = (values: number[]) => formattedNumber(_.sum(values));

const columnHelper = createColumnHelper<JobSeekersListingEducation>();
const columns = [
  columnHelper.accessor("qualification", {
    header: "Pendidikan",
    footer: () => "Total",
    meta: {
      rowSpan: 2,
    },
  }),
  columnHelper.group({
    id: "jobseekers_0",
    header: "Pencari Kerja",
    columns: [
      columnHelper.accessor("d0.male", {
        header: "Laki-Laki",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d0_male")),
          ),
      }),
      columnHelper.accessor("d0.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d0_female")),
          ),
      }),
      columnHelper.accessor("d0.total", {
        header: "Total",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d0_total")),
          ),
      }),
    ],
  }),
  columnHelper.group({
    id: "jobseekers_1",
    header: "Pencari Kerja",
    columns: [
      columnHelper.accessor("d1.male", {
        header: "Laki-Laki",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d1_male")),
          ),
      }),
      columnHelper.accessor("d1.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d1_female")),
          ),
      }),
      columnHelper.accessor("d1.total", {
        header: "Total",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d1_total")),
          ),
      }),
    ],
  }),
  columnHelper.group({
    id: "jobseekers_2",
    header: "Pencari Kerja",
    columns: [
      columnHelper.accessor("d2.male", {
        header: "Laki-Laki",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d2_male")),
          ),
      }),
      columnHelper.accessor("d2.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d2_female")),
          ),
      }),
      columnHelper.accessor("d2.total", {
        header: "Total",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("d2_total")),
          ),
      }),
    ],
  }),
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

export default function Page() {
  return (
    <div className="p-10 rounded-2xl border">
      <h4 className="text-center font-bold font-plus-jakarta-sans text-xl mb-6">
        Jumlah Pencari Kerja Lowongan dan Penempatan yang Terdaftar Menurut
        Pendidikan di Kota Jakarta Timur, 2020
      </h4>
      <Table columns={columns} data={data.data} />
      <NoteSection />
      <div className="mt-6 flex gap-2 text-sm text-blue-500 font-bold font-plus-jakarta-sans">
        <Icon name="Info" size={16} />
        <p>
          Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI
          Jakarta/Manpower and Transmigration Office of DKI Jakarta Province
        </p>
      </div>
    </div>
  );
}

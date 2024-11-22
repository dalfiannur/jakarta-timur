"use client";
import { formattedNumber } from "@/utils/format-number";
import { Table } from "../_components/Table";
import { Icon } from "@/app/icons";
import { createColumnHelper } from "@tanstack/react-table";
import _ from "lodash";
import data from "../_data/population-education-activity-table.json";

type PopulationEducationActivity = {
  id: number;
  employers: number;
  unemployers: number;
  totalEmployers: number;
  percentage: number;
  notWorkforce: number;
  total: number;
  workforcePercentage: number;
};

const footerSumCounter = (values: number[]) => formattedNumber(_.sum(values));
const footerAvgCounter = (values: number[]) =>
  formattedNumber(_.mean(values), 2);

const columnHelper = createColumnHelper<PopulationEducationActivity>();
const columns = [
  columnHelper.accessor("id", {
    header: () => "Pendidikan Tertinggi yang Ditamatkan",
    footer: () => "Total",
    meta: {
      rowSpan: 2,
    },
  }),
  columnHelper.group({
    id: "workforce",
    header: () => "Angkatan Kerja",
    columns: [
      columnHelper.accessor("employers", {
        header: () => "Bekerja",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("employers"))
          ),
      }),
      columnHelper.accessor("unemployers", {
        header: "Pengangguran",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("unemployers"))
          ),
      }),
      columnHelper.accessor("totalEmployers", {
        header: () => "Jumlah Angkatan Kerja",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("totalEmployers"))
          ),
      }),
    ],
  }),
  columnHelper.accessor("percentage", {
    header: "Persentase Bekerja Terhadap Angkatan Kerja",
    footer: ({ table }) =>
      footerAvgCounter(
        table
          .getPrePaginationRowModel()
          .rows.map((d) => d.getValue("percentage"))
      ),
    meta: {
      rowSpan: 2,
    },
  }),
  columnHelper.accessor("notWorkforce", {
    header: "Bukan Angkatan Kerja",
    footer: ({ table }) =>
      footerSumCounter(
        table
          .getPrePaginationRowModel()
          .rows.map((d) => d.getValue("notWorkforce"))
      ),
    meta: {
      rowSpan: 2,
    },
  }),
  columnHelper.accessor("total", {
    header: "Jumlah",
    footer: ({ table }) =>
      footerSumCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("total"))
      ),
    meta: {
      rowSpan: 2,
    },
  }),
  columnHelper.accessor("workforcePercentage", {
    header: "Persentase Angkatan Kerja terhadap Penduduk Usia Kerja",
    footer: ({ table }) =>
      footerAvgCounter(
        table
          .getPrePaginationRowModel()
          .rows.map((d) => d.getValue("workforcePercentage"))
      ),
    meta: {
      rowSpan: 2,
    },
  }),
];

const NoteSection = () => (
  <div className="mt-4 lg:mt-8 flex gap-2 lg:gap-8 text-xs text-[#23272E] font-medium">
    <div>Catatan:</div>
    <div className="flex-1">
      <ul className="flex flex-col lg:flex-row gap-0 lg:gap-8">
        <li>0 ≤ Sekolah Dasar (SD)</li>
        <li>1. Sekolah Menengah Pertama</li>
        <li>2. Sekolah Menengah Atas</li>
        <li>3. Perguruan Tinggi</li>
      </ul>
      <ul className="mt-4 lg:mt-2 flex flex-col lg:flex-row gap-0 lg:gap-8">
        <li>1. Mencari pekerjaan</li>
        <li>2. Mempersiapkan usaha</li>
        <li>3. Merasa tidak mungkin mendapat pekerjaan</li>
        <li>4. Sudah punya pekerjaan tetapi belum mulai bekerja</li>
      </ul>
    </div>
  </div>
);

export const PopulationEducationActivityTableSection = () => {
  return (
    <div className="p-4 lg:p-10 rounded-2xl border-none lg:border">
      <h4 className="text-center font-bold font-plus-jakarta-sans text-base lg:text-xl mb-6">
        Penduduk Berumur 15 Tahun ke Atas Menurut Pendidikan Tertinggi yang
        Ditamatkan dan Jenis Kegiatan Selama Seminggu yang Lalu di Kota Jakarta
        Timur, 2020
      </h4>
      <Table columns={columns} data={data.data} />
      <NoteSection />
      <div className="mt-3 lg:mt-6 flex gap-2 text-xs lg:text-sm text-blue-500 font-bold font-plus-jakarta-sans">
        <Icon name="Info" className="w-4 h-4" />
        <p>
          Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas)
          Agustus/BPS-Statistics Indonesia, August National Labor Force Survey
        </p>
      </div>
    </div>
  );
};

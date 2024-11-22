"use client";
import { Table } from "../_components/Table";
import data from "../_data/jobseekers-overview.json";
import { formattedNumber } from "@/utils/format-number";
import { createColumnHelper } from "@tanstack/react-table";
import { Icon } from "@/app/icons";
import _ from "lodash";

type JobStatsOverview = {
  description: string;
  male: number | null;
  female: number | null;
  total: number | null;
};

const footerSumCounter = (values: number[]) => formattedNumber(_.sum(values));
const footerAvgCounter = (values: number[]) =>
  formattedNumber(_.mean(values), 2);

const columnHelper = createColumnHelper<JobStatsOverview>();
const columns = [
  columnHelper.accessor("description", {
    header: () => "Kecamatan",
    cell: (cell) => <div className="text-left">{cell.getValue()}</div>,
    footer: () => "Kota Jakarta Timur",
  }),
  columnHelper.accessor("male", {
    header: () => "Laki-Laki",
    footer: ({ table }) =>
      footerSumCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("male"))
      ),
  }),
  columnHelper.accessor("female", {
    header: () => "Perempuan",
    footer: ({ table }) =>
      footerSumCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("female"))
      ),
  }),
  columnHelper.accessor("total", {
    header: () => "Jumlah",
    footer: ({ table }) =>
      footerAvgCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("total"))
      ),
  }),
];

export const JobSeekersOverviewTableSection = () => {
  return (
    <div className="p-4 lg:p-10 rounded-2xl border-none lg:border">
      <h4 className="text-center font-bold font-plus-jakarta-sans text-base lg:text-xl mb-6">
        Ikhtisar Statistik Antar Kerja Kota Jakarta Timur, 2020
      </h4>
      <Table columns={columns} data={data.data} />
      <div className="mt-6 flex gap-2 text-xs lg:text-sm text-blue-500 font-bold font-plus-jakarta-sans">
        <Icon name="Info" className="w-4 h-4" />
        <p>
          Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI
          Jakarta/Manpower and Transmigration Office of DKI Jakarta Province
        </p>
      </div>
    </div>
  );
};

"use client";
import { formattedNumber } from "@/utils/format-number";
import { Table } from "@/app/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import { PopulationGrowth } from "./type";
import data from "./data.json";
import _ from "lodash";
import { Icon } from "@/app/icons";

const footerSumCounter = (values: number[]) => formattedNumber(_.sum(values));
const footerAvgCounter = (values: number[]) =>
  formattedNumber(_.mean(values), 2);

const columnHelper = createColumnHelper<PopulationGrowth>();
const columns = [
  columnHelper.accessor("district", {
    header: () => "Kecamatan",
    footer: () => "Kota Jakarta Timur",
  }),
  columnHelper.accessor("citizen", {
    header: () => <div className="whitespace-nowrap">Penduduk (Jiwa)</div>,
    footer: ({ table }) =>
      footerSumCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("citizen")),
      ),
  }),
  columnHelper.accessor("growth", {
    header: () => (
      <div>
        <div>Laju Pertumbuhan Penduduk</div>
        <div>2010-2020 (%)</div>
      </div>
    ),
    footer: ({ table }) =>
      footerSumCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("growth")),
      ),
  }),
  columnHelper.accessor("percentage", {
    header: "Persentase Penduduk",
    footer: ({ table }) =>
      footerAvgCounter(
        table
          .getPrePaginationRowModel()
          .rows.map((d) => d.getValue("percentage")),
      ),
  }),
  columnHelper.accessor("depth", {
    header: "Kepadatan Penduduk per km2",
    footer: ({ table }) =>
      footerSumCounter(
        table.getPrePaginationRowModel().rows.map((d) => d.getValue("depth")),
      ),
  }),
  columnHelper.accessor("genderRatio", {
    header: "Rasio Jenis Kelamin Penduduk",
    footer: ({ table }) =>
      footerAvgCounter(
        table
          .getPrePaginationRowModel()
          .rows.map((d) => d.getValue("genderRatio")),
      ),
  }),
];

export default function Page() {
  return (
    <div className="p-10 rounded-2xl border">
      <h4 className="text-center font-bold font-plus-jakarta-sans text-xl mb-6">
        Penduduk, Laju Pertumbuhan Penduduk per Tahun, Distribusi Persentase
        Penduduk, Kepadatan Penduduk, Rasio Jenis Kelamin Penduduk Menurut
        Kecamatan Kota Jakarta Timur, 2020
      </h4>
      <Table columns={columns} data={data.data} />
      <div className="mt-6 flex gap-2 text-sm text-blue-500 font-bold font-plus-jakarta-sans">
        <Icon name="Info" size={16} />
        <p>Sumber: Hasil Sensus Penduduk 2020 (September)</p>
      </div>
    </div>
  );
}

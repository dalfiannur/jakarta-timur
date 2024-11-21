"use client";
import { formattedNumber } from "@/utils/format-number";
import { Table } from "../_components/Table";
import { Icon } from "@/app/icons";
import { createColumnHelper } from "@tanstack/react-table";
import _ from "lodash";
import data from "../_data/birth-death-reg-table.json";

type BirthDeathRegistration = {
  district: string;
  domestic: {
    male: number;
    female: number;
    total: number;
  };
  foreigner: {
    male: number;
    female: number;
    total: number;
  };
};

const footerSumCounter = (values: number[]) => formattedNumber(_.sum(values));
const footerAvgCounter = (values: number[]) =>
  formattedNumber(_.mean(values), 2);

const columnHelper = createColumnHelper<BirthDeathRegistration>();
const columns = [
  columnHelper.accessor("district", {
    header: () => "Kecamatan",
    footer: () => "Kota Jakarta Timur",
    meta: {
      rowSpan: 2,
    },
  }),
  columnHelper.group({
    id: "wni",
    header: "WNI",
    columns: [
      columnHelper.accessor("domestic.male", {
        header: "Laki-Laki",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("domestic_male"))
          ),
      }),
      columnHelper.accessor("domestic.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("domestic_female"))
          ),
      }),
      columnHelper.accessor("domestic.total", {
        header: "Jumlah",
        footer: ({ table }) =>
          footerAvgCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("domestic_total"))
          ),
      }),
    ],
  }),
  columnHelper.group({
    id: "wna",
    header: "WNA",
    columns: [
      columnHelper.accessor("foreigner.male", {
        header: "Laki-Laki",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("foreigner_male"))
          ),
      }),
      columnHelper.accessor("foreigner.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("foreigner_female"))
          ),
      }),
      columnHelper.accessor("foreigner.total", {
        header: "Jumlah",
        footer: ({ table }) =>
          footerAvgCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("foreigner_total"))
          ),
      }),
    ],
  }),
];

export const BirthDeathRegTableSection = () => {
  return (
    <div className="p-4 lg:p-10 rounded-2xl border-none lg:border">
      <h4 className="text-center font-bold font-plus-jakarta-sans text-base lg:text-xl mb-6">
        Registrasi Penduduk Menurut Jenis Kelamin dan Kecamatan di Kota Jakarta
        Timur, 2020
      </h4>
      <Table columns={columns} data={data.data} />
      <div className="mt-6 flex gap-2 text-xs lg:text-sm text-blue-500 font-bold font-plus-jakarta-sans">
        <Icon name="Info" size={16} />
        <p>Sumber: Hasil Sensus Penduduk 2020 (September)</p>
      </div>
    </div>
  );
};

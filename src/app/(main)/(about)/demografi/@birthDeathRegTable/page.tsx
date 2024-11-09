"use client";
import { formattedNumber } from "@/utils/format-number";
import { Table } from "@/app/components/Table";
import { Icon } from "@/app/icons";
import { createColumnHelper } from "@tanstack/react-table";
import _ from "lodash";
import data from "./data.json";
import { BirthDeathRegistration } from "./type";

// const columns: Column[] = [
//   {
//     key: "district",
//     header: "Kecamatan",
//     rowSpan: 2,
//   },
//   {
//     key: null,
//     header: "WNI",
//     colSpan: 3,
//     compact: true,
//     children: [
//       {
//         key: "domestic.male",
//         header: "Laki-Laki",
//         compact: true,
//         render: (v) => formattedNumber(v),
//       },
//       {
//         key: "domestic.female",
//         header: "Laki-Laki",
//         compact: true,
//         render: (v) => formattedNumber(v),
//       },
//       {
//         key: "domestic.total",
//         header: "Jumlah",
//         compact: true,
//         render: (v) => formattedNumber(v),
//       },
//     ],
//   },
//   {
//     key: null,
//     header: "WNA",
//     colSpan: 3,
//     compact: true,
//     children: [
//       {
//         key: "foreigner.male",
//         header: "Laki-Laki",
//         compact: true,
//         render: (v) => formattedNumber(v),
//       },
//       {
//         key: "foreigner.female",
//         header: "Perempuan",
//         compact: true,
//         render: (v) => formattedNumber(v),
//       },
//       {
//         key: "foreigner.total",
//         header: "Jumlah",
//         compact: true,
//         render: (v) => formattedNumber(v),
//       },
//     ],
//   },
// ];
// const footers: Footer<CitizenBirthRegistrationData>[] = [
//   {
//     render: () => "Kota Jakarta Timur",
//     nowrap: true,
//   },
//   {
//     render: (items) => footerCounter(items, (d) => d.domestic.male),
//   },
//   {
//     render: (items) => footerCounter(items, (d) => d.domestic.female),
//   },
//   {
//     render: (items) => footerCounter(items, (d) => d.domestic.total),
//   },
//   {
//     render: (items) => footerCounter(items, (d) => d.foreigner.male),
//   },
//   {
//     render: (items) => footerCounter(items, (d) => d.foreigner.female),
//   },
//   {
//     render: (items) => footerCounter(items, (d) => d.foreigner.total),
//   },
// ];

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
              .rows.map((d) => d.getValue("domestic_male")),
          ),
      }),
      columnHelper.accessor("domestic.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("domestic_female")),
          ),
      }),
      columnHelper.accessor("domestic.total", {
        header: "Jumlah",
        footer: ({ table }) =>
          footerAvgCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("domestic_total")),
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
              .rows.map((d) => d.getValue("foreigner_male")),
          ),
      }),
      columnHelper.accessor("foreigner.female", {
        header: "Perempuan",
        footer: ({ table }) =>
          footerSumCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("foreigner_female")),
          ),
      }),
      columnHelper.accessor("foreigner.total", {
        header: "Jumlah",
        footer: ({ table }) =>
          footerAvgCounter(
            table
              .getPrePaginationRowModel()
              .rows.map((d) => d.getValue("foreigner_total")),
          ),
      }),
    ],
  }),
];

export default function Page() {
  return (
    <div className="p-10 rounded-2xl border">
      <h4 className="text-center font-bold font-plus-jakarta-sans text-xl mb-6">
        Registrasi Penduduk Menurut Jenis Kelamin dan Kecamatan di Kota Jakarta
        Timur, 2020
      </h4>
      <Table columns={columns} data={data.data} />
      <div className="mt-6 flex gap-2 text-sm text-blue-500 font-bold font-plus-jakarta-sans">
        <Icon name="Info" size={16} />
        <p>Sumber: Hasil Sensus Penduduk 2020 (September)</p>
      </div>
    </div>
  );
}

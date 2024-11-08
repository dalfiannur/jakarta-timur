"use client";
import { formattedNumber } from "@/utils/format-number";
import { Table } from "../../Table";
import { CitizenBirthRegistrationData, getTableData } from "../../actions";
import { useRequest } from "ahooks";

const title =
  "Registrasi Penduduk Menurut Jenis Kelamin dan Kecamatan di Kota Jakarta Timur, 2020";
const sourceInfo = "Sumber: Hasil Sensus Penduduk 2020 (September)";
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

export default function Page() {
  const { data } = useRequest(() =>
    getTableData("citizenBirthRegistrationData"),
  );

  return (
    <Table
      title={title}
      columns={[]}
      sourceInfo={sourceInfo}
      data={data ?? []}
    />
  );
}

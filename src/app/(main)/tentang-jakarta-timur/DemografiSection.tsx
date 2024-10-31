"use client";
import { SectionTitle } from "./SectionTitle";
import { CitizenGrowthStatistic } from "./CitizenGrowthStatistic";
import { CitizenCountStatistic } from "./CitizenCountStatistic";
import { CitizenOverview } from "./CitizenOverview";
import { BirthRegistrationStatistic } from "./BirthRegistrationStatistic";
import { CitizenCountStatusStatistic } from "./CitizenCountStatusStatistic";
import { Column, Footer, Table } from "./Table";
import { formattedNumber } from "@/utils/format-number";
import data from "./data.json";
import _ from "lodash";
import { ReactNode } from "react";

const citizenGrowthStatisticData = [
  {
    label: "Pasar Rebo",
    value: 6,
  },
  {
    label: "Ciracas",
    value: 16,
  },
  {
    label: "Cipayung",
    value: 40,
  },
  {
    label: "Makasar",
    value: 20,
  },
  {
    label: "Kramat Jati",
    value: 30,
  },
  {
    label: "Jatinegara",
    value: 15,
  },
  {
    label: "Duren Sawit",
    value: 3,
  },
  {
    label: "Cakung",
    value: 23,
  },
  {
    label: "Pulo Gadung",
    value: 26,
  },
  {
    label: "Matraman",
    value: 40,
  },
];

const footerCounter = <T,>(
  items: T[],
  callback: (item: T) => number | string,
  type: "sum" | "avg" = "sum",
) => {
  let value: number;
  if (type === "sum") {
    value = items
      .map(callback)
      .filter((d) => typeof d === "number")
      .reduce((a, b) => a + b, 0);
  } else {
    value = _.mean(items.map(callback).filter((d) => typeof d === "number"));
  }

  return formattedNumber(value, type === "sum" ? 0 : 2);
};

type TableOptions<T> = {
  title: string;
  columns: Column[];
  footers: Footer<T>[];
  sourceInfo?: string;
  noteSection?: ReactNode;
};

const citizenGrowthOptions: TableOptions<(typeof data.citizenGrowth)["0"]> = {
  title:
    "Penduduk, Laju Pertumbuhan Penduduk per Tahun, Distribusi Persentase Penduduk, Kepadatan Penduduk, Rasio Jenis Kelamin Penduduk Menurut Kecamatan Kota Jakarta Timur, 2020",
  columns: [
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
  ],
  footers: [
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
  ],
};

const citizenRegistrationOptions: TableOptions<
  (typeof data.citizenBirthRegistrations)["0"]
> = {
  title:
    "Registrasi Penduduk Menurut Jenis Kelamin dan Kecamatan di Kota Jakarta Timur, 2020",
  columns: [
    {
      key: "district",
      header: "Kecamatan",
      rowSpan: 2,
    },
    {
      key: null,
      header: "WNI",
      colSpan: 3,
      compact: true,
      children: [
        {
          key: "domestic.male",
          header: "Laki-Laki",
          compact: true,
          render: (v) => formattedNumber(v),
        },
        {
          key: "domestic.female",
          header: "Laki-Laki",
          compact: true,
          render: (v) => formattedNumber(v),
        },
        {
          key: "domestic.total",
          header: "Jumlah",
          compact: true,
          render: (v) => formattedNumber(v),
        },
      ],
    },
    {
      key: null,
      header: "WNA",
      colSpan: 3,
      compact: true,
      children: [
        {
          key: "foreigner.male",
          header: "Laki-Laki",
          compact: true,
          render: (v) => formattedNumber(v),
        },
        {
          key: "foreigner.female",
          header: "Perempuan",
          compact: true,
          render: (v) => formattedNumber(v),
        },
        {
          key: "foreigner.total",
          header: "Jumlah",
          compact: true,
          render: (v) => formattedNumber(v),
        },
      ],
    },
  ],
  footers: [
    {
      render: () => "Kota Jakarta Timur",
      nowrap: true,
    },
    {
      render: (items) => footerCounter(items, (d) => d.domestic.male),
    },
    {
      render: (items) => footerCounter(items, (d) => d.domestic.female),
    },
    {
      render: (items) => footerCounter(items, (d) => d.domestic.total),
    },
    {
      render: (items) => footerCounter(items, (d) => d.foreigner.male),
    },
    {
      render: (items) => footerCounter(items, (d) => d.foreigner.female),
    },
    {
      render: (items) => footerCounter(items, (d) => d.foreigner.total),
    },
  ],
  sourceInfo: "Sumber: Hasil Sensus Penduduk 2020 (September)",
};

const citizenEducationOptions: TableOptions<
  (typeof data.citizenEducations)["0"]
> = {
  title:
    "Penduduk Berumur 15 Tahun ke Atas Menurut Pendidikan Tertinggi yang Ditamatkan dan Jenis Kegiatan Selama Seminggu yang Lalu di Kota Jakarta Timur, 2020",
  columns: [
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
  ],
  footers: [
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
  ],
  sourceInfo:
    "Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus/BPS-Statistics Indonesia, August National Labor Force Survey",
  noteSection: (
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
  ),
};

const jobseekerOptions: TableOptions<(typeof data.jobseekers)["0"]> = {
  title:
    "Jumlah Pencari Kerja Lowongan dan Penempatan yang Terdaftar Menurut Pendidikan di Kota Jakarta Timur, 2020",
  columns: [
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
  ],
  footers: [
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
  ],
  sourceInfo:
    "Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province",
  noteSection: (
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
  ),
};

export const DemografiSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle>Demografi</SectionTitle>
      <CitizenOverview />
      <CitizenGrowthStatistic data={citizenGrowthStatisticData} />

      <Table {...citizenGrowthOptions} data={data.citizenGrowth} />

      <div className="grid grid-cols-2 gap-6">
        <CitizenCountStatistic
          title="Penduduk Menurut Jenis Kelamin dan Usia Kota Jakarta Timur, 2020"
          total={[
            { label: "Total Keseluruhan", value: 3_037_139 },
            { label: "Jenis Kelamin Laki-Laki", value: 1_529_659 },
            { label: "Jenis Kelamin Perempuan", value: 1_507_480 },
          ]}
          height={700}
          data={[
            {
              label: "0 - 4th",
              value: [1, 2],
              id: 1,
            },
            {
              label: "5 - 9th",
              value: [2, 3],
              id: 2,
            },
            {
              label: "10 - 14th",
              value: [3, 4],
              id: 3,
            },
            {
              label: "15 - 19th",
              value: [4, 5],
              id: 4,
            },
            {
              label: "20 - 24th",
              value: [5, 6],
              id: 5,
            },
            {
              label: "25 - 29th",
              value: [6, 7],
              id: 6,
            },
            {
              label: "30 - 34th",
              value: [7, 8],
              id: 7,
            },
            {
              label: "35 - 39th",
              value: [8, 7],
              id: 8,
            },
            {
              label: "40 - 44th",
              value: [7, 6],
              id: 9,
            },
            {
              label: "45 - 49th",
              value: [6, 5],
              id: 10,
            },
            {
              label: "50 - 54th",
              value: [5, 4],
              id: 11,
            },
            {
              label: "55 - 59th",
              value: [4, 3],
              id: 12,
            },
            {
              label: "60 - 64th",
              value: [3, 2],
              id: 13,
            },
            {
              label: "65 - 69th",
              value: [2, 1],
              id: 14,
            },
            {
              label: "70 - 74th",
              value: [1, 2],
              id: 15,
            },
            {
              label: "75+th",
              value: [2, 3],
              id: 16,
            },
          ]}
        />
        <CitizenCountStatistic
          title="Penduduk Menurut Jenis Kelamin dan Kecamatan Kota Jakarta Timur, 2020"
          total={[
            { label: "Total Keseluruhan", value: 3_037_139 },
            { label: "Jenis Kelamin Laki-Laki", value: 1_529_659 },
            { label: "Jenis Kelamin Perempuan", value: 1_507_480 },
          ]}
          height={600}
          data={[
            {
              label: "Pasar Rebo",
              value: [3, 3],
              id: 1,
            },
            {
              label: "Ciracas",
              value: [3, 3],
              id: 2,
            },
            {
              label: "Cipayung",
              value: [3, 3],
              id: 3,
            },
            {
              label: "Makasar",
              value: [3, 3],
              id: 4,
            },
            {
              label: "Kramat Jati",
              value: [3, 3],
              id: 5,
            },
            {
              label: "Jatinegara",
              value: [3, 3],
              id: 6,
            },
            {
              label: "Duren Sawit",
              value: [3, 3],
              id: 7,
            },
            {
              label: "Cakung",
              value: [3, 3],
              id: 8,
            },
            {
              label: "Pulo Gadung",
              value: [3, 3],
              id: 9,
            },
            {
              label: "Matraman",
              value: [3, 3],
              id: 10,
            },
          ]}
        />
      </div>

      <BirthRegistrationStatistic />

      <Table
        {...citizenRegistrationOptions}
        data={data.citizenBirthRegistrations}
      />

      <div className="grid grid-cols-2 gap-6">
        <CitizenCountStatusStatistic
          marginLeft={200}
          legend
          height={550}
          title="Jumlah Penduduk Berumur 15 Tahun Keatas Menurut Jenis Kegiatan Selama Seminggu yang Lalu dan Jenis Kelamin di Kota Jakarta Timur, 2020"
          sourceInfo="Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus/BPS-Statistics Indonesia, August National Labor Force Survey"
          total={[
            {
              label: "Total Keseluruhan",
              value: 2_236_887,
            },
            {
              label: "Jenis Kelamin Laki-Laki",
              value: 1_127_899,
            },
            {
              label: "Jenis Kelamin Perempuan",
              value: 1_108_988,
            },
          ]}
          data={[
            {
              id: 1,
              label: "Angkatan Kerja",
              value: [11, 10],
            },
            {
              id: 2,
              label: "Bekerja",
              value: [12, 11],
            },
            {
              id: 3,
              label: "Pengangguran Terbuka",
              value: [13, 12],
            },
            {
              id: 4,
              label: "Bukan Angkatan Kerja",
              value: [14, 13],
            },
            {
              id: 5,
              label: "Sekolah",
              value: [15, 14],
            },
            {
              id: 6,
              label: "Mengurus Rumah Tangga",
              value: [16, 15],
            },
            {
              id: 7,
              label: "Lainnya",
              value: [17, 16],
            },
          ]}
        />
        <CitizenCountStatusStatistic
          legend
          marginLeft={200}
          height={480}
          title="Penduduk Berumur 15 Tahun Ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Status Pekerjaan Utama dan Jenis Kelamin di Kota Jakarta Timur, 2020"
          sourceInfo="Sumber: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus"
          total={[
            {
              label: "Total Keseluruhan",
              value: 1_257_752,
            },
            {
              label: "Jenis Kelamin Laki-Laki",
              value: 796_511,
            },
            {
              label: "Jenis Kelamin Perempuan",
              value: 461_241,
            },
          ]}
          data={[
            {
              id: 1,
              label: "Berusaha Sendiri",
              value: [11, 10],
            },
            {
              id: 2,
              label: "Berusaha dibantu buruh tidak tetap/buruh tidak dibayar",
              value: [12, 11],
            },
            {
              id: 3,
              label: "Berusaha dibantu buruh tetap/buruh dibayar",
              value: [13, 12],
            },
            {
              id: 4,
              label: "Buruh/Karyawan/Pegawai",
              value: [14, 13],
            },
            {
              id: 5,
              label: "Pekerja Bebas",
              value: [15, 14],
            },
            {
              id: 6,
              label: "Pekerja keluarga/tak dibawar",
              value: [16, 15],
            },
          ]}
        />
      </div>

      <Table {...citizenEducationOptions} data={data.citizenEducations} />

      <Table {...jobseekerOptions} data={data.jobseekers} />

      <div className="grid grid-cols-2 gap-6">
        <CitizenCountStatusStatistic
          marginLeft={200}
          legend
          height={550}
          title="Jumlah Pencari Kerja yang Belum Ditempatkan Menurut Golongan Jabatan dan Jenis Kelamin di Kota Jakarta Timur, 2020"
          sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
          total={[
            {
              label: "Total Keseluruhan",
              value: 2_236_887,
            },
            {
              label: "Jenis Kelamin Laki-Laki",
              value: 1_127_899,
            },
            {
              label: "Jenis Kelamin Perempuan",
              value: 1_108_988,
            },
          ]}
          data={[
            {
              id: 1,
              label: "Angkatan Kerja",
              value: [11, 10],
            },
            {
              id: 2,
              label: "Bekerja",
              value: [12, 11],
            },
            {
              id: 3,
              label: "Pengangguran Terbuka",
              value: [13, 12],
            },
            {
              id: 4,
              label: "Bukan Angkatan Kerja",
              value: [14, 13],
            },
            {
              id: 5,
              label: "Sekolah",
              value: [15, 14],
            },
            {
              id: 6,
              label: "Mengurus Rumah Tangga",
              value: [16, 15],
            },
            {
              id: 7,
              label: "Lainnya",
              value: [17, 16],
            },
          ]}
        />
        <CitizenCountStatusStatistic
          legend
          marginLeft={200}
          height={480}
          title="Jumlah Pencari Kerja yang Belum Ditempatkan Menurut Tingkat Pendidikan di Kota Jakarta Timur, 2020"
          sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
          total={[
            {
              label: "Total Keseluruhan",
              value: 1_257_752,
            },
            {
              label: "Jenis Kelamin Laki-Laki",
              value: 796_511,
            },
            {
              label: "Jenis Kelamin Perempuan",
              value: 461_241,
            },
          ]}
          data={[
            {
              id: 1,
              label: "Berusaha Sendiri",
              value: [11, 10],
            },
            {
              id: 2,
              label: "Berusaha dibantu buruh tidak tetap/buruh tidak dibayar",
              value: [12, 11],
            },
            {
              id: 3,
              label: "Berusaha dibantu buruh tetap/buruh dibayar",
              value: [13, 12],
            },
            {
              id: 4,
              label: "Buruh/Karyawan/Pegawai",
              value: [14, 13],
            },
            {
              id: 5,
              label: "Pekerja Bebas",
              value: [15, 14],
            },
            {
              id: 6,
              label: "Pekerja keluarga/tak dibawar",
              value: [16, 15],
            },
          ]}
        />
      </div>

      <Table
        title="Ikhtisar Statistik Antar Kerja Kota Jakarta Timur, 2020"
        columns={[
          {
            key: "description",
            header: "Uraian",
            textAlign: "left",
            maxWidth: 200,
          },
          {
            key: "male",
            header: "Laki-Laki",
          },
          {
            key: "female",
            header: "Perempuan",
          },
          {
            key: "total",
            header: "Jumlah",
          },
        ]}
        data={[
          {
            description: "A. Pencari Kerja/Penempatan/Job Seekers/Placement",
            male: "",
            female: "",
            total: "",
          },
          {
            description: "Pencari kerja yang belum ditempatkan awal tahun",
            male: 2_060,
            female: 1_934,
            total: 3_994,
          },
          {
            description: "Pencari kerja yang terdaftar",
            male: 1_959,
            female: 1_185,
            total: 3_144,
          },
          {
            description: "Pencari kerja yang ditempatkan",
            male: 1_424,
            female: 787,
            total: 2.211,
          },
          {
            description: "Pencari kerja yang dihapus",
            male: 0,
            female: 0,
            total: 0,
          },
          {
            description: "B. Lowongan yang ada",
            male: "",
            female: "",
            total: "",
          },
          {
            description: "Lowongan yang belum dipenuhi",
            male: 606,
            female: 449,
            total: 1_055,
          },
          {
            description: "Lowongan yang terdaftar",
            male: 1_799,
            female: 1_059,
            total: 2_858,
          },
          {
            description: "Lowongan yang dipenuhi",
            male: 1_424,
            female: 787,
            total: 2_211,
          },
          {
            description: "Lowongan yang dihapus",
            male: 0,
            female: 0,
            total: 0,
          },
          {
            description: "Lowongan yang belum dihapus",
            male: 0,
            female: 0,
            total: 0,
          },
        ]}
        footers={[
          {
            render: () => <>Pencari kerja yang belum ditempatkan akhir tahun</>,
            maxWidth: 200,
            textAlign: "left",
          },
          {
            render: (items) => footerCounter(items, (d) => d.male),
          },
          {
            render: (items) => footerCounter(items, (d) => d.female),
          },
          {
            render: (items) => footerCounter(items, (d) => d.total),
          },
        ]}
        sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
      />
    </div>
  );
};

"use client";
import { SectionTitle } from "./SectionTitle";
import { CitizenGrowthStatistic } from "./CitizenGrowthStatistic";
import { CitizenGrowthTable } from "./CitizenGrowthTable";
import { CitizenCountStatistic } from "./CitizenCountStatistic";
import { CitizenOverview } from "./CitizenOverview";
import { BirthRegistrationStatistic } from "./BirthRegistrationStatistic";
import { CitizenBirthRegistrationTable } from "./CitizenBirthRegistrationTable";
import { CitizenCountStatusStatistic } from "./CitizenCountStatusStatistic";
import { CitizenEducationTable } from "./CitizenEducationTable";

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

export const DemografiSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <SectionTitle>Demografi</SectionTitle>
      <CitizenOverview />
      <CitizenGrowthStatistic data={citizenGrowthStatisticData} />
      <CitizenGrowthTable />
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
      <CitizenBirthRegistrationTable />
      <div className="grid grid-cols-2 gap-6">
        <CitizenCountStatusStatistic
          marginLeft={130}
          legend
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
          marginLeft={130}
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

      <CitizenEducationTable />
    </div>
  );
};

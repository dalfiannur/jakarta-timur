"use client";
import { SectionTitle } from "./SectionTitle";
import { CitizenGrowthStatistic } from "./CitizenGrowthStatistic";
import { CitizenCountStatistic } from "./CitizenCountStatistic";
import { CitizenOverview } from "./CitizenOverview";
import { BirthRegistrationStatistic } from "./BirthRegistrationStatistic";
import { CitizenGrowthTable } from "./_demografi-section/CitizenGrowthTable";
import { CitizenBirthRegistrationTable } from "./_demografi-section/CitizenBirthRegistrationTable";
import { CitizenEducationTable } from "./_demografi-section/CitizenEducationTable";
import { JobSeekerTable } from "./_demografi-section/JobSeekerTable";
import { IkhtisarTable } from "./_demografi-section/IkhtisarTable";
import { XBarGenderChart } from "./XBarGenderChart";
import { getChartData } from "./actions";
import { useRequest } from "ahooks";

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
  const jobSeekerChartDataByTitle = useRequest(() =>
    getChartData("jobSeekerByTitleChartData"),
  );
  const jobSeekerChartDataByEducation = useRequest(() =>
    getChartData("jobSeekerByEducationChartData"),
  );
  const citizenActivityByAgeChartData = useRequest(() =>
    getChartData("citizenActivityByAgeChartData"),
  );
  const citizenActivityByJobChartData = useRequest(() =>
    getChartData("citizenActivityByJobChartData"),
  );

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
        {citizenActivityByAgeChartData.data && (
          <XBarGenderChart
            marginLeft={200}
            legend
            height={550}
            title="Jumlah Penduduk Berumur 15 Tahun Keatas Menurut Jenis Kegiatan Selama Seminggu yang Lalu dan Jenis Kelamin di Kota Jakarta Timur, 2020"
            sourceInfo="Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus/BPS-Statistics Indonesia, August National Labor Force Survey"
            data={citizenActivityByAgeChartData.data}
          />
        )}

        {citizenActivityByJobChartData.data && (
          <XBarGenderChart
            legend
            marginLeft={200}
            height={480}
            title="Penduduk Berumur 15 Tahun Ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Status Pekerjaan Utama dan Jenis Kelamin di Kota Jakarta Timur, 2020"
            sourceInfo="Sumber: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus"
            data={citizenActivityByJobChartData.data}
          />
        )}
      </div>

      <CitizenEducationTable />

      <JobSeekerTable />

      <div className="grid grid-cols-2 gap-6">
        {jobSeekerChartDataByTitle.data && (
          <XBarGenderChart
            legend
            marginLeft={200}
            height={550}
            title="Jumlah Pencari Kerja yang Belum Ditempatkan Menurut Golongan Jabatan dan Jenis Kelamin di Kota Jakarta Timur, 2020"
            sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
            data={jobSeekerChartDataByTitle.data}
          />
        )}
        {jobSeekerChartDataByEducation.data && (
          <XBarGenderChart
            legend
            marginLeft={200}
            height={480}
            title="Jumlah Pencari Kerja yang Belum Ditempatkan Menurut Tingkat Pendidikan di Kota Jakarta Timur, 2020"
            sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
            data={jobSeekerChartDataByEducation.data}
          />
        )}
      </div>

      <IkhtisarTable />
    </div>
  );
};

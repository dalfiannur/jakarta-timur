"use client";
import { CitizenCountStatistic } from "../_components/CitizenCountStatistic";
import data from "../_data/jobseekers-listing-eduction-chart.json";

export const JobSeekersListingEducationChartSection = () => {
  const yAxis = data.data.map((d) => d.label);
  const maleData = data.data.map((d) => d.male);
  const femaleData = data.data.map((d) => d.female);

  return (
    <CitizenCountStatistic
      height={480}
      title="Jumlah Pencari Kerja yang Belum Ditempatkan Menurut Tingkat Pendidikan di Kota Jakarta Timur, 2020"
      sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
      total={data.counters}
      options={{
        yAxis: {
          type: "category",
          data: yAxis,
          axisLabel: {
            fontSize: 10,
          },
        },
        xAxis: {},
        series: [
          {
            type: "bar",
            name: "Laki-Laki",
            data: maleData,
            itemStyle: {
              borderRadius: [0, 6, 6, 0],
              color: "#1DA1F2",
            },
            barMaxWidth: 13,
          },
          {
            type: "bar",
            name: "Perempuan",
            data: femaleData,
            itemStyle: {
              borderRadius: [0, 6, 6, 0],
              color: "#EB30A2",
            },
            barMaxWidth: 13,
          },
        ],
        grid: {
          left: 130,
          right: 0,
          top: 0,
        },
        legend: {
          bottom: "bottom",
          left: "left",
        },
        tooltip: {},
      }}
      wrapLabel={{
        y: 25,
      }}
    />
  );
};

import { CitizenCountStatistic } from "../_components/CitizenCountStatistic";
import data from "../_data/population-gender-district-chart.json";

export const PopulationGenderDistrictChartSection = () => {
  const maleSeries = data.data.map((d) => d.male);
  const femaleSeries = data.data.map((d) => d.female);
  const yAxis = data.data.map((d) => d.label);

  return (
    <CitizenCountStatistic
      title="Penduduk Menurut Jenis Kelamin dan Kecamatan Kota Jakarta Timur, 2020"
      sourceInfo="Sumber: Hasil Sensus Penduduk 2020 (September)"
      total={[
        { label: "Total Keseluruhan", value: 3_037_139 },
        { label: "Jenis Kelamin Laki-Laki", value: 1_529_659 },
        { label: "Jenis Kelamin Perempuan", value: 1_507_480 },
      ]}
      height={700}
      options={{
        xAxis: {},
        yAxis: {
          type: "category",
          data: yAxis,
        },
        series: [
          {
            type: "bar",
            name: "Laki-Laki",
            data: maleSeries,
            barMaxWidth: 13,
            itemStyle: {
              borderRadius: 8,
              color: "#1DA1F2",
            },
          },
          {
            type: "bar",
            name: "Perempuan",
            data: femaleSeries,
            barMaxWidth: 13,
            itemStyle: {
              borderRadius: 8,
              color: "#EB30A2",
            },
          },
        ],
        grid: {
          right: 0,
          left: 80,
          top: 20,
          bottom: 70,
        },
        tooltip: {},
        legend: {
          show: true,
          orient: "horizontal",
          left: "left",
          bottom: "bottom",
        },
      }}
    />
  );
};

import { CitizenCountStatistic } from "../CitizenCountStatistic";
import data from "./data.json";

export default async function Page() {
  const yAxis = data.data.map((d) => d.label);
  const maleData = data.data.map((d) => d.male);
  const femaleData = data.data.map((d) => d.female);

  return (
    <CitizenCountStatistic
      height={550}
      title="Jumlah Penduduk Berumur 15 Tahun Keatas Menurut Jenis Kegiatan Selama Seminggu yang Lalu dan Jenis Kelamin di Kota Jakarta Timur, 2020"
      sourceInfo="Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus/BPS-Statistics Indonesia, August National Labor Force Survey"
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
    />
  );
}

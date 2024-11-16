import { RatioCounterChartCard } from "../../_components/RatioCounterChartCard";

export const RatioCounterChartSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <RatioCounterChartCard
        title="Jumlah Kepala Keluarga"
        total={123456}
        data={[
          {
            name: "Laki-Laki",
            value: 10000,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: 12000,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Jumlah Wajib KTP"
        total={123456}
        data={[
          {
            name: "Laki-Laki",
            value: 10000,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: 12000,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Jumlah Anak"
        total={123456}
        data={[
          {
            name: "Laki-Laki",
            value: 10000,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: 12000,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Jumlah Penduduk WNA"
        total={123456}
        data={[
          {
            name: "Laki-Laki",
            value: 10000,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: 12000,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
    </div>
  );
};

import { RatioCounterChartCard } from "../../_components/RatioCounterChartCard";

export const TotalHealthFacilitySection = () => {
  return (
    <div>
      <RatioCounterChartCard
        title="Jumlah Fasilitas Kesehatan Kota Administrasi Jakarta Timur"
        total={12345}
        chartSize={140}
        gap={32}
        legend={{
          gap: 16,
        }}
        data={[
          {
            name: "Puskesmas",
            value: 10000,
            itemStyle: {
              color: "#FF8361",
            },
          },
          {
            name: "Puskesmas Pembantu",
            value: 12000,
            itemStyle: {
              color: "#1778F2",
            },
          },
          {
            name: "RSUD",
            value: 12000,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "RS TNI, Polri, dan Pusat",
            value: 12000,
            itemStyle: {
              color: "#FFC053",
            },
          },
          {
            name: "RS Swasta",
            value: 12000,
            itemStyle: {
              color: "#FFFF53",
            },
          },
        ]}
      />
    </div>
  );
};

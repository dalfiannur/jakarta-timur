import { RatioCounterChartCard } from "../../_components/RatioCounterChartCard";

export const RatioSchoolChartSection = () => {
  return (
    <div className="grid grid-cols-2 gap-16">
      <RatioCounterChartCard
        title="Data Sekolah Perbandingan Sekolah Negeri Dan Swasta"
        total={1067897}
        data={[
          {
            value: 3314396,
            name: "Laki-Laki",
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            value: 2314396,
            name: "Perempuan",
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Data Sekolah Perbandingan Sekolah Jakarta Timur"
        total={1067897}
        data={[
          {
            value: 3314396,
            name: "Sekolah SD",
            itemStyle: {
              color: "#FF8361",
            },
          },
          {
            value: 2314396,
            name: "Sekolah SMP",
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            value: 2314396,
            name: "Sekolah SMA/SMK",
            itemStyle: {
              color: "#FFC053",
            },
          },
        ]}
      />
    </div>
  );
};

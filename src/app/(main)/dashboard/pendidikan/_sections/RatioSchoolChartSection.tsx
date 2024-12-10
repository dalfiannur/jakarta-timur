import { RatioCounterChartCard } from "../../_components/RatioCounterChartCard";

export const RatioSchoolChartSection = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
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
            legend: {
              suffix: (
                <span className="ml-1 text-[10px] text-gray-700">Jiwa</span>
              ),
            },
          },
          {
            value: 2314396,
            name: "Perempuan",
            itemStyle: {
              color: "#FF8361",
            },
            legend: {
              suffix: (
                <span className="ml-1 text-[10px] text-gray-700">Jiwa</span>
              ),
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
            legend: {
              suffix: (
                <span className="ml-1 text-[10px] text-gray-700">Jiwa</span>
              ),
            },
          },
          {
            value: 2314396,
            name: "Sekolah SMP",
            itemStyle: {
              color: "#4F46C7",
            },
            legend: {
              suffix: (
                <span className="ml-1 text-[10px] text-gray-700">Jiwa</span>
              ),
            },
          },
          {
            value: 2314396,
            name: "Sekolah SMA/SMK",
            itemStyle: {
              color: "#FFC053",
            },
            legend: {
              suffix: (
                <span className="ml-1 text-[10px] text-gray-700">Jiwa</span>
              ),
            },
          },
        ]}
      />
    </div>
  );
};

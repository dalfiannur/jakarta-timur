import { BarChart } from "../_components/BarChart";

const list = [
  {
    name: "Cipayung",
    value: 100,
  },
  {
    name: "Ciracas",
    value: 500,
  },
  {
    name: "Makasar",
    value: 500,
  },
  {
    name: "Duren Sawit",
    value: 500,
  },
  {
    name: "Cakung",
    value: 500,
  },
  {
    name: "Pasar Rebo",
    value: 500,
  },
  {
    name: "Kramat Jati",
    value: 500,
  },
  {
    name: "Jatinegara",
    value: 500,
  },
  {
    name: "Pulogadung",
    value: 500,
  },
  {
    name: "Matraman",
    value: 500,
  },
];

const data = [
  {
    name: "SD",
    data: list,
    itemStyle: {
      color: "#FF8361",
    },
  },
  {
    name: "SMP",
    data: list,
    itemStyle: {
      color: "#FFC053",
    },
  },
  {
    name: "SMA/SMK",
    data: list,
    itemStyle: {
      color: "#4F46C7",
    },
  },
];

export const RatioSchoolGradeChartSection = ({
  national,
}: {
  national?: boolean;
}) => {
  return (
    <div>
      <h6 className="text-lg font-semibold font-plus-jakarta-sans">
        {national
          ? "Perbandingan Tingkat Sekolah Nasional"
          : "Perbandingan Tingkat Sekolah"}
      </h6>

      <div className="mt-6">
        <BarChart data={data} />
      </div>
    </div>
  );
};

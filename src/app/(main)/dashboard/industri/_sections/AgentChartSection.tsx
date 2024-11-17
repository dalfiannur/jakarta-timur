import { StackBarChart } from "../../_components/StackBarChart";

const types = ["Agen", "Pangkalan"];
const areaList = [
  "Cipayung",
  "Ciracas",
  "Makasar",
  "Duren Sawit",
  "Cakung",
  "Pasar Rebo",
  "Kramat Jati",
  "Jatinegara",
  "Pulogadung",
  "Matraman",
];

const data = areaList
  .map((area) =>
    types.map((type) => ({
      area,
      type,
      value: 1,
    })),
  )
  .flat()
  .map((row, id) => ({
    ...row,
    id,
  }));

export const AgentChartSection = () => {
  return (
    <div className="flex-1">
      <h6 className="text-lg font-plus-jakarta-sans font-bold">
        Jumlah Agen dan Pangkalan Setiap Kecamatan
      </h6>
      <div className="mt-6">
        <StackBarChart
          data={data}
          xKey="area"
          yKey="type"
          valueKey="value"
          colors={["#4F46C7", "#FF8361"]}
        />
      </div>
    </div>
  );
};

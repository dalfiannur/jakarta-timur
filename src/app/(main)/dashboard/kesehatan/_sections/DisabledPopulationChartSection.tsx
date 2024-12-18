import { StackBarChart } from "../../_components/StackBarChart";

const proList = ["Dokter", "Perawat", "Bidan", "Farmasi", "Ahli Gizi"];
const areaList = ["Cipayung", "Ciracas", "Makasar", "Duren Sawit", "Cakung"];

const data = areaList
  .map((area) =>
    proList.map((profession) => ({
      area,
      profession,
      value: 1,
    })),
  )
  .flat()
  .map((row, id) => ({
    ...row,
    id,
  }));

export const DisabledPopulationChartSection = () => {
  return (
    <div className="flex-1">
      <h6 className="text-lg font-plus-jakarta-sans font-bold">
        Jumlah Penduduk Disabilitas
      </h6>
      <div className="mt-6">
        <StackBarChart
          data={data}
          xKey="area"
          yKey="profession"
          valueKey="value"
          colors={["#FF8361", "#4F46C7", "#FFC053", "#F48D8D", "#FFE5BA"]}
        />
      </div>
    </div>
  );
};

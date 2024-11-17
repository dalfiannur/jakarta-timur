import { StackBarChart } from "../_components/StackBarChart";

export const DisabledPopulationChartSection = () => {
  return (
    <div className="flex-1">
      <h6 className="text-lg font-plus-jakarta-sans font-bold">
        Jumlah Penduduk Disabilitas
      </h6>
      <div className="mt-6">
        <StackBarChart />
      </div>
    </div>
  );
};

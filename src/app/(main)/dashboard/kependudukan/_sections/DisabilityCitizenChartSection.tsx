import { DisabilityCitizenChart } from "../_components/DisabilityCitizenChart";

export const DisabilityCitizenChartSection = () => {
  return (
    <div className="flex-1">
      <h6 className="font-plus-jakarta-sans font-bold text-lg">
        Jumlah Penduduk Disabilitas
      </h6>
      <div className="mt-6">
        <DisabilityCitizenChart />
      </div>
    </div>
  );
};

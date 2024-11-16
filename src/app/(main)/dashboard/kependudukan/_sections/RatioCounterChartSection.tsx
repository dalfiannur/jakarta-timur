import { RatioCounterChartCard } from "../_components/RatioCounterChartCard";

export const RatioCounterChartSection = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <RatioCounterChartCard title="Jumlah Kepala Keluarga" />
      <RatioCounterChartCard title="Jumlah Wajib KTP" />
      <RatioCounterChartCard title="Jumlah Anak" />
      <RatioCounterChartCard title="Jumlah Penduduk WNA" />
    </div>
  );
};

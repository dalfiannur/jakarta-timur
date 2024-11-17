"use client";
import { trpc } from "@/app/utils/trpc";
import { RatioCounterChartCard } from "../../_components/RatioCounterChartCard";

export const RatioCounterChartSection = () => {
  const { useQuery } = trpc.config.findByName;
  const householder = useQuery("total-householder");
  const adult = useQuery("total-adult");
  const child = useQuery("total-children");
  const foreigner = useQuery("total-foreigner");

  return (
    <div className="grid grid-cols-4 gap-4">
      <RatioCounterChartCard
        title="Jumlah Kepala Keluarga"
        total={householder.data?.male + householder.data?.female}
        data={[
          {
            name: "Laki-Laki",
            value: householder.data?.male,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: householder.data?.female,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Jumlah Wajib KTP"
        total={adult.data?.male + adult.data?.female}
        data={[
          {
            name: "Laki-Laki",
            value: adult.data?.male,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: adult.data?.female,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Jumlah Anak"
        total={child.data?.male + child.data?.female}
        data={[
          {
            name: "Laki-Laki",
            value: child.data?.male,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: child.data?.female,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
      <RatioCounterChartCard
        title="Jumlah Penduduk WNA"
        total={foreigner.data?.male + foreigner.data?.female}
        data={[
          {
            name: "Laki-Laki",
            value: foreigner.data?.male,
            itemStyle: {
              color: "#4F46C7",
            },
          },
          {
            name: "Perempuan",
            value: foreigner.data?.female,
            itemStyle: {
              color: "#FF8361",
            },
          },
        ]}
      />
    </div>
  );
};

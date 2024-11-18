"use client";
import { CounterCard } from "../../_components/CounterCard";
import { trpc } from "@/utils/trpc";

const getValue = (value?: string | number | null) =>
  value ? (value as number) : 0;

export const CounterSection = () => {
  const { useQuery } = trpc.config.findByName;
  const totalPopulation = useQuery("total-population");
  const totalMale = useQuery("total-male");
  const totalFemale = useQuery("total-female");
  const populationDensity = useQuery("population-density");

  return (
    <div className="grid grid-cols-4 gap-6">
      <CounterCard
        title="Jumlah Penduduk"
        value={getValue(totalPopulation.data)}
        icon={null}
      />
      <CounterCard
        title="Laki - Laki"
        value={getValue(totalMale.data)}
        icon={null}
      />
      <CounterCard
        title="Perempuan"
        value={getValue(totalFemale.data)}
        icon={null}
      />
      <CounterCard
        title="Kepadatan Penduduk"
        value={getValue(populationDensity.data)}
        icon={null}
      />
    </div>
  );
};

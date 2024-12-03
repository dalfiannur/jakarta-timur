"use client";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { useStackBarChart } from "@/app/hooks/useStackBarChart";
import _ from "lodash";

const districts = ["Cipayung", "Ciracas", "Makasar", "Duren Sawit", "Cakung"];

const data = ["Jumlah Pemilu", "TPS"]
  .map((type, index) =>
    districts.map((district, dI) => ({
      id: (index + 1) * (dI + 1),
      district,
      type,
      total: _.random(1000, 5000),
    })),
  )
  .flat();

export const ElectorTpsChartSection = () => {
  const { ref } = useStackBarChart({
    data,
    xKey: "district",
    yKey: "total",
    stackKey: "type",
    color: ["#4F46C7", "#FF8361"],
  });

  return (
    <Flex direction="column" gap="md">
      <Text weight="bold" size="lg">
        Daftar Pemilih Tetap (DPT) dan Jumlah TPS Pemilu Tahun 2024
      </Text>
      <div ref={ref} className="h-[300px]" />
    </Flex>
  );
};

"use client";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { useBarChart } from "@/app/hooks/useBarChart";
import _ from "lodash";

const districts = [
  "Cipayung",
  "Ciracas",
  "Makasar",
  "Duren Sawit",
  "Cakung",
  "Pasar Rebo",
  "Kramat Jati",
  "Jatinegara",
  "Pulo Gadung",
  "Matraman",
];

const data = districts.map((district, i) => ({
  id: i + 1,
  district,
  total: _.random(10, 100),
}));

export const PlantsChartSection = () => {
  const { ref } = useBarChart({
    data,
    xKey: "district",
    yKey: "total",
    color: ["#FF8361"],
    legendPosition: "top-left",
  });

  return (
    <Flex direction="column" gap="md">
      <Text weight="semibold" size="lg">
        Jumlah Tanaman
      </Text>
      <div ref={ref} className="h-[400px]" />
    </Flex>
  );
};

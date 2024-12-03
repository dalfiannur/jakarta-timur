"use client";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { useStackBarChart } from "@/app/hooks/useStackBarChart";
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

const data = [1, 2]
  .map((x) =>
    districts.map((district, i) => ({
      id: (i + 1) * x,
      district,
      type: x === 1 ? "Pohon" : "Tanaman",
      total: _.random(10, 100),
    })),
  )
  .flat();

export const PlantingPlantsChartSection = () => {
  const { ref } = useStackBarChart({
    data,
    xKey: "district",
    yKey: "total",
    stackKey: "type",
    color: ["#4F46C7", "#FF8361"],
    legendPosition: "top-left",
  });

  return (
    <Flex direction="column" gap="md">
      <Text weight="semibold" size="lg">
        Penanaman Pohon dan Tanaman Tahun 2024
      </Text>
      <div ref={ref} className="h-[400px]" />
    </Flex>
  );
};

"use client";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { useMultiBarChart } from "@/app/hooks/useMultiBarChart";
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

const data = ["WC", "Tangki", "Saluran"]
  .map((type, index) =>
    districts.map((district, i) => ({
      id: (i + 1) * (index + 1),
      district,
      type,
      total: _.random(10, 100),
    })),
  )
  .flat();

export const FacilityChartSection = () => {
  const { ref } = useMultiBarChart({
    data,
    xKey: "district",
    yKey: "total",
    stackKey: "type",
    color: ["#FF8361", "#FFC053", "#4F46C7"],
    legendPosition: "top-left",
  });

  return (
    <Flex direction="column" gap="md">
      <Text weight="semibold" size="lg">
        Data WC, Tangki, Saluran
      </Text>
      <div ref={ref} className="h-[400px]" />
    </Flex>
  );
};

"use client";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { usePieChart } from "@/app/hooks/usePieChart";
import _ from "lodash";

const gens = ["Gen Z", "Millenial", "Gen X", "Baby/Pre-Boomers"];
const data = gens.map((district, i) => ({
  id: i + 1,
  district,
  total: _.random(1000, 5000),
}));

export const ElectionGenerationChartSection = () => {
  const { ref } = usePieChart({
    data,
    labelKey: "district",
    valueKey: "total",
    color: ["#FF8361", "#FFC053", "#4F46C7", "#1778F2"],
  });

  return (
    <Flex direction="column" gap="md">
      <Text weight="bold" size="lg">
        DPT Berdasarkan Generasi Pemilu Tahun 2024
      </Text>
      <div ref={ref} className="h-[350px]" />
    </Flex>
  );
};

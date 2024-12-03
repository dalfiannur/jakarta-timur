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

const data = ["KAJ", "KPDJ"]
  .map((type, typeIndex) =>
    districts.map((district, districtIndex) => ({
      id: (typeIndex + 1) * (districtIndex + 1),
      district,
      type,
      total: _.random(10, 100),
    })),
  )
  .flat();

export const BasicNeedsFulfillmentSection = () => {
  const { ref } = useMultiBarChart({
    data,
    xKey: "district",
    yKey: "total",
    stackKey: "type",
    color: ["#FF8361", "#FFC053"],
  });

  return (
    <Flex direction="column" gap="md">
      <Text size="lg" weight="bold">
        Penerima Pemenuhan Kebutuhan Dasar
      </Text>
      <div ref={ref} className="h-[400px]" />
    </Flex>
  );
};

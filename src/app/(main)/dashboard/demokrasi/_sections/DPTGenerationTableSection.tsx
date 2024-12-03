import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { formattedNumber } from "@/utils/format-number";
import _ from "lodash";

const data = [
  {
    title: "Generasi Z",
    subtitle: "(17-24 Tahun)",
    value: _.random(10000, 50000),
  },
  {
    title: "Generasi Millenial",
    subtitle: "(25-39 Tahun)",
    value: _.random(10000, 50000),
  },
  {
    title: "Generasi X",
    subtitle: "(40-55 Tahun)",
    value: _.random(10000, 50000),
  },
  {
    title: "Generasi Baby Boomers",
    subtitle: "(56-75 Tahun)",
    value: _.random(10000, 50000),
  },
  {
    title: "Generasi Pre Boomers",
    subtitle: "(76 Tahun Ke-atas)",
    value: _.random(10000, 50000),
  },
];

export const DPTGenerationTableSection = () => {
  return (
    <Flex direction="column" gap="md">
      <Text weight="bold" size="lg">
        DPT Berdasarkan Generasi Pemilu Tahun 2024
      </Text>
      <Flex direction="column">
        {data.map((item, index) => (
          <Flex
            key={index}
            justify="between"
            align="center"
            data-stripped={index % 2 === 0 ? true : undefined}
            className="px-4 py-2 data-[stripped]:bg-blue-50"
          >
            <Flex direction="column" align="start">
              <Text weight="bold" size="lg">
                {item.title}
              </Text>
              <Text size="sm" color="subtle">
                {item.subtitle}
              </Text>
            </Flex>
            <Text weight="bold" size="xl" color="orange">
              {formattedNumber(item.value)}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

import { Grid } from "@/app/components/Grid";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { FilledCounterCard } from "../../_components/FilledCounterCard";

const ITEMS = [
  {
    title: "Jumlah Kecamatan",
    value: 10,
  },
  {
    title: "Jumlah Kelurahan",
    value: 65,
  },
  {
    title: "Jumlah TPS",
    value: 4144,
  },
  {
    title: "Jumlah DPS Laki-Laki",
    value: 1169568,
  },
  {
    title: "Jumlah DPS Perempuan",
    value: 1212250,
  },
  {
    title: "Total DPS",
    value: 2381818,
  },
];

export const DPSSection = () => {
  return (
    <Flex direction="column" gap="sm">
      <Text weight="bold" size="lg">
        Rekapitulasi Daftar Pemilih Sementara (DPS)
      </Text>
      <Grid cols={{ initial: 1, md: 3, lg: 6 }} gap="md">
        {ITEMS.map((item, index) => (
          <FilledCounterCard
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </Grid>
    </Flex>
  );
};

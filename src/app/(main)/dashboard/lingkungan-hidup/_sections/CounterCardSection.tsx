import { Grid } from "@/app/components/Grid";
import { Box } from "@/app/components/Box";
import { Flex } from "@/app/components/Flex";
import { Text } from "@/app/components/Text";
import { AvatarBox } from "@/app/components/AvatarBox";
import { Icon } from "@/app/icons";
import { formattedNumber } from "@/utils/format-number";

const ITEMS = [
  {
    title: "Jumlah Penanam Pohon",
    value: 3314396,
  },
  {
    title: "Jumlah WC,Tangki,Saluran",
    value: 3314396,
  },
  {
    title: "Jumlah Tanaman",
    value: 3314396,
  },
  {
    title: "Jumlah Lokasi TPU",
    value: 3314396,
  },
];

export const CounterCardSection = () => {
  return (
    <Grid cols={{ initial: 1, md: 2, lg: 4 }}>
      {ITEMS.map((item, index) => (
        <Box key={index} padding={{ initial: "sm", md: "md", lg: "lg" }}>
          <Flex justify="between" align="center" gap="sm">
            <Flex flex direction="column" gap="sm">
              <Text size="xs" weight="medium" color="subtle">
                {item.title}
              </Text>
              <Text size="xl" weight="bold">
                {formattedNumber(item.value)}
              </Text>
            </Flex>
            <AvatarBox variant="light" color="orange" size="sm">
              <Icon name="Kependudukan" className="h-6 w-6 text-orange-500" />
            </AvatarBox>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

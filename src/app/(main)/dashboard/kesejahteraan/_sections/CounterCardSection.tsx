import { Grid } from "@/app/components/Grid";
import { CounterCard } from "../../_components/CounterCard";
import _ from "lodash";

const ITEMS = [
  {
    title: "Jumlah Destinasi Wisata",
    value: _.random(1000, 3000),
  },
  {
    title: "Jumlah Peserta Wirausaha Baru",
    value: _.random(1000, 3000),
  },
];

export const CounterCardSection = () => {
  return (
    <Grid cols={2} gap="lg">
      {ITEMS.map((item, index) => (
        <CounterCard
          key={index}
          title={item.title}
          value={item.value}
          icon="Kependudukan"
        />
      ))}
    </Grid>
  );
};

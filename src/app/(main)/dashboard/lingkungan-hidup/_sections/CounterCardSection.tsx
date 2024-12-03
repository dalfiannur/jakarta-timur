import { Grid } from "@/app/components/Grid";
import { CounterCard } from "../../_components/CounterCard";

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

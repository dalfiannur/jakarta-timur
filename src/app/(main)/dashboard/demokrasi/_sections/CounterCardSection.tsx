import { Grid } from "@/app/components/Grid";
import { CounterCard } from "../../_components/CounterCard";
import { IconKeys } from "@/app/icons";

const ITEMS: { title: string; value: number; icon: IconKeys }[] = [
  {
    title: "Jumlah TPS",
    value: 3314396,
    icon: "Demokrasi",
  },
  {
    title: "Jumlah Pemilih Muda",
    value: 3314396,
    icon: "Profile",
  },
  {
    title: "Data Daerah Pemilihan",
    value: 3314396,
    icon: "MapPoint",
  },
];

export const CounterCardSection = () => {
  return (
    <Grid cols={{ initial: 1, md: 3, lg: 3 }}>
      {ITEMS.map((item, index) => (
        <CounterCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </Grid>
  );
};

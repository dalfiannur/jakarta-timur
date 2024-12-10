"use client";
import { IconKeys } from "@/app/icons";
import { CounterCard } from "../../_components/CounterCard";

const data: {
  title: string;
  value: number;
  icon: IconKeys;
}[] = [
  {
    title: "Jumlah Pelajar",
    value: 3314396,
    icon: "AccountStudent",
  },
  {
    title: "Jumlah Pendidik",
    value: 3314396,
    icon: "Teacher",
  },
  {
    title: "Jumlah Sekolah",
    value: 3314396,
    icon: "SchoolOne",
  },
  {
    title: "Jumlah Sekolah Negeri",
    value: 3314396,
    icon: "SchoolTwo",
  },
];

export const CounterSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
      {data.map((item, index) => (
        <CounterCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

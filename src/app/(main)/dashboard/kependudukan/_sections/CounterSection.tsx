import { CounterCard } from "../_components/CounterCard";

const getData = async () => {
  "use server";
  return [
    {
      title: "Jumlah Penduduk",
      value: 3314396,
    },
    {
      title: "Laki-Laki",
      value: 3314396,
    },
    {
      title: "Perempuan",
      value: 3314396,
    },
    {
      title: "Kepadatan Penduduk",
      value: 3314396,
    },
  ];
};

export const CounterSection = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((item, index) => (
        <CounterCard
          key={index}
          title={item.title}
          value={item.value}
          icon={null}
        />
      ))}
    </div>
  );
};

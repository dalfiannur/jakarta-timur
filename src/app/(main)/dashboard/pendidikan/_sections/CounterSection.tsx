import { CounterCard } from "../../_components/CounterCard";

const getData = async () => {
  "use server";
  return [
    {
      title: "Jumlah Pelajar",
      value: 3314396,
    },
    {
      title: "Jumlah Pendidik",
      value: 3314396,
    },
    {
      title: "Jumlah Sekolah",
      value: 3314396,
    },
    {
      title: "Jumlah Sekolah Negeri",
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

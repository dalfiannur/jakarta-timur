import { CounterCard } from "../../_components/CounterCard";

const getData = async () => {
  "use server";
  return [
    {
      title: "Dokter",
      value: 3314396,
    },
    {
      title: "Perawat",
      value: 3314396,
    },
    {
      title: "Bidan",
      value: 3314396,
    },
    {
      title: "Farmasi",
      value: 3314396,
    },
    {
      title: "Ahli Gizi",
      value: 3314396,
    },
  ];
};

export const CounterSection = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-5 gap-6">
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

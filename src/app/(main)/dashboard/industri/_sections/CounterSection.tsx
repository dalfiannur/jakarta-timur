import { CounterCard } from "../../_components/CounterCard";

const getData = async () => {
  "use server";
  return [
    {
      title: "Jumlah Hotel",
      value: 3314396,
    },
    {
      title: "Jumlah Agen LPG",
      value: 3314396,
    },
    {
      title: "Jumlah Rumah Makan",
      value: 3314396,
    },
    {
      title: "Jumlah Ketenagakerjaan",
      value: 3314396,
    },
    {
      title: "Jumlah Perusahaan",
      value: 3314396,
    },
  ];
};

export const CounterSection = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-5 gap-6">
      {data.map((item, index) => (
        <CounterCard key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

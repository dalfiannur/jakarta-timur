import { CitizenCountStatistic } from "../CitizenCountStatistic";

export default function Page() {
  return (
    <CitizenCountStatistic
      title="Penduduk Menurut Jenis Kelamin dan Usia Kota Jakarta Timur, 2020"
      total={[
        { label: "Total Keseluruhan", value: 3_037_139 },
        { label: "Jenis Kelamin Laki-Laki", value: 1_529_659 },
        { label: "Jenis Kelamin Perempuan", value: 1_507_480 },
      ]}
      height={700}
      data={[
        {
          label: "0 - 4th",
          value: [1, 2],
          id: 1,
        },
        {
          label: "5 - 9th",
          value: [2, 3],
          id: 2,
        },
        {
          label: "10 - 14th",
          value: [3, 4],
          id: 3,
        },
        {
          label: "15 - 19th",
          value: [4, 5],
          id: 4,
        },
        {
          label: "20 - 24th",
          value: [5, 6],
          id: 5,
        },
        {
          label: "25 - 29th",
          value: [6, 7],
          id: 6,
        },
        {
          label: "30 - 34th",
          value: [7, 8],
          id: 7,
        },
        {
          label: "35 - 39th",
          value: [8, 7],
          id: 8,
        },
        {
          label: "40 - 44th",
          value: [7, 6],
          id: 9,
        },
        {
          label: "45 - 49th",
          value: [6, 5],
          id: 10,
        },
        {
          label: "50 - 54th",
          value: [5, 4],
          id: 11,
        },
        {
          label: "55 - 59th",
          value: [4, 3],
          id: 12,
        },
        {
          label: "60 - 64th",
          value: [3, 2],
          id: 13,
        },
        {
          label: "65 - 69th",
          value: [2, 1],
          id: 14,
        },
        {
          label: "70 - 74th",
          value: [1, 2],
          id: 15,
        },
        {
          label: "75+th",
          value: [2, 3],
          id: 16,
        },
      ]}
    />
  );
}

import { CitizenCountStatistic } from "../CitizenCountStatistic";

export default function Page() {
  return (
    <CitizenCountStatistic
      title="Penduduk Menurut Jenis Kelamin dan Kecamatan Kota Jakarta Timur, 2020"
      total={[
        { label: "Total Keseluruhan", value: 3_037_139 },
        { label: "Jenis Kelamin Laki-Laki", value: 1_529_659 },
        { label: "Jenis Kelamin Perempuan", value: 1_507_480 },
      ]}
      height={600}
      data={[
        {
          label: "Pasar Rebo",
          value: [3, 3],
          id: 1,
        },
        {
          label: "Ciracas",
          value: [3, 3],
          id: 2,
        },
        {
          label: "Cipayung",
          value: [3, 3],
          id: 3,
        },
        {
          label: "Makasar",
          value: [3, 3],
          id: 4,
        },
        {
          label: "Kramat Jati",
          value: [3, 3],
          id: 5,
        },
        {
          label: "Jatinegara",
          value: [3, 3],
          id: 6,
        },
        {
          label: "Duren Sawit",
          value: [3, 3],
          id: 7,
        },
        {
          label: "Cakung",
          value: [3, 3],
          id: 8,
        },
        {
          label: "Pulo Gadung",
          value: [3, 3],
          id: 9,
        },
        {
          label: "Matraman",
          value: [3, 3],
          id: 10,
        },
      ]}
    />
  );
}

const columns = [
  {
    label: "Kecamatan",
    keyIndex: "district",
  },
  {
    label: "Penduduk(Jiwa)",
    keyIndex: "citizen",
  },
  {
    label: "Laju Pertumbuhan Penduduk 2010-2020 (%)",
    keyIndex: "growth",
  },
  {
    label: "Persentase Penduduk",
    keyIndex: "percentage",
  },
  {
    label: "Kepadatan Penduduk per km2",
    keyIndex: "depth",
  },
  {
    label: "Rasio Jenis Kelamin Penduduk",
    keyIndex: "genderRatio",
  },
];

const data = [
  {
    district: "Pasar Rebo",
    citizen: "220.583",
    growth: "1,49",
    percentage: "7,26",
    depth: "16.994",
    genderRatio: "102,2",
  },
  {
    district: "Ciracas",
    citizen: "296.316",
    growth: "1,59",
    percentage: "9,76",
    depth: "18.428",
    genderRatio: "101,3",
  },
  {
    district: "Cipayung",
    citizen: "285.650",
    growth: "2,18",
    percentage: "9,41",
    depth: "10.040",
    genderRatio: "101,9",
  },
  {
    district: "Makasar",
    citizen: "207.293",
    growth: "1,06",
    percentage: "6,83",
    depth: "9.487",
    genderRatio: "101,0",
  },
  {
    district: "Kramat Jati",
    citizen: "298.437",
    growth: "0,88",
    percentage: "9,83",
    depth: "22.957",
    genderRatio: "101,5",
  },
  {
    district: "Jatinegara",
    citizen: "301.717",
    growth: "1,20",
    percentage: "9,93",
    depth: "29.436",
    genderRatio: "101,9",
  },
  {
    district: "Duren Sawit",
    citizen: "414.604",
    growth: "0,73",
    percentage: "13,65",
    depth: "18.305",
    genderRatio: "99,5",
  },
  {
    district: "Cakung",
    citizen: "559.040",
    growth: "1,01",
    percentage: "18,41",
    depth: "13.222",
    genderRatio: "104,1",
  },
  {
    district: "Pulo Gadung",
    citizen: "281.319",
    growth: "0,68",
    percentage: "9,26",
    depth: "18.022",
    genderRatio: "99,6",
  },
  {
    district: "Matraman",
    citizen: "172.180",
    growth: "1,45",
    percentage: "5,67",
    depth: "35.283",
    genderRatio: "99,7",
  },
];

export const CitizenGrowthTable = () => {
  return (
    <div className="border rounded-xl p-10">
      <h5 className="text-center text-xl font-bold">
        Penduduk, Laju Pertumbuhan Penduduk per Tahun, Distribusi Persentase
        Penduduk, Kepadatan Penduduk, Rasio Jenis Kelamin Penduduk Menurut
        Kecamatan Kota Jakarta Timur, 2020
      </h5>
      <table className="mt-8 rounded-t-2xl overflow-hidden">
        <thead>
          <tr className="bg-[#E9F6FE]">
            {columns.map((item) => (
              <th
                key={item.keyIndex}
                className="py-4 px-6 text-center text-sm dont-semibold text-[#23272E]"
              >
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.keyIndex}
                  data-odd={index % 2 === 0}
                  className="text-center px-6 whitespace-nowrap text-sm font-medium text-[#666666] py-6 data-[odd=false]:bg-[#F6F6F6]"
                >
                  {item[column.keyIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="mt-2 text-sm text-center font-medium text-white">
            <th className="bg-[#1DA1F2] rounded-l-2xl p-4 whitespace-nowrap">
              Kota Jakarta Timur
            </th>
            <th className="bg-[#1DA1F2] p-4">3.037.139</th>
            <th className="bg-[#1DA1F2] p-4">1,17</th>
            <th className="bg-[#1DA1F2] p-4">100,00</th>
            <th className="bg-[#1DA1F2] p-4">16.152</th>
            <th className="bg-[#1DA1F2] p-4 rounded-r-2xl">101,5</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

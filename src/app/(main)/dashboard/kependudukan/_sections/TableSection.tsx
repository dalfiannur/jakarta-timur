const getData = async (): Promise<
  {
    [key: string]: number | string;
  }[]
> => {
  "use server";
  return [
    {
      id: 1,
      district: "Pasar Rebo",
      citizen: 220583,
      rw: 1.49,
      rt: 7.26,
      lmk: 16994,
    },
    {
      id: 1,
      district: "Pasar Rebo",
      citizen: 220583,
      rw: 1.49,
      rt: 7.26,
      lmk: 16994,
    },
    {
      id: 1,
      district: "Pasar Rebo",
      citizen: 220583,
      rw: 1.49,
      rt: 7.26,
      lmk: 16994,
    },
  ];
};

const columns = [
  {
    key: "district",
    header: "Kecamatan",
    footer: "Total",
  },
  {
    key: "citizen",
    header: "Penduduk (Jiwa)",
    footer: "3.037.139",
  },
  {
    key: "rw",
    header: "RW",
    footer: "1,97",
  },
  {
    key: "rt",
    header: "RT",
    footer: "100,00",
  },
  {
    key: "lmk",
    header: "LMK",
    footer: "16.152",
  },
];

export const TableSection = async () => {
  const data = await getData();

  return (
    <table className="w-full rounded-2xl overflow-hidden">
      <thead>
        <tr className="font-plus-jakarta-sans font-medium text-sm">
          {columns.map((column) => (
            <th
              key={column.key}
              className="bg-[#FFF3EF] px-3 py-3 text-gray-700"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="py-2">
            {columns.map((column) => (
              <td
                key={column.key}
                className="py-1 text-center font-inter text-lg text-gray-500"
              >
                <div
                  data-stripped={index % 2 > 0}
                  className="py-2 data-[stripped=true]:bg-blue-700/5"
                >
                  {item[column.key]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className="bg-orange-500 text-white">
          {columns.map((column) => (
            <th
              key={column.key}
              className="py-2 font-roboto font-medium text-sm"
            >
              {column.footer}
            </th>
          ))}
        </tr>
      </tfoot>
    </table>
  );
};

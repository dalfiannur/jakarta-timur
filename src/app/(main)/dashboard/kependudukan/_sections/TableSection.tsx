"use client";

type Data = {
  id: number;
  district: string;
  citizen: number;
  rw: number;
  rt: number;
  lmk: number;
};

const data: Data[] = [
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

type Column = {
  key: keyof Data;
  header: string;
  footer: string;
};

const columns: Column[] = [
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

export const TableSection = () => {
  return (
    <div className="no-scroll overflow-x-scroll">
      <table className="w-full overflow-hidden rounded-xl">
        <thead>
          <tr className="font-plus-jakarta-sans text-sm font-medium">
            {columns.map((column, index) => (
              <th key={index} className="bg-[#FFF3EF] px-3 py-3 text-gray-700">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="py-2">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="py-1 text-center font-inter text-lg text-gray-500"
                >
                  <div
                    data-stripped={index % 2 > 0}
                    className="whitespace-nowrap p-2 data-[stripped=true]:bg-blue-700/5"
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
            {columns.map((column, index) => (
              <th
                key={index}
                className="whitespace-nowrap p-2 font-roboto text-sm font-medium"
              >
                {column.footer}
              </th>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

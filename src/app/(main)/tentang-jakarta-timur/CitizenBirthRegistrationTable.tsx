import { Icon } from "@/app/icons";
import { ReactNode } from "react";

const data = [
  {
    district: "Pasar Rebo",
    domestic: {
      male: "116.990",
      female: "114.929",
      total: "231.919",
    },
    foreigner: {
      male: "10",
      female: "2",
      total: "12",
    },
  },
  {
    district: "Ciracas",
    domestic: {
      male: "156.790",
      female: "154.698",
      total: "311.488",
    },
    foreigner: {
      male: "12",
      female: "1",
      total: "13",
    },
  },
  {
    district: "Cipayung",
    domestic: {
      male: "144.326",
      female: "141.919",
      total: "286.245",
    },
    foreigner: {
      male: "10",
      female: "2",
      total: "12",
    },
  },
  {
    district: "Makasar",
    domestic: {
      male: "111.978",
      female: "110.480",
      total: "222.458",
    },
    foreigner: {
      male: "7",
      female: "-",
      total: "7",
    },
  },
  {
    district: "Kramat Jati",
    domestic: {
      male: "158.220",
      female: "156.098",
      total: "314.318",
    },
    foreigner: {
      male: "15",
      female: "5",
      total: "20",
    },
  },
  {
    district: "Jatinegara",
    domestic: {
      male: "164.225",
      female: "164.225",
      total: "326.084",
    },
    foreigner: {
      male: "32",
      female: "15",
      total: "47",
    },
  },
  {
    district: "Duren Sawit",
    domestic: {
      male: "220.045",
      female: "221.033",
      total: "441.078",
    },
    foreigner: {
      male: "19",
      female: "18",
      total: "37",
    },
  },
  {
    district: "Cakung",
    domestic: {
      male: "285.879",
      female: "276.835",
      total: "562.714",
    },
    foreigner: {
      male: "15",
      female: "10",
      total: "25",
    },
  },
  {
    district: "Pulo Gadung",
    domestic: {
      male: "153.671",
      female: "154.164",
      total: "307.835",
    },
    foreigner: {
      male: "44",
      female: "32",
      total: "76",
    },
  },
  {
    district: "Matraman",
    domestic: {
      male: "95.135",
      female: "95.258",
      total: "95.258",
    },
    foreigner: {
      male: "7",
      female: "4",
      total: "11",
    },
  },
];

export const CitizenBirthRegistrationTable = () => {
  return (
    <div className="border rounded-xl p-10">
      <h5 className="text-center text-xl font-bold">
        Registrasi Penduduk Menurut Jenis Kelamin dan Kecamatan di Kota Jakarta
        Timur, 2020
      </h5>
      <table className="mt-8 rounded-t-2xl overflow-hidden w-full">
        <thead>
          <tr className="bg-[#E9F6FE]">
            <Th rowSpan={2}>Kecamatan</Th>
            <Th colSpan={2} compact>
              WNI
            </Th>
            <Th rowSpan={2}>Jumlah</Th>
            <Th colSpan={2} compact>
              WNA
            </Th>
            <Th rowSpan={2}>Jumlah</Th>
          </tr>
          <tr className="bg-[#E9F6FE]">
            <Th compact>Laki-Laki</Th>
            <Th compact>Perempuan</Th>
            <Th compact>Laki-Laki</Th>
            <Th compact>Perempuan</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td data-striped={index % 2 === 0}>{item.district}</Td>
              <Td data-striped={index % 2 === 0}>{item.domestic.male}</Td>
              <Td data-striped={index % 2 === 0}>{item.domestic.female}</Td>
              <Td data-striped={index % 2 === 0}>{item.domestic.total}</Td>
              <Td data-striped={index % 2 === 0}>{item.foreigner.male}</Td>
              <Td data-striped={index % 2 === 0}>{item.foreigner.female}</Td>
              <Td data-striped={index % 2 === 0}>{item.foreigner.total}</Td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="mt-2 text-sm text-center font-medium text-white">
            <th className="bg-[#1DA1F2] rounded-l-2xl p-4 whitespace-nowrap">
              Kota Jakarta Timur
            </th>
            <th className="bg-[#1DA1F2] p-4">1.607.259</th>
            <th className="bg-[#1DA1F2] p-4">1.587.273</th>
            <th className="bg-[#1DA1F2] p-4">3.194.532</th>
            <th className="bg-[#1DA1F2] p-4">171</th>
            <th className="bg-[#1DA1F2] p-4">89</th>
            <th className="bg-[#1DA1F2] p-4 rounded-r-2xl">260</th>
          </tr>
        </tfoot>
      </table>
      <p className="mt-6 flex gap-4 items-center text-blue-500 text-sm">
        <Icon name="Info" size={16} />
        Sumber: Hasil Sensus Penduduk 2020 (September)
      </p>
    </div>
  );
};

const Th = ({
  children,
  colSpan,
  rowSpan,
  compact,
}: {
  children: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  compact?: boolean;
}) => (
  <th
    colSpan={colSpan}
    rowSpan={rowSpan}
    data-compact={compact}
    className="py-4 data-[compact=true]:py-2 px-6 text-center text-sm dont-semibold text-[#23272E]"
  >
    {children}
  </th>
);

const Td = ({
  children,
  striped,
}: {
  children: ReactNode;
  striped?: boolean;
}) => (
  <td
    data-striped={striped ? true : false}
    className="text-center px-6 whitespace-nowrap text-sm font-medium text-[#666666] py-6 data-[striped=true]:bg-[#F6F6F6]"
  >
    {children}
  </td>
);

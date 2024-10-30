import { Icon } from "@/app/icons";
import { ReactNode } from "react";
import _ from "lodash";
import { formattedNumber } from "@/utils/format-number";

const data: { [key: string]: number }[] = [
  {
    id: 0,
    employers: 150_890,
    unemployers: 10_082,
    totalEmployers: 160_972,
    percentage: 93.74,
    notWorkforce: 121_186,
    total: 282_158,
    workforcePercentage: 57.05,
  },
  {
    id: 1,
    employers: 167_137,
    unemployers: 12_972,
    totalEmployers: 180_109,
    percentage: 92.8,
    notWorkforce: 195_091,
    total: 375_200,
    workforcePercentage: 48.0,
  },
  {
    id: 2,
    employers: 599_530,
    unemployers: 77_911,
    totalEmployers: 677_441,
    percentage: 88.5,
    notWorkforce: 403_144,
    total: 1_080_585,
    workforcePercentage: 62.69,
  },
  {
    id: 3,
    employers: 340_195,
    unemployers: 27_774,
    totalEmployers: 367_969,
    percentage: 92.45,
    notWorkforce: 130_975,
    total: 498_944,
    workforcePercentage: 73.75,
  },
];

export const CitizenEducationTable = () => {
  const countSum = (key: string) =>
    formattedNumber(data.map((d) => d[key]).reduce((p, c) => p + c));

  const countAverage = (key: string) =>
    formattedNumber(_.mean(data.map((d) => d[key])), 2);

  return (
    <div className="border rounded-xl p-10">
      <h5 className="text-center text-xl font-bold">
        Penduduk Berumur 15 Tahun ke Atas Menurut Pendidikan Tertinggi yang
        Ditamatkan dan Jenis Kegiatan Selama Seminggu yang Lalu di Kota Jakarta
        Timur, 2020
      </h5>
      <table className="mt-8 rounded-t-2xl overflow-hidden w-full">
        <thead>
          <tr className="bg-[#E9F6FE]">
            <Th rowSpan={2}>Pendidikan Tertinggi yang Ditamatkan</Th>
            <Th colSpan={3} compact>
              Angkatan Kerja
            </Th>
            <Th rowSpan={2}>Persentase Bekerja Terhadap Angkatan Kerja</Th>
            <Th rowSpan={2}>Bukan Angkatan Kerja</Th>
            <Th rowSpan={2}>Jumlah</Th>
            <Th rowSpan={2}>
              Persentase Angkatan Kerja terhadap Penduduk Usia Kerja
            </Th>
          </tr>
          <tr className="bg-[#E9F6FE]">
            <Th compact>Bekerja</Th>
            <Th compact>Pengangguran</Th>
            <Th compact>Jumlah Angkatan Kerja</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <Td data-striped={index % 2 === 0}>{item.id}</Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.employers)}
              </Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.unemployers)}
              </Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.totalEmployers)}
              </Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.percentage, 2)}
              </Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.notWorkforce)}
              </Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.total)}
              </Td>
              <Td data-striped={index % 2 === 0}>
                {formattedNumber(item.workforcePercentage, 2)}
              </Td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="mt-2 text-sm text-center font-medium text-white">
            <th className="bg-[#1DA1F2] rounded-l-2xl p-4 whitespace-nowrap">
              Total
            </th>
            <th className="bg-[#1DA1F2] p-4">{countSum("employers")}</th>
            <th className="bg-[#1DA1F2] p-4">{countSum("unemployers")}</th>
            <th className="bg-[#1DA1F2] p-4">{countSum("totalEmployers")}</th>
            <th className="bg-[#1DA1F2] p-4">{countAverage("percentage")}</th>
            <th className="bg-[#1DA1F2] p-4">{countSum("notWorkforce")}</th>
            <th className="bg-[#1DA1F2] p-4">{countSum("total")}</th>
            <th className="bg-[#1DA1F2] p-4 rounded-r-2xl">
              {countAverage("workforcePercentage")}
            </th>
          </tr>
        </tfoot>
      </table>
      <div className="mt-6 flex gap-4 text-[#23272E]">
        <div className="text-xs">Catatan :</div>
        <div>
          <ul className="flex gap-4 text-xs">
            <li>0 ≤ Sekolah Dasar (SD)</li>
            <li>1. Sekolah Menengah Pertama</li>
            <li>2. Sekolah Menengah Atas</li>
            <li>3. Perguruan Tinggi</li>
          </ul>
          <ul className="mt-2 flex gap-4 text-xs">
            <li>1. Mencari pekerjaan</li>
            <li>2. Mempersiapkan usaha</li>
            <li>3. Merasa tidak mungkin mendapat pekerjaan</li>
            <li>4. Sudah punya pekerjaan tetapi belum mulai bekerja</li>
          </ul>
        </div>
      </div>
      <p className="mt-6 flex gap-4 items-center text-blue-500 text-sm">
        <Icon name="Info" size={16} />
        Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas)
        Agustus/BPS-Statistics Indonesia, August National Labor Force Survey
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

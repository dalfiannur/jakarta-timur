import { Flex } from "@/app/components/Flex";
import { Grid } from "@/app/components/Grid";
import { Pagination } from "@/app/components/Pagination";
import { Text } from "@/app/components/Text";
import { useTable } from "@/app/hooks/useTable";
import { formattedNumber } from "@/utils/format-number";

const data = Array.from(new Array(5).keys()).map((key) => ({
  id: key + 1,
  district: "Jatinegara",
  subDistrict: "Cipinang Besar Utara",
  category: "Rumah Tahanan/Lapas",
  name: "Lapas Kelas 1 Cipinang",
  totalElector: 1686,
  totalTps: 4,
  orderTps: "901-904",
}));

export const TPSTableSection = () => {
  const { table } = useTable({
    data,
    columns: [
      {
        keyIndex: "district",
        header: () => "Kecamatan",
      },
      {
        keyIndex: "subDistrict",
        header: () => "Kelurahan/Desa",
      },
      {
        keyIndex: "category",
        header: () => "Kategori Lokasi Khusus",
      },
      {
        keyIndex: "name",
        header: () => "Nama Lokasi Khusus",
        footer: () => "Total",
      },
      {
        keyIndex: "totalElector",
        header: () => "Jumlah Pemilih Lokasi Khusus",
        cell: (row) => formattedNumber(row.totalElector),
        footer: () =>
          formattedNumber(
            data.map((d) => d.totalElector).reduce((a, b) => a + b, 0),
          ),
      },
      {
        keyIndex: "totalTps",
        header: () => "Jumlah TPS Lokasi Khusus",
        cell: (row) => formattedNumber(row.totalTps),
        footer: () =>
          formattedNumber(
            data.map((d) => d.totalTps).reduce((a, b) => a + b, 0),
          ),
      },
      {
        keyIndex: "orderTps",
        header: () => "Urutan TPS",
      },
    ],
    classNames: {
      body: {
        row: "text-center",
      },
    },
  });
  return (
    <Flex direction="column" gap="md">
      <Text weight="bold" size="lg">
        Tempat Pemungutan Suara Pada Lokasi Khusus di Kota Jakarta Timur Pada
        Pemilihan Gubernur Dan Wakil Gubernur Tahun 2024
      </Text>
      <Flex direction="column" gap="md">
        {table}
        <Grid cols={3} align="center">
          <Text color="subtle" size="xs">
            Menampilkan 1-5 dari 10 Data
          </Text>
          <Flex justify="center">
            <Pagination total={2} color="orange" />
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

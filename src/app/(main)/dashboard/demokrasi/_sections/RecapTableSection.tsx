import { Flex } from "@/app/components/Flex";
import { Grid } from "@/app/components/Grid";
import { Pagination } from "@/app/components/Pagination";
import { Text } from "@/app/components/Text";
import { useTable } from "@/app/hooks/useTable";
import { formattedNumber } from "@/utils/format-number";
import _ from "lodash";

const data = Array.from(new Array(5).keys()).map((key) => ({
  id: key + 1,
  district: "Jatinegara",
  totalSubDistrict: _.random(1, 10),
  totalTps: 4,
  male: _.random(1, 10),
  female: _.random(1, 10),
}));

export const RecapTableSection = () => {
  const { table } = useTable({
    data,
    columns: [
      {
        keyIndex: "district",
        header: () => "Kecamatan",
      },
      {
        header: () => "Jumlah Kelurahan",
        cell: (row) => formattedNumber(row.totalSubDistrict),
      },
      {
        header: () => "Jumlah TPS",
        cell: (row) => formattedNumber(row.totalTps),
        footer: () =>
          formattedNumber(
            data.map((d) => d.totalTps).reduce((a, b) => a + b, 0),
          ),
      },
      {
        header: () => "Perubahan Agustus 2021 - 2022",
        columns: [
          {
            keyIndex: "male",
            header: () => "L",
          },
          {
            keyIndex: "female",
            header: () => "P",
          },
          {
            header: () => "L+P",
            cell: (row) => row.male + row.female,
          },
        ],
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
        Rekapitulasi Daftar Pemilih Tetap Kota Jakarta TImur Provinsi Daerah
        Khusus Jakarta Dalam Penyelenggaraan Pemilihan Gubernur dan Wakil
        Gubernur 2024
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

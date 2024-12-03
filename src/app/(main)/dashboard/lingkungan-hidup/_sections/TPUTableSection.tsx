"use client";
import { Flex } from "@/app/components/Flex";
import { Grid } from "@/app/components/Grid";
import { Pagination } from "@/app/components/Pagination";
import { SearchInput } from "@/app/components/SearchInput";
import { Text } from "@/app/components/Text";
import { useTable } from "@/app/hooks/useTable";
import _ from "lodash";
import { useState } from "react";

const data = Array.from(new Array(5).keys()).map((__, index) => ({
  id: index + 1,
  location: "TPU Cijantung",
  district: "Pasar Rebo",
  subDistrict: "Cijantung",
  address: "Jl. Lb. Sari No.17, RT.6/RW.2",
  religion: _.fromPairs(
    ["islam", "kristen", "hindu_budha", "mix"].map((item) => [
      item,
      _.random(1, 10),
    ]),
  ),
}));

export const TPUTableSection = () => {
  const [page, setPage] = useState(1);
  const { table } = useTable({
    data,
    columns: [
      {
        keyIndex: "location",
        header: () => "Lokasi",
      },
      {
        keyIndex: "district",
        header: () => "Kecamatan",
      },
      {
        keyIndex: "subDistrict",
        header: () => "Kelurahan",
      },
      {
        keyIndex: "religion.islam",
        header: () => "Islam",
      },
      {
        keyIndex: "religion.kristen",
        header: () => "Kristen",
      },
      {
        keyIndex: "religion.hindu_budha",
        header: () => "Hindu/Budha",
      },
      {
        keyIndex: "religion.mix",
        header: () => "Campuran",
      },
    ],
    classNames: {
      body: {
        row: "text-center text-xs",
      },
    },
  });

  return (
    <Flex direction="column" gap="md">
      <Text weight="bold" size="lg">
        Jumlah Lokasi Tempat Pemakaman Umum
      </Text>
      <Flex>
        <SearchInput placeholder="Cari nama hotel..." color="orange" />
      </Flex>
      <Flex direction="column" gap="lg">
        {table}
        <Grid cols={3} align="center">
          <Text size="sm" color="subtle" classNames="col-span-2 md:col-span-1">
            Menampilkan 1-5 dari 10 Data
          </Text>
          <Flex align="center" justify="center">
            <Pagination
              page={page}
              total={2}
              color="orange"
              onPageChange={setPage}
            />
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
};

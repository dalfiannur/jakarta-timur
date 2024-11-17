"use client";
import Link from "next/link";
import { Column, IndustryTable } from "../_components/IndustryTable";

const data = [
  {
    id: 1,
    name: "Sentral Cawang Hotel",
    district: "Cawang",
    subDistrict: "Kramat Jati",
    longitude: -6.1977301,
    latitude: -6.1977301,
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
    group: "Hotel Berbintang",
  },
  {
    id: 1,
    name: "Sentral Cawang Hotel",
    district: "Cawang",
    subDistrict: "Kramat Jati",
    longitude: -6.1977301,
    latitude: -6.1977301,
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
    group: "Hotel Berbintang",
  },
  {
    id: 1,
    name: "Sentral Cawang Hotel",
    district: "Cawang",
    subDistrict: "Kramat Jati",
    longitude: -6.1977301,
    latitude: -6.1977301,
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
    group: "Hotel Berbintang",
  },
  {
    id: 1,
    name: "Sentral Cawang Hotel",
    district: "Cawang",
    subDistrict: "Kramat Jati",
    longitude: -6.1977301,
    latitude: -6.1977301,
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
    group: "Hotel Berbintang",
  },
  {
    id: 1,
    name: "Sentral Cawang Hotel",
    district: "Cawang",
    subDistrict: "Kramat Jati",
    longitude: -6.1977301,
    latitude: -6.1977301,
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
    group: "Hotel Berbintang",
  },
];

const columns: Column<(typeof data)[0]>[] = [
  {
    key: "name",
    title: "Nama",
  },
  {
    key: "district",
    title: "Kecamatan",
  },
  {
    key: "subDistrict",
    title: "Kelurahan",
  },
  {
    key: "longitude",
    title: "Longitude",
  },
  {
    key: "latitude",
    title: "Latitude",
  },
  {
    key: "address",
    title: "Alamat",
  },
  {
    key: "group",
    title: "Golongan",
  },
  {
    key: "id",
    title: "",
    render: () => <Link href="#">Lihat Detail</Link>,
  },
];

export const HotelTableSection = () => {
  return (
    <IndustryTable
      title="Hotel di Jakarta Timur"
      columns={columns}
      data={data}
    />
  );
};

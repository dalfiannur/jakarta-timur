import { Column, IndustryTable } from "../_components/IndustryTable";

const data = [
  {
    district: "Cipayung",
    sub_district: "Bambu Apus",
    condition: "Active",
    het: "Rp. 14.446",
    agent_name: "PT.AMANAH SAUDARA MANDIRI",
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
  },
  {
    district: "Cipayung",
    sub_district: "Bambu Apus",
    condition: "Active",
    het: "Rp. 14.446",
    agent_name: "PT.AMANAH SAUDARA MANDIRI",
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
  },
  {
    district: "Cipayung",
    sub_district: "Bambu Apus",
    condition: "Active",
    het: "Rp. 14.446",
    agent_name: "PT.AMANAH SAUDARA MANDIRI",
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
  },
  {
    district: "Cipayung",
    sub_district: "Bambu Apus",
    condition: "Active",
    het: "Rp. 14.446",
    agent_name: "PT.AMANAH SAUDARA MANDIRI",
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
  },
  {
    district: "Cipayung",
    sub_district: "Bambu Apus",
    condition: "Active",
    het: "Rp. 14.446",
    agent_name: "PT.AMANAH SAUDARA MANDIRI",
    address: "JL.Raya Setu No.104A, RT.5/RW.1",
  },
];

const columns: Column<(typeof data)[0]>[] = [
  {
    key: "district",
    title: "Kecamatan",
  },
  {
    key: "sub_district",
    title: "Kelurahan",
  },
  {
    key: "condition",
    title: "Kondisi",
  },
  {
    key: "het",
    title: "HET",
  },
  {
    key: "agent_name",
    title: "Nama Agen",
  },
  {
    key: "address",
    title: "Alamat",
  },
];

export const DepotAgentTableSection = () => {
  return (
    <IndustryTable
      title="Pangkalan Agen Gas LPG 3Kg Subsidi"
      columns={columns}
      data={data}
    />
  );
};

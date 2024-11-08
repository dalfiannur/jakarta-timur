import { getChartData } from "../../actions";
import { XBarGenderChart } from "../XBarGenderChart";

export default async function Page() {
  const data = await getChartData("jobSeekerByTitleChartData");

  return (
    <XBarGenderChart
      legend
      marginLeft={200}
      height={550}
      title="Jumlah Pencari Kerja yang Belum Ditempatkan Menurut Golongan Jabatan dan Jenis Kelamin di Kota Jakarta Timur, 2020"
      sourceInfo="Sumber/Source: Dinas Tenaga Kerja dan Transmigrasi Provinsi DKI Jakarta/Manpower and Transmigration Office of DKI Jakarta Province"
      data={data}
    />
  );
}

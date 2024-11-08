import { getChartData } from "../../actions";
import { XBarGenderChart } from "../XBarGenderChart";

export default async function Page() {
  const data = await getChartData("citizenActivityByJobChartData");
  return (
    <XBarGenderChart
      legend
      marginLeft={200}
      height={480}
      title="Penduduk Berumur 15 Tahun Ke Atas yang Bekerja Selama Seminggu yang Lalu Menurut Status Pekerjaan Utama dan Jenis Kelamin di Kota Jakarta Timur, 2020"
      sourceInfo="Sumber: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus"
      data={data}
    />
  );
}

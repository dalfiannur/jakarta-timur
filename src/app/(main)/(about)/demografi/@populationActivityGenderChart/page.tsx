import { getChartData } from "../../actions";
import { XBarGenderChart } from "../XBarGenderChart";

export default async function Page() {
  const data = await getChartData("citizenActivityByAgeChartData");
  return (
    <XBarGenderChart
      marginLeft={200}
      legend
      height={550}
      title="Jumlah Penduduk Berumur 15 Tahun Keatas Menurut Jenis Kegiatan Selama Seminggu yang Lalu dan Jenis Kelamin di Kota Jakarta Timur, 2020"
      sourceInfo="Sumber/Source: BPS, Survei Angkatan Kerja Nasional (Sakernas) Agustus/BPS-Statistics Indonesia, August National Labor Force Survey"
      data={data}
    />
  );
}
